import React from 'react';
import { RolUsuario } from '../types';
import { Wifi, WifiOff, User, ShieldCheck, Grape } from 'lucide-react';

interface Props {
  rol: RolUsuario;
  onCambiarRol: (nuevoRol: RolUsuario) => void;
  isOnline: boolean;
  onToggleOnline: () => void;
  colaPendienteCount: number;
}

export const Navbar: React.FC<Props> = ({
  rol,
  onCambiarRol,
  isOnline,
  onToggleOnline,
  colaPendienteCount,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-vinotinto-800 flex items-center justify-center text-white shadow-md">
            <Grape className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-base font-bold text-slate-900 leading-tight">
              Secretaría de Producción · Tinogasta
            </h1>
            <p className="text-xs text-slate-500 font-medium">
              Piloto PWA · Rubro Vitivinícola (VID)
            </p>
          </div>
        </div>

        {/* Controls: Online toggle & Role selector */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Simulated Connectivity Switch */}
          <button
            onClick={onToggleOnline}
            title={isOnline ? 'Simular modo sin conexión' : 'Simular conexión recuperada'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              isOnline
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 animate-pulse'
            }`}
          >
            {isOnline ? (
              <>
                <Wifi className="w-4 h-4 text-emerald-600" />
                <span>Online (Con señal)</span>
              </>
            ) : (
              <>
                <WifiOff className="w-4 h-4 text-amber-600" />
                <span>Offline (Sin señal en finca)</span>
              </>
            )}
          </button>

          {/* Role Switcher */}
          <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 text-xs font-medium">
            <button
              onClick={() => onCambiarRol('AGENTE')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                rol === 'AGENTE'
                  ? 'bg-white text-slate-900 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Agente (Móvil)</span>
            </button>
            <button
              onClick={() => onCambiarRol('ADMINISTRADOR')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all relative ${
                rol === 'ADMINISTRADOR'
                  ? 'bg-white text-slate-900 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Oficina (PC)</span>
              {colaPendienteCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-blue-600 ml-0.5"></span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

