import React, { useState } from 'react';
import { RegistroProductorVid, FactoresClimaticos, TipoTramite } from '../types';
import { DISTRITOS_TINOGASTA, VARIEDADES_VID } from '../data/mockData';
import {
  Save,
  Sparkles,
  HardDrive,
  Cloud,
  Info,
  Search,
  UserCheck,
  UserPlus,
  RefreshCw,
} from 'lucide-react';

interface Props {
  isOnline: boolean;
  onGuardarRegistro: (registro: RegistroProductorVid) => void;
  usuarioActual: string;
  productoresRegistrados: RegistroProductorVid[];
}

export const AgentForm: React.FC<Props> = ({
  isOnline,
  onGuardarRegistro,
  usuarioActual,
  productoresRegistrados,
}) => {
  // Trámite: ALTA vs ACTUALIZACION
  const [tipoTramite, setTipoTramite] = useState<TipoTramite>('ACTUALIZACION');
  const [busquedaProductor, setBusquedaProductor] = useState('');
  const [productorSeleccionado, setProductorSeleccionado] = useState<RegistroProductorVid | null>(null);

  // Form State
  const [apellidoNombre, setApellidoNombre] = useState('');
  const [dni, setDni] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [telefono, setTelefono] = useState('');
  const [distrito, setDistrito] = useState(DISTRITOS_TINOGASTA[0]);
  const [genero, setGenero] = useState<'FEM' | 'MASC' | ''>('');

  const [nombreEmprendimiento, setNombreEmprendimiento] = useState('');
  const [domicilioEmprendimiento, setDomicilioEmprendimiento] = useState('');
  const [domicilioParticular, setDomicilioParticular] = useState('');
  const [resideEnPropiedad, setResideEnPropiedad] = useState<'SI' | 'NO' | ''>('SI');
  const [situacionTenencia, setSituacionTenencia] = useState<'TITULO' | 'PREST' | 'ALQ' | 'SUCES' | ''>('TITULO');
  const [supTotal, setSupTotal] = useState<number | ''>('');

  const [variedad, setVariedad] = useState(VARIEDADES_VID[0]);
  const [otraVariedad, setOtraVariedad] = useState('');
  const [supM2, setSupM2] = useState<number | ''>('');
  const [destino, setDestino] = useState<'VENTA' | 'AUTOCONS' | ''>('VENTA');
  const [riego, setRiego] = useState<'MANTO' | 'GOTEO' | 'ASPERSION' | 'COMPLEM' | ''>('MANTO');
  const [maquinaria, setMaquinaria] = useState<'PROPIA' | 'ALQUILADA' | 'NINGUNA' | ''>('PROPIA');

  const [factoresClimaticos, setFactoresClimaticos] = useState<FactoresClimaticos>({
    heladasTardias: false,
    lluvia: false,
    granizo: false,
    zonda: false,
    zondaTardio: false,
  });
  const [nivelDano, setNivelDano] = useState<'BAJO' | 'MEDIO' | 'ALTO' | 'NINGUNO' | ''>('NINGUNO');
  const [observaciones, setObservaciones] = useState('');

  // UI Feedback
  const [mensajeExito, setMensajeExito] = useState<string | null>(null);

  // Auto-calculated Hectares: supM2 / 10000
  const supHaCalculada = typeof supM2 === 'number' && supM2 > 0 ? (supM2 / 10000).toFixed(4) : '';

  // Filtrado de productores registrados para búsqueda rápida
  const resultadosBusqueda = busquedaProductor.trim()
    ? productoresRegistrados.filter(
        (p) =>
          p.apellidoNombre.toLowerCase().includes(busquedaProductor.toLowerCase()) ||
          p.dni.includes(busquedaProductor.trim()) ||
          p.distrito.toLowerCase().includes(busquedaProductor.toLowerCase())
      )
    : [];

  const handleSeleccionarProductor = (p: RegistroProductorVid) => {
    setProductorSeleccionado(p);
    setBusquedaProductor('');

    // Pre-cargar datos existentes
    setApellidoNombre(p.apellidoNombre);
    setDni(p.dni);
    setFechaNacimiento(p.fechaNacimiento);
    setTelefono(p.telefono);
    setDistrito(p.distrito || DISTRITOS_TINOGASTA[0]);
    setGenero(p.genero);
    setNombreEmprendimiento(p.nombreEmprendimiento);
    setDomicilioEmprendimiento(p.domicilioEmprendimiento);
    setDomicilioParticular(p.domicilioParticular);
    setResideEnPropiedad(p.resideEnPropiedad);
    setSituacionTenencia(p.situacionTenencia);
    setSupTotal(p.supTotal);
    setVariedad(p.variedad || VARIEDADES_VID[0]);
    setSupM2(p.supM2);
    setDestino(p.destino || 'VENTA');
    setRiego(p.riego || 'MANTO');
    setMaquinaria(p.maquinaria || 'PROPIA');
    setFactoresClimaticos(p.factoresClimaticos);
    setNivelDano(p.nivelDano || 'NINGUNO');
    setObservaciones(p.observaciones);
  };

  const handleCambiarATramiteAlta = () => {
    setTipoTramite('ALTA');
    setProductorSeleccionado(null);
    setApellidoNombre('');
    setDni('');
    setFechaNacimiento('');
    setTelefono('');
    setNombreEmprendimiento('');
    setDomicilioEmprendimiento('');
    setDomicilioParticular('');
    setSupTotal('');
    setSupM2('');
    setObservaciones('');
    setOtraVariedad('');
  };

  const handleCargarEjemplo = () => {
    setTipoTramite('ALTA');
    setProductorSeleccionado(null);
    setApellidoNombre('BORDÓN, MIGUEL ÁNGEL');
    setDni('23145890');
    setFechaNacimiento('1973-08-14');
    setTelefono('3837429988');
    setDistrito('SANTA ROSA');
    setGenero('MASC');
    setNombreEmprendimiento('FINCA LA ESPERANZA');
    setDomicilioEmprendimiento('Calle San Martín s/n');
    setDomicilioParticular('Bº Centro, Santa Rosa');
    setResideEnPropiedad('SI');
    setSituacionTenencia('TITULO');
    setSupTotal(4.0);
    setVariedad('MALBEC');
    setSupM2(25000);
    setDestino('VENTA');
    setRiego('GOTEO');
    setMaquinaria('PROPIA');
    setFactoresClimaticos({
      heladasTardias: true,
      lluvia: false,
      granizo: false,
      zonda: true,
      zondaTardio: false,
    });
    setNivelDano('BAJO');
    setObservaciones('Productor con bodega artesanal propia. Carga de relevamiento.');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const variedadFinal = variedad === 'OTRA' && otraVariedad ? otraVariedad.toUpperCase() : variedad;
    const supHaNumero = supHaCalculada ? parseFloat(supHaCalculada) : '';

    const nuevoRegistro: RegistroProductorVid = {
      id: `rec-${Date.now()}`,
      tipoTramite,
      productorExistenteId: productorSeleccionado?.id,
      nroRegistro: productorSeleccionado?.nroRegistro || '',
      apellidoNombre: apellidoNombre.trim().toUpperCase() || 'PRODUCTOR NO IDENTIFICADO',
      dni: dni.trim(),
      fechaNacimiento,
      telefono: telefono.trim(),
      distrito,
      genero,
      nombreEmprendimiento: nombreEmprendimiento.trim().toUpperCase(),
      domicilioEmprendimiento: domicilioEmprendimiento.trim(),
      domicilioParticular: domicilioParticular.trim(),
      resideEnPropiedad,
      situacionTenencia,
      supTotal: supTotal === '' ? '' : Number(supTotal),
      cultivo: 'VID',
      variedad: variedadFinal,
      supM2: supM2 === '' ? '' : Number(supM2),
      supHa: supHaNumero,
      destino,
      riego,
      maquinaria,
      factoresClimaticos,
      nivelDano,
      observaciones: observaciones.trim(),
      estado: isOnline ? 'PENDIENTE' : 'LOCAL',
      creadoPor: usuarioActual,
      fechaCreacion: new Date().toISOString(),
      enviadoSheets: false,
      historial: [
        {
          fecha: new Date().toISOString(),
          usuario: usuarioActual,
          accion: tipoTramite === 'ACTUALIZACION' ? 'ACTUALIZACION' : 'CREACION',
          camposModificados: ['formulario_campo'],
        },
      ],
    };

    onGuardarRegistro(nuevoRegistro);

    setMensajeExito(
      isOnline
        ? `✓ ${tipoTramite === 'ACTUALIZACION' ? 'Actualización' : 'Alta'} enviada a Firebase (Pendiente de revisión por oficina).`
        : `✓ ${tipoTramite === 'ACTUALIZACION' ? 'Actualización' : 'Alta'} guardada en el teléfono (Sin conexión). Se sincronizará al volver la señal.`
    );

    // Reset Form
    setProductorSeleccionado(null);
    setApellidoNombre('');
    setDni('');
    setTelefono('');
    setFechaNacimiento('');
    setNombreEmprendimiento('');
    setDomicilioEmprendimiento('');
    setDomicilioParticular('');
    setSupTotal('');
    setSupM2('');
    setObservaciones('');
    setOtraVariedad('');

    setTimeout(() => {
      setMensajeExito(null);
    }, 5000);
  };

  return (
    <div className="max-w-2xl mx-auto py-6 px-4">
      {/* Top Banner */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <span className="text-xs font-bold text-vinotinto-700 tracking-wider uppercase bg-vinotinto-50 px-2.5 py-1 rounded-md">
              Formulario de Campo
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-2">
              Registro y Actualización · VID
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Optimizado para carga ágil en finca rural. Los campos vacíos conservan los datos ya existentes en la planilla.
            </p>
          </div>
          <button
            type="button"
            onClick={handleCargarEjemplo}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-vinotinto-700" />
            Cargar ejemplo nuevo
          </button>
        </div>

        {/* SELECTOR DE TIPO DE TRÁMITE */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTipoTramite('ACTUALIZACION')}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
              tipoTramite === 'ACTUALIZACION'
                ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-sm'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Actualizar Productor Existente</span>
          </button>

          <button
            type="button"
            onClick={handleCambiarATramiteAlta}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
              tipoTramite === 'ALTA'
                ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-sm'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Nuevo Productor (Alta)</span>
          </button>
        </div>

        {/* BUSCADOR DE PRODUCTORES EXISTENTES EN MODO ACTUALIZACIÓN */}
        {tipoTramite === 'ACTUALIZACION' && (
          <div className="mt-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
            <label className="block text-xs font-bold text-slate-800 mb-1.5 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-vinotinto-700" />
              <span>Buscar productor en la planilla (por DNI o Nombre):</span>
            </label>
            <input
              type="text"
              placeholder="Ej. Álvarez o 24890123..."
              value={busquedaProductor}
              onChange={(e) => setBusquedaProductor(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 bg-white"
            />

            {/* Resultados desplegables */}
            {resultadosBusqueda.length > 0 && (
              <div className="mt-2 bg-white rounded-lg border border-slate-200 shadow-lg divide-y divide-slate-100 max-h-48 overflow-y-auto">
                {resultadosBusqueda.map((prod) => (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => handleSeleccionarProductor(prod)}
                    className="w-full text-left p-2.5 hover:bg-vinotinto-50 text-xs transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="font-bold text-slate-900">{prod.apellidoNombre}</div>
                      <div className="text-slate-500 text-[11px]">
                        DNI: {prod.dni || 'S/D'} · Distrito: {prod.distrito}
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-vinotinto-700 bg-vinotinto-50 px-2 py-0.5 rounded">
                      Cargar datos
                    </span>
                  </button>
                ))}
              </div>
            )}

            {productorSeleccionado && (
              <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs text-emerald-900">
                  <UserCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold">Editando a:</span> {productorSeleccionado.apellidoNombre}{' '}
                    <span className="text-slate-500 font-mono">(DNI: {productorSeleccionado.dni})</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setProductorSeleccionado(null)}
                  className="text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  ✕
                </button>
              </div>
            )}

            <p className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span>
                <strong>Regla de oro:</strong> En actualizaciones, los campos en blanco conservarán el
                valor ya registrado en Google Sheets. Solo debes cargar los datos que cambiaron.
              </span>
            </p>
          </div>
        )}

        {mensajeExito && (
          <div
            className={`mt-4 p-3.5 rounded-xl text-xs font-semibold flex items-center gap-2.5 ${
              isOnline
                ? 'bg-blue-50 text-blue-900 border border-blue-200'
                : 'bg-amber-50 text-amber-900 border border-amber-200'
            }`}
          >
            {isOnline ? (
              <Cloud className="w-4 h-4 text-blue-600 flex-shrink-0" />
            ) : (
              <HardDrive className="w-4 h-4 text-amber-600 flex-shrink-0" />
            )}
            <span>{mensajeExito}</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* BLOQUE 1: IDENTIFICACIÓN DEL PRODUCTOR */}
        <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-2 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-vinotinto-100 text-vinotinto-800 text-xs flex items-center justify-center font-bold">
                1
              </span>
              Identificación del Productor (Cols A a K)
            </h3>
            {productorSeleccionado && (
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Datos preexistentes en Sheets
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">
                Apellido y Nombre
              </label>
              <input
                type="text"
                value={apellidoNombre}
                onChange={(e) => setApellidoNombre(e.target.value)}
                placeholder="Ej. BORDÓN, MIGUEL ÁNGEL"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">DNI (Sin puntos)</label>
              <input
                type="number"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                placeholder="Ej. 23145890"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Teléfono</label>
              <input
                type="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Ej. 3837429988"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Distrito (Tinogasta)
              </label>
              <select
                value={distrito}
                onChange={(e) => setDistrito(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm bg-white"
              >
                {DISTRITOS_TINOGASTA.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">Fecha de Nacimiento</label>
              <input
                type="date"
                value={fechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm bg-white"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1.5">Género</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setGenero('MASC')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    genero === 'MASC'
                      ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>👨 Masculino (Col K)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setGenero('FEM')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    genero === 'FEM'
                      ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>👩 Femenino (Col J)</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 2: FINCA Y TENENCIA */}
        <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-vinotinto-100 text-vinotinto-800 text-xs flex items-center justify-center font-bold">
                2
              </span>
              Datos de Finca y Tenencia (Cols E a V, AC)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Nombre Emprendimiento / Finca
              </label>
              <input
                type="text"
                value={nombreEmprendimiento}
                onChange={(e) => setNombreEmprendimiento(e.target.value)}
                placeholder="Ej. FINCA LA ESPERANZA"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Superficie Total del Terreno (Ha)
              </label>
              <input
                type="number"
                step="0.01"
                value={supTotal}
                onChange={(e) => setSupTotal(e.target.value === '' ? '' : parseFloat(e.target.value))}
                placeholder="Ej. 4.0"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Domicilio del Emprendimiento
              </label>
              <input
                type="text"
                value={domicilioEmprendimiento}
                onChange={(e) => setDomicilioEmprendimiento(e.target.value)}
                placeholder="Ubicación / calle del predio"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Domicilio Particular
              </label>
              <input
                type="text"
                value={domicilioParticular}
                onChange={(e) => setDomicilioParticular(e.target.value)}
                placeholder="Domicilio de residencia"
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                ¿Reside en la Propiedad? (Cols Q/R)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setResideEnPropiedad('SI')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    resideEnPropiedad === 'SI'
                      ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>🏡 Sí, reside</span>
                </button>
                <button
                  type="button"
                  onClick={() => setResideEnPropiedad('NO')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    resideEnPropiedad === 'NO'
                      ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>🚗 No reside</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                Situación de Tenencia (Cols S a V)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'TITULO', label: '📜 Título (S)' },
                  { id: 'PREST', label: '🤝 Préstamo (T)' },
                  { id: 'ALQ', label: '📝 Alquiler (U)' },
                  { id: 'SUCES', label: '⚖️ Sucesión (V)' },
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSituacionTenencia(t.id as any)}
                    className={`py-2 px-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                      situacionTenencia === t.id
                        ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 3: CULTIVO DE VID */}
        <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-vinotinto-700 text-white text-xs flex items-center justify-center font-bold">
                3
              </span>
              Cultivo Piloto: VID (Cols AE a AP)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Tipo / Variedad de Uva (Col AF)
              </label>
              <select
                value={variedad}
                onChange={(e) => setVariedad(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 focus:border-transparent text-sm bg-white font-medium"
              >
                {VARIEDADES_VID.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            {variedad === 'OTRA' && (
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Especificar otra variedad
                </label>
                <input
                  type="text"
                  value={otraVariedad}
                  onChange={(e) => setOtraVariedad(e.target.value)}
                  placeholder="Ej. MOSCATEL DE ALEJANDRIA"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 text-sm"
                />
              </div>
            )}

            {/* SUPERFICIE M2 Y HECTÁREAS AUTOCALCULADAS */}
            <div className="sm:col-span-2 bg-vinotinto-50/50 p-4 rounded-xl border border-vinotinto-100 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div>
                <label className="block font-bold text-slate-900 mb-1">
                  Superficie Cultivada en m² (Col AG)
                </label>
                <input
                  type="number"
                  value={supM2}
                  onChange={(e) => setSupM2(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  placeholder="Ej. 15000"
                  className="w-full px-3 py-2.5 rounded-xl border border-vinotinto-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 text-base font-semibold bg-white"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  Ingrese los metros cuadrados medidos en finca.
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-vinotinto-200">
                <span className="text-[11px] font-bold text-vinotinto-800 uppercase tracking-wider block">
                  Cálculo automático de Hectáreas (Col AH: AG/10000)
                </span>
                <div className="text-2xl font-black text-vinotinto-900 mt-1">
                  {supHaCalculada ? `${supHaCalculada} ha` : '0.00 ha'}
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Preserva la fórmula exacta del Excel de la Secretaría.
                </p>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                Destino de la Uva (Cols AI/AJ)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDestino('VENTA')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    destino === 'VENTA'
                      ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>🍇 Venta / Bodega (AI)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDestino('AUTOCONS')}
                  className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    destino === 'AUTOCONS'
                      ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>🍷 Autoconsumo (AJ)</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">
                Sistema de Riego (Cols AK a AN)
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'MANTO', label: '🌊 Manto (AK)' },
                  { id: 'GOTEO', label: '💧 Goteo (AL)' },
                  { id: 'ASPERSION', label: '🚿 Aspersión (AM)' },
                  { id: 'COMPLEM', label: '🔄 Pozo/Compl. (AN)' },
                ].map((r) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRiego(r.id as any)}
                    className={`py-2 px-2 rounded-xl border text-xs font-bold text-center transition-all ${
                      riego === r.id
                        ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1.5">
                Maquinaria de Trabajo (Cols AO/AP)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'PROPIA', label: '🚜 Propia (AO)' },
                  { id: 'ALQUILADA', label: '🤝 Alquilada (AP)' },
                  { id: 'NINGUNA', label: '❌ Ninguna' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setMaquinaria(m.id as any)}
                    className={`py-2 px-2 rounded-xl border text-xs font-bold text-center transition-all ${
                      maquinaria === m.id
                        ? 'bg-vinotinto-800 text-white border-vinotinto-900 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 4: FACTORES CLIMÁTICOS Y DAÑO */}
        <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-vinotinto-100 text-vinotinto-800 text-xs flex items-center justify-center font-bold">
                4
              </span>
              Factores Climáticos y Daño (Cols AQ a AX)
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            <label className="block font-semibold text-slate-700">
              Fenómenos climáticos que afectaron la plantación:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { key: 'heladasTardias', label: '❄️ Heladas Tardías (AQ)', checked: factoresClimaticos.heladasTardias },
                { key: 'granizo', label: '🧊 Granizo (AS)', checked: factoresClimaticos.granizo },
                { key: 'zonda', label: '💨 Viento Zonda (AT)', checked: factoresClimaticos.zonda },
                { key: 'zondaTardio', label: '🌪️ Zonda Tardío (AU)', checked: factoresClimaticos.zondaTardio },
                { key: 'lluvia', label: '🌧️ Lluvia Excesiva (AR)', checked: factoresClimaticos.lluvia },
              ].map((f) => (
                <label
                  key={f.key}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer font-bold transition-all ${
                    f.checked
                      ? 'bg-vinotinto-50 text-vinotinto-900 border-vinotinto-300 shadow-2xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={f.checked}
                    onChange={(e) =>
                      setFactoresClimaticos({
                        ...factoresClimaticos,
                        [f.key]: e.target.checked,
                      })
                    }
                    className="rounded text-vinotinto-700 focus:ring-vinotinto-600"
                  />
                  <span>{f.label}</span>
                </label>
              ))}
            </div>

            <div className="pt-2">
              <label className="block font-bold text-slate-800 mb-2">
                Nivel de Daño Estimado (Semáforo Oficial · Cols AV a AX)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  type="button"
                  onClick={() => setNivelDano('NINGUNO')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    nivelDano === 'NINGUNO'
                      ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm ring-2 ring-emerald-300'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>🟢 Sin Daño</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNivelDano('BAJO')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    nivelDano === 'BAJO'
                      ? 'bg-amber-500 text-white border-amber-600 shadow-sm ring-2 ring-amber-300'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>🟡 Daño Bajo (AV)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNivelDano('MEDIO')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    nivelDano === 'MEDIO'
                      ? 'bg-orange-500 text-white border-orange-600 shadow-sm ring-2 ring-orange-300'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>🟠 Daño Medio (AW)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setNivelDano('ALTO')}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    nivelDano === 'ALTO'
                      ? 'bg-red-600 text-white border-red-700 shadow-sm ring-2 ring-red-300'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <span>🔴 Daño Alto (AX)</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE 5: OBSERVACIONES */}
        <section className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
          <label className="block font-semibold text-slate-700 text-xs">
            Observaciones Adicionales (Col AD)
          </label>
          <textarea
            rows={2}
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            placeholder="Detalles de ubicación, caminos, situación hídrica o notas del relevamiento..."
            className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600 text-sm"
          />
        </section>

        {/* SUBMIT BUTTON */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-white bg-vinotinto-800 hover:bg-vinotinto-900 active:scale-[0.99] transition-all shadow-md"
          >
            <Save className="w-5 h-5" />
            <span>
              {isOnline
                ? `Enviar ${tipoTramite === 'ACTUALIZACION' ? 'Actualización' : 'Alta'} (Sincronizar a Firebase)`
                : `Guardar ${tipoTramite === 'ACTUALIZACION' ? 'Actualización' : 'Alta'} en Celular (Offline)`}
            </span>
          </button>
          <p className="text-center text-[11px] text-slate-500 mt-2 flex items-center justify-center gap-1">
            <Info className="w-3.5 h-3.5" />
            {isOnline
              ? 'Con conexión activa: el registro quedará pendiente de aprobación por la oficina.'
              : 'Sin señal: el registro se conserva localmente en el dispositivo de forma segura.'}
          </p>
        </div>
      </form>
    </div>
  );
};
