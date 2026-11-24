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
    <header className="bg-white/90 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand with institutional identity */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-vinotinto-800 to-vinotinto-950 flex items-center justify-center text-white shadow-md shadow-vinotinto-900/20 ring-1 ring-white/20">
              <Grape className="w-5 h-5 text-rose-200" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-extrabold tracking-wider uppercase px-1.5 py-0.5 rounded bg-vinotinto-50 text-vinotinto-800 border border-vinotinto-200/60">
                MUNICIPALIDAD DE TINOGASTA
              </span>
              <span className="text-[10px] font-bold text-slate-400 hidden sm:inline">
                · SECRETARÍA DE PRODUCCIÓN
              </span>
            </div>
            <h1 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight leading-snug">
              Sistema de Digitalización Agrícola
            </h1>
          </div>
        </div>

        {/* Controls: Online toggle & Role selector */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Simulated Connectivity Switch */}
          <button
            onClick={onToggleOnline}
            title={isOnline ? 'Simular modo sin conexión (finca rural)' : 'Simular conexión recuperada'}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border shadow-sm ${
              isOnline
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100/80'
                : 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100/80 animate-pulse'
            }`}
          >
            {isOnline ? (
              <>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                <Wifi className="w-3.5 h-3.5 text-emerald-600" />
                <span className="hidden sm:inline font-semibold">Online</span>
                <span className="text-[10px] font-normal text-emerald-700 hidden md:inline">(Con señal)</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                <WifiOff className="w-3.5 h-3.5 text-amber-700" />
                <span>Offline</span>
                <span className="text-[10px] font-normal text-amber-800 hidden md:inline">(En finca)</span>
              </>
            )}
          </button>

          {/* Role Switcher */}
          <div className="flex bg-slate-100/90 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => onCambiarRol('AGENTE')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                rol === 'AGENTE'
                  ? 'bg-white text-vinotinto-900 font-extrabold shadow-sm ring-1 ring-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Agente Móvil</span>
            </button>
            <button
              onClick={() => onCambiarRol('ADMINISTRADOR')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all relative ${
                rol === 'ADMINISTRADOR'
                  ? 'bg-white text-vinotinto-900 font-extrabold shadow-sm ring-1 ring-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Oficina Central</span>
              {colaPendienteCount > 0 && (
                <span className="w-2 h-2 rounded-full bg-blue-600 ml-0.5 animate-pulse"></span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

