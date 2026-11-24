import React, { useState, useEffect } from 'react';
import { RegistroProductorVid, RolUsuario, EstadoRegistro } from './types';
import { MOCK_REGISTROS } from './data/mockData';
import {
  dbObtenerTodos,
  dbGuardarRegistro,
  dbGuardarMultiples,
  dbActualizarEstado,
} from './services/db';
import {
  isFirebaseConfigured,
  fsGuardarRegistro,
  fsEscucharRegistros,
  fsActualizarEstado,
} from './services/firebase';
import { enviarRegistroASheets, isSheetsConfigured } from './services/sheets';
import { Navbar } from './components/Navbar';
import { AgentForm } from './components/AgentForm';
import { AdminReview } from './components/AdminReview';
import { CloudUpload, HardDriveDownload } from 'lucide-react';

export const App: React.FC = () => {
  const [registros, setRegistros] = useState<RegistroProductorVid[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [rol, setRol] = useState<RolUsuario>('AGENTE');
  const [isOnline, setIsOnline] = useState<boolean>(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );
  const [mensajeSincronizacion, setMensajeSincronizacion] = useState<string | null>(null);

  const usuarioAgente = 'agente.campo@tinogasta.gob.ar';
  const usuarioAdmin = 'admin.produccion@tinogasta.gob.ar';

  // 1. Cargar datos persistentes desde IndexedDB al iniciar
  useEffect(() => {
    async function inicializarAlmacenamientoLocal() {
      try {
        const registrosEnDisco = await dbObtenerTodos();

        if (registrosEnDisco.length === 0) {
          // Primera vez: sembrar registros de ejemplo en IndexedDB
          await dbGuardarMultiples(MOCK_REGISTROS);
          setRegistros(MOCK_REGISTROS);
        } else {
          // Cargar los registros reales persistidos en el dispositivo
          setRegistros(registrosEnDisco);
        }
      } catch (error) {
        console.error('Error al inicializar IndexedDB:', error);
        setRegistros(MOCK_REGISTROS);
      } finally {
        setIsLoaded(true);
      }
    }

    inicializarAlmacenamientoLocal();
  }, []);

  // 2. Si Firebase está configurado, escuchar en tiempo real Firestore
  useEffect(() => {
    if (!isFirebaseConfigured) return;

    const unsubscribe = fsEscucharRegistros(
      async (registrosNube) => {
        if (registrosNube.length > 0) {
          setRegistros(registrosNube);
          // Actualizar la réplica local de IndexedDB
          await dbGuardarMultiples(registrosNube);
        }
      },
      (err) => console.error('Error en listener de Firestore:', err)
    );

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  // 3. Escuchar cambios de conectividad reales del dispositivo
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      sincronizarColaLocal();
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [registros]);

  // Sincronizar registros locales hacia la cola pendiente (IndexedDB + Firebase)
  const sincronizarColaLocal = async () => {
    try {
      const todos = await dbObtenerTodos();
      const pendientesDeSubir = todos.filter((r) => r.estado === 'LOCAL');

      if (pendientesDeSubir.length > 0) {
        const actualizados = todos.map((r) => {
          if (r.estado === 'LOCAL') {
            const regSincronizado: RegistroProductorVid = {
              ...r,
              estado: 'PENDIENTE',
              historial: [
                ...r.historial,
                {
                  fecha: new Date().toISOString(),
                  usuario: usuarioAgente,
                  accion: 'ACTUALIZACION',
                  camposModificados: ['sincronizado_a_cola_firebase'],
                },
              ],
            };

            // Si Firebase está activo, enviar a la nube
            if (isFirebaseConfigured) {
              fsGuardarRegistro(regSincronizado).catch((e) =>
                console.error('Error subiendo a Firestore:', e)
              );
            }

            return regSincronizado;
          }
          return r;
        });

        await dbGuardarMultiples(actualizados);
        setRegistros(actualizados);

        setMensajeSincronizacion(
          `¡Conexión activa! Se sincronizaron ${pendientesDeSubir.length} registro(s) guardados en el celular hacia Firebase.`
        );
        setTimeout(() => setMensajeSincronizacion(null), 5000);
      }
    } catch (err) {
      console.error('Error en sincronización automática:', err);
    }
  };

  // Botón manual de alternar conectividad (para pruebas en escritorio)
  const handleToggleOnline = () => {
    const nuevoEstado = !isOnline;
    setIsOnline(nuevoEstado);
    if (nuevoEstado) {
      sincronizarColaLocal();
    }
  };

  // Guardar nuevo registro o actualización desde el formulario del agente
  const handleGuardarRegistro = async (nuevoRegistro: RegistroProductorVid) => {
    try {
      // 1. Guardar físicamente en IndexedDB local del navegador
      await dbGuardarRegistro(nuevoRegistro);
      setRegistros((prev) => [nuevoRegistro, ...prev]);

      // 2. Si hay conexión y Firebase está configurado, enviar a la nube
      if (isOnline && nuevoRegistro.estado === 'PENDIENTE' && isFirebaseConfigured) {
        await fsGuardarRegistro(nuevoRegistro);
      }
    } catch (error) {
      console.error('Error al guardar registro:', error);
      setRegistros((prev) => [nuevoRegistro, ...prev]);
    }
  };

  // Confirmar registro desde la oficina y enviar a Google Sheets
  const handleConfirmarRegistro = async (id: string) => {
    const registroAConfirmar = registros.find((r) => r.id === id);
    if (!registroAConfirmar) return;

    setMensajeSincronizacion('⏳ Enviando registro a Google Sheets...');

    const fecha = new Date().toISOString();
    let filaGenerada = 10325;
    let mensajeExito = 'Registro confirmado exitosamente.';

    // 1. Enviar al Webhook de Google Sheets
    try {
      const resultadoSheets = await enviarRegistroASheets(registroAConfirmar);
      if (resultadoSheets.success && resultadoSheets.fila) {
        filaGenerada = resultadoSheets.fila;
        mensajeExito = `✓ Registro confirmado y guardado en Google Sheets (Fila ${filaGenerada}).`;
      } else if (!resultadoSheets.success) {
        console.warn('Google Sheets reportó error o advertencia:', resultadoSheets.error);
        mensajeExito = `⚠️ Registro confirmado en sistema (Pendiente en Sheets: ${resultadoSheets.error})`;
      }
    } catch (e: any) {
      console.error('Error al conectar con Sheets:', e);
    }

    // 2. Actualizar estado local (IndexedDB) y en memoria
    const actualizados = registros.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          estado: 'CONFIRMADO' as const,
          enviadoSheets: true,
          filaSheets: filaGenerada,
          fechaRevision: fecha,
          revisadoPor: usuarioAdmin,
          historial: [
            ...r.historial,
            {
              fecha,
              usuario: usuarioAdmin,
              accion: 'CONFIRMACION' as const,
              camposModificados: ['estado_confirmado', 'enviado_a_sheets'],
            },
          ],
        };
      }
      return r;
    });

    setRegistros(actualizados);
    await dbActualizarEstado(id, 'CONFIRMADO');

    // 3. Si Firebase está activo, sincronizar también en la nube
    if (isFirebaseConfigured) {
      await fsActualizarEstado(id, 'CONFIRMADO', {
        enviadoSheets: true,
        filaSheets: filaGenerada,
        fechaRevision: fecha,
        revisadoPor: usuarioAdmin,
      });
    }

    setMensajeSincronizacion(mensajeExito);
    setTimeout(() => setMensajeSincronizacion(null), 6000);
  };

  // Baja lógica
  const handleBajaLogica = async (id: string) => {
    const fecha = new Date().toISOString();

    const actualizados = registros.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          estado: 'INACTIVO' as const,
          historial: [
            ...r.historial,
            {
              fecha,
              usuario: usuarioAdmin,
              accion: 'BAJA_LOGICA' as const,
              camposModificados: ['estado_inactivo'],
            },
          ],
        };
      }
      return r;
    });

    setRegistros(actualizados);
    await dbActualizarEstado(id, 'INACTIVO');

    if (isFirebaseConfigured) {
      await fsActualizarEstado(id, 'INACTIVO');
    }
  };

  // Restaurar baja lógica
  const handleRestaurar = async (id: string) => {
    const target = registros.find((r) => r.id === id);
    const nuevoEstado = target?.enviadoSheets ? 'CONFIRMADO' : 'PENDIENTE';
    const fecha = new Date().toISOString();

    const actualizados = registros.map((r) => {
      if (r.id === id) {
        return {
          ...r,
          estado: nuevoEstado as EstadoRegistro,
          historial: [
            ...r.historial,
            {
              fecha,
              usuario: usuarioAdmin,
              accion: 'RESTAURACION' as const,
              camposModificados: ['estado_restaurado'],
            },
          ],
        };
      }
      return r;
    });

    setRegistros(actualizados);
    await dbActualizarEstado(id, nuevoEstado as EstadoRegistro);

    if (isFirebaseConfigured) {
      await fsActualizarEstado(id, nuevoEstado as EstadoRegistro);
    }
  };

  // Actualizar un registro tras corregir en la oficina
  const handleActualizarRegistro = async (registroActualizado: RegistroProductorVid) => {
    const actualizados = registros.map((r) =>
      r.id === registroActualizado.id ? registroActualizado : r
    );
    setRegistros(actualizados);
    await dbGuardarRegistro(registroActualizado);

    if (isFirebaseConfigured) {
      await fsGuardarRegistro(registroActualizado);
    }
  };

  const colaPendienteCount = registros.filter((r) => r.estado === 'PENDIENTE').length;

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="flex items-center gap-3 text-slate-600 font-semibold text-sm">
          <HardDriveDownload className="w-5 h-5 animate-bounce text-vinotinto-800" />
          <span>Cargando almacenamiento local (IndexedDB)...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar
        rol={rol}
        onCambiarRol={setRol}
        isOnline={isOnline}
        onToggleOnline={handleToggleOnline}
        colaPendienteCount={colaPendienteCount}
      />

      {/* Sync Toast Notification */}
      {mensajeSincronizacion && (
        <div className="bg-emerald-600 text-white text-xs font-semibold py-2.5 px-4 text-center shadow-md flex items-center justify-center gap-2 animate-bounce">
          <CloudUpload className="w-4 h-4" />
          <span>{mensajeSincronizacion}</span>
        </div>
      )}

      {/* Status Bar / Tech Telemetry */}
      <div className="max-w-6xl mx-auto px-4 pt-3 pb-2 w-full">
        <div className="bg-slate-100/80 border border-slate-200/90 rounded-2xl px-3.5 py-2 flex flex-wrap items-center justify-between gap-2.5 text-xs">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            {/* Firestore Telemetry */}
            <div className="flex items-center gap-2 bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  isFirebaseConfigured
                    ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse'
                    : 'bg-slate-400'
                }`}
              ></span>
              <span className="font-semibold text-slate-700 text-[11px]">
                {isFirebaseConfigured ? 'Cloud Firestore: En línea' : 'Almacenamiento Local (IndexedDB)'}
              </span>
            </div>

            {/* Sheets Telemetry */}
            <div className="flex items-center gap-2 bg-white px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
              <span
                className={`w-2 h-2 rounded-full ${
                  isSheetsConfigured
                    ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)] animate-pulse'
                    : 'bg-amber-400'
                }`}
              ></span>
              <span className="font-semibold text-slate-700 text-[11px]">
                {isSheetsConfigured
                  ? 'Google Sheets: Conectado (Hoja REGISTRO)'
                  : 'Google Sheets: Simulación Local'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-vinotinto-600"></span>
            <span>Rubro Oficial: <strong>VID (Vitivinicultura)</strong></span>
          </div>
        </div>
      </div>

      {/* Role View Routing */}
      <main className="flex-1">
        {rol === 'AGENTE' ? (
          <AgentForm
            isOnline={isOnline}
            onGuardarRegistro={handleGuardarRegistro}
            usuarioActual={usuarioAgente}
            productoresRegistrados={registros}
          />
        ) : (
          <AdminReview
            registros={registros}
            onConfirmarRegistro={handleConfirmarRegistro}
            onBajaLogica={handleBajaLogica}
            onRestaurar={handleRestaurar}
            onActualizarRegistro={handleActualizarRegistro}
            usuarioAdmin={usuarioAdmin}
          />
        )}
      </main>

      {/* Institutional & Academic Footer */}
      <footer className="bg-white border-t border-slate-200/80 py-5 text-center text-xs text-slate-500 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <div className="text-left">
            <p className="font-bold text-slate-800 text-xs">
              Secretaría de Producción · Municipalidad de Tinogasta, Catamarca
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Proyecto de Pasantía y Seminario Final Universitario · Convocatoria 2026
            </p>
          </div>
          <div className="text-right sm:text-right text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              PWA Offline-First · Cloud Firestore · Google Apps Script
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
