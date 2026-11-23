import React from 'react';
import { EstadoRegistro } from '../types';
import { Cloud, CheckCircle2, HardDrive, Archive } from 'lucide-react';

interface Props {
  estado: EstadoRegistro;
  enviadoSheets?: boolean;
  filaSheets?: number;
}

export const SyncStatusBadge: React.FC<Props> = ({ estado, enviadoSheets, filaSheets }) => {
  switch (estado) {
    case 'LOCAL':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-300 shadow-2xs">
          <HardDrive className="w-3.5 h-3.5 text-amber-600" />
          En teléfono (Offline)
        </span>
      );
    case 'PENDIENTE':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-300 shadow-2xs">
          <Cloud className="w-3.5 h-3.5 text-blue-600" />
          Pendiente validación
        </span>
      );
    case 'CONFIRMADO':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]"></span>
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          {filaSheets
            ? `Sheets · Fila #${filaSheets}`
            : enviadoSheets
            ? 'Enviado a Sheets'
            : 'Confirmado'}
        </span>
      );
    case 'INACTIVO':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300">
          <Archive className="w-3.5 h-3.5 text-slate-500" />
          Baja lógica
        </span>
      );
  }
};

