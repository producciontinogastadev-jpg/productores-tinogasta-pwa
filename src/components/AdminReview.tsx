import React, { useState } from 'react';
import { RegistroProductorVid, EstadoRegistro } from '../types';
import { SyncStatusBadge } from './SyncStatusBadge';
import {
  Search,
  Filter,
  CheckCircle,
  FileSpreadsheet,
  AlertTriangle,
  RotateCcw,
  Eye,
  History,
  Cloud,
  HardDrive,
  CheckCheck,
  RefreshCw,
  UserPlus,
  Info,
} from 'lucide-react';

interface Props {
  registros: RegistroProductorVid[];
  onConfirmarRegistro: (id: string) => void;
  onBajaLogica: (id: string) => void;
  onRestaurar: (id: string) => void;
  onActualizarRegistro: (registroActualizado: RegistroProductorVid) => void;
  usuarioAdmin: string;
}

export const AdminReview: React.FC<Props> = ({
  registros,
  onConfirmarRegistro,
  onBajaLogica,
  onRestaurar,
  onActualizarRegistro,
  usuarioAdmin,
}) => {
  const [filtroEstado, setFiltroEstado] = useState<EstadoRegistro | 'TODOS'>('TODOS');
  const [busqueda, setBusqueda] = useState('');
  const [registroSeleccionado, setRegistroSeleccionado] = useState<RegistroProductorVid | null>(null);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [registroEditando, setRegistroEditando] = useState<RegistroProductorVid | null>(null);

  // Counters
  const pendientesCount = registros.filter((r) => r.estado === 'PENDIENTE').length;
  const confirmadosCount = registros.filter((r) => r.estado === 'CONFIRMADO').length;
  const localesCount = registros.filter((r) => r.estado === 'LOCAL').length;
  const inactivosCount = registros.filter((r) => r.estado === 'INACTIVO').length;

  const registrosFiltrados = registros.filter((r) => {
    const coincideEstado = filtroEstado === 'TODOS' || r.estado === filtroEstado;
    const coincideBusqueda =
      r.apellidoNombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.dni.includes(busqueda) ||
      r.distrito.toLowerCase().includes(busqueda.toLowerCase()) ||
      r.variedad.toLowerCase().includes(busqueda.toLowerCase());
    return coincideEstado && coincideBusqueda;
  });

  const abrirModalDetalle = (reg: RegistroProductorVid) => {
    setRegistroSeleccionado(reg);
    setRegistroEditando({ ...reg });
    setModoEdicion(false);
  };

  const handleGuardarEdicion = () => {
    if (!registroEditando) return;

    // Recalcular Ha si cambió m2
    const supM2Num = typeof registroEditando.supM2 === 'number' ? registroEditando.supM2 : 0;
    const supHaCalculada = supM2Num > 0 ? parseFloat((supM2Num / 10000).toFixed(4)) : '';

    const actualizado: RegistroProductorVid = {
      ...registroEditando,
      supHa: supHaCalculada,
      historial: [
        ...registroEditando.historial,
        {
          fecha: new Date().toISOString(),
          usuario: usuarioAdmin,
          accion: 'ACTUALIZACION',
          camposModificados: ['edicion_oficina'],
        },
      ],
    };

    onActualizarRegistro(actualizado);
    setRegistroSeleccionado(actualizado);
    setModoEdicion(false);
  };

  return (
    <div className="max-w-6xl mx-auto py-6 px-4">
      {/* Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-6">
        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold ring-1 ring-blue-100">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">{pendientesCount}</div>
              <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Pendientes Revisión</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold ring-1 ring-emerald-100">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">{confirmadosCount}</div>
              <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">En Google Sheets</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold ring-1 ring-amber-100">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">{localesCount}</div>
              <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">En Celular (Local)</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs relative overflow-hidden group hover:shadow-md transition-shadow">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 to-slate-600"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold ring-1 ring-slate-200">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 tracking-tight">{inactivosCount}</div>
              <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Bajas Lógicas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Table Header / Filters */}
        <div className="p-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-[280px]">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por productor, DNI o distrito..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-vinotinto-600"
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={filtroEstado}
                onChange={(e) => setFiltroEstado(e.target.value as EstadoRegistro | 'TODOS')}
                className="px-2.5 py-2 rounded-xl border border-slate-300 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-vinotinto-600"
              >
                <option value="TODOS">Todos los estados</option>
                <option value="PENDIENTE">Pendientes de revisión</option>
                <option value="LOCAL">Guardados localmente</option>
                <option value="CONFIRMADO">Confirmados en Sheets</option>
                <option value="INACTIVO">Bajas lógicas</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-3">Trámite</th>
                <th className="px-4 py-3">Productor / DNI</th>
                <th className="px-4 py-3">Distrito</th>
                <th className="px-4 py-3">Variedad VID</th>
                <th className="px-4 py-3">Superficie</th>
                <th className="px-4 py-3">Riego / Destino</th>
                <th className="px-4 py-3">Estado</th>
                <th className="px-4 py-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {registrosFiltrados.length === 0 ? (
                <tr>
                  <td colSpan={8} className="text-center py-10 text-slate-400">
                    No se encontraron registros con los filtros seleccionados.
                  </td>
                </tr>
              ) : (
                registrosFiltrados.map((reg) => (
                  <tr
                    key={reg.id}
                    className={`hover:bg-slate-50 transition-colors ${
                      reg.estado === 'INACTIVO' ? 'opacity-60 bg-slate-50/50' : ''
                    }`}
                  >
                    <td className="px-4 py-3">
                      {reg.tipoTramite === 'ACTUALIZACION' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                          <RefreshCw className="w-3 h-3" />
                          Actualización
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <UserPlus className="w-3 h-3" />
                          Alta Nueva
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-bold text-slate-900">{reg.apellidoNombre}</div>
                      <div className="text-slate-500 font-mono text-[11px]">DNI: {reg.dni || 'S/D'}</div>
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-700">{reg.distrito}</td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-vinotinto-900">{reg.variedad}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-bold text-slate-900">{reg.supM2 ? `${reg.supM2.toLocaleString()} m²` : 'S/D'}</div>
                      <div className="text-[11px] text-slate-500">
                        {reg.supHa ? `${reg.supHa} ha (Fórmula)` : '-'}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      <div>{reg.riego || 'Riego S/D'}</div>
                      <div className="text-[11px] text-slate-400">{reg.destino || 'Destino S/D'}</div>
                    </td>
                    <td className="px-4 py-3">
                      <SyncStatusBadge estado={reg.estado} enviadoSheets={reg.enviadoSheets} />
                    </td>
                    <td className="px-4 py-3 text-right">
                      <div className="inline-flex items-center gap-1.5 justify-end">
                        <button
                          onClick={() => abrirModalDetalle(reg)}
                          title="Ver detalle y auditar"
                          className="p-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
                        >
                          <Eye className="w-4 h-4" />
                        </button>

                        {reg.estado === 'PENDIENTE' && (
                          <button
                            onClick={() => onConfirmarRegistro(reg.id)}
                            title="Confirmar y acomodar en Google Sheets"
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
                          >
                            <CheckCheck className="w-3.5 h-3.5" />
                            <span>Confirmar</span>
                          </button>
                        )}

                        {reg.estado !== 'INACTIVO' ? (
                          <button
                            onClick={() => onBajaLogica(reg.id)}
                            title="Baja lógica (inactivar fila)"
                            className="p-1.5 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                          >
                            <AlertTriangle className="w-4 h-4" />
                          </button>
                        ) : (
                          <button
                            onClick={() => onRestaurar(reg.id)}
                            title="Restaurar registro inactivo"
                            className="inline-flex items-center gap-1 px-2 py-1 rounded-lg border border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold transition-colors"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            <span>Restaurar</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* DETAIL & AUDIT MODAL */}
      {registroSeleccionado && registroEditando && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {modoEdicion ? 'Editar Registro (Oficina)' : 'Detalle del Productor'}
                  </h3>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      registroSeleccionado.tipoTramite === 'ACTUALIZACION'
                        ? 'bg-indigo-100 text-indigo-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {registroSeleccionado.tipoTramite === 'ACTUALIZACION'
                      ? 'Actualización de Productor'
                      : 'Alta Nueva'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  ID: {registroSeleccionado.id} · Creado por: {registroSeleccionado.creadoPor}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {!modoEdicion && registroSeleccionado.estado !== 'INACTIVO' && (
                  <button
                    onClick={() => setModoEdicion(true)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    Corregir campos
                  </button>
                )}
                <button
                  onClick={() => setRegistroSeleccionado(null)}
                  className="text-slate-400 hover:text-slate-600 p-1 text-lg font-bold"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Aviso de actualización parcial para la oficina */}
            {registroSeleccionado.tipoTramite === 'ACTUALIZACION' && (
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-bold">Regla de actualización parcial:</span> Al confirmar, se
                  actualizará la fila de este productor en Google Sheets. Las celdas que se hayan
                  dejado en blanco <strong>conservan su valor anterior</strong> sin ser borradas.
                </div>
              </div>
            )}

            {/* Content view / edit */}
            {modoEdicion ? (
              <div className="space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold block mb-1">Apellido y Nombre</label>
                    <input
                      type="text"
                      value={registroEditando.apellidoNombre}
                      onChange={(e) =>
                        setRegistroEditando({ ...registroEditando, apellidoNombre: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">DNI</label>
                    <input
                      type="text"
                      value={registroEditando.dni}
                      onChange={(e) =>
                        setRegistroEditando({ ...registroEditando, dni: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Superficie m²</label>
                    <input
                      type="number"
                      value={registroEditando.supM2}
                      onChange={(e) =>
                        setRegistroEditando({
                          ...registroEditando,
                          supM2: e.target.value === '' ? '' : parseFloat(e.target.value),
                        })
                      }
                      className="w-full px-3 py-2 border rounded-lg text-xs font-bold"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Variedad VID</label>
                    <input
                      type="text"
                      value={registroEditando.variedad}
                      onChange={(e) =>
                        setRegistroEditando({ ...registroEditando, variedad: e.target.value })
                      }
                      className="w-full px-3 py-2 border rounded-lg text-xs"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-3 border-t">
                  <button
                    onClick={() => setModoEdicion(false)}
                    className="px-3 py-1.5 rounded-lg border text-slate-600 hover:bg-slate-50 font-medium"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleGuardarEdicion}
                    className="px-4 py-1.5 rounded-lg bg-vinotinto-800 text-white font-bold hover:bg-vinotinto-900"
                  >
                    Guardar correcciones
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                {/* Summary Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-400 block font-medium">Productor</span>
                    <span className="font-bold text-slate-900">{registroSeleccionado.apellidoNombre}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">DNI</span>
                    <span className="font-bold text-slate-900">{registroSeleccionado.dni || 'S/D'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Distrito</span>
                    <span className="font-bold text-slate-900">{registroSeleccionado.distrito}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Cepa / Variedad</span>
                    <span className="font-bold text-vinotinto-800">{registroSeleccionado.variedad}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Superficie m²</span>
                    <span className="font-bold text-slate-900">
                      {registroSeleccionado.supM2 ? `${registroSeleccionado.supM2.toLocaleString()} m²` : 'S/D'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Superficie Ha (Fórmula)</span>
                    <span className="font-bold text-vinotinto-900">
                      {registroSeleccionado.supHa ? `${registroSeleccionado.supHa} ha` : '0.00 ha'}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Sistema de Riego</span>
                    <span className="font-semibold text-slate-800">{registroSeleccionado.riego || 'S/D'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Destino</span>
                    <span className="font-semibold text-slate-800">{registroSeleccionado.destino || 'S/D'}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Tenencia</span>
                    <span className="font-semibold text-slate-800">{registroSeleccionado.situacionTenencia || 'S/D'}</span>
                  </div>
                </div>

                {/* Audit Trail */}
                <div className="border border-slate-200 rounded-xl p-3 bg-white">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-2">
                    <History className="w-4 h-4 text-vinotinto-700" />
                    <span>Historial de Auditoría (Requisito MVP)</span>
                  </div>
                  <div className="space-y-2">
                    {registroSeleccionado.historial.map((h, idx) => (
                      <div key={idx} className="text-[11px] flex items-center justify-between border-b pb-1 last:border-b-0">
                        <div>
                          <span className="font-semibold text-slate-800">{h.accion}:</span>{' '}
                          <span className="text-slate-500">{h.usuario}</span>
                        </div>
                        <span className="font-mono text-slate-400">
                          {new Date(h.fecha).toLocaleString('es-AR')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Confirm Action Button */}
                {registroSeleccionado.estado === 'PENDIENTE' && (
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        onConfirmarRegistro(registroSeleccionado.id);
                        setRegistroSeleccionado(null);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>
                        {registroSeleccionado.tipoTramite === 'ACTUALIZACION'
                          ? 'Confirmar Actualización y Sincronizar Fila en Sheets'
                          : 'Confirmar Alta y Agregar Fila en Sheets'}
                      </span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-1.5">
                      Impacta directamente en la hoja `REGISTRO` y actualiza la pestaña `PROD.AGRICOLA`.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
