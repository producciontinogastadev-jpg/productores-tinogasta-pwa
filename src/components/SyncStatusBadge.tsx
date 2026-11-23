import React from 'react';
import { EstadoRegistro } from '../types';
import { Cloud, CheckCircle2, HardDrive, Archive } from 'lucide-react';

interface Props {
  estado: EstadoRegistro;
  enviadoSheets?: boolean;
}

export const SyncStatusBadge: React.FC<Props> = ({ estado, enviadoSheets }) => {
  switch (estado) {
    case 'LOCAL':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
          <HardDrive className="w-3.5 h-3.5" />
          Guardado local (Sin conexión)
        </span>
      );
    case 'PENDIENTE':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
          <Cloud className="w-3.5 h-3.5" />
          Pendiente de revisión
        </span>
      );
    case 'CONFIRMADO':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {enviadoSheets ? 'Enviado a Google Sheets' : 'Confirmado'}
        </span>
      );
    case 'INACTIVO':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
          <Archive className="w-3.5 h-3.5" />
          Baja lógica (Inactivo)
        </span>
      );
  }
};

