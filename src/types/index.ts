export type EstadoRegistro = 'LOCAL' | 'PENDIENTE' | 'CONFIRMADO' | 'INACTIVO';

export type TipoTramite = 'ALTA' | 'ACTUALIZACION';

export type RolUsuario = 'AGENTE' | 'ADMINISTRADOR';

export interface FactoresClimaticos {
  heladasTardias: boolean; // Col AQ
  lluvia: boolean;         // Col AR
  granizo: boolean;        // Col AS
  zonda: boolean;          // Col AT
  zondaTardio: boolean;    // Col AU
}

export interface EntradaHistorial {
  fecha: string;
  usuario: string;
  accion: 'CREACION' | 'ACTUALIZACION' | 'CONFIRMACION' | 'BAJA_LOGICA' | 'RESTAURACION';
  camposModificados: string[];
}

export interface RegistroProductorVid {
  id: string;
  tipoTramite: TipoTramite;
  productorExistenteId?: string; // Si es actualización de un registro previo

  // Identificación (Cols A - K)
  nroRegistro: string;
  apellidoNombre: string;
  dni: string;
  fechaNacimiento: string;
  telefono: string;
  distrito: string;
  genero: 'FEM' | 'MASC' | '';

  // Finca y Tenencia (Cols E - V, AC)
  nombreEmprendimiento: string;
  domicilioEmprendimiento: string;
  domicilioParticular: string;
  resideEnPropiedad: 'SI' | 'NO' | '';
  situacionTenencia: 'TITULO' | 'PREST' | 'ALQ' | 'SUCES' | '';
  supTotal: number | '';

  // Producción Agrícola - VID (Cols AE - AP)
  cultivo: 'VID';
  variedad: string;
  supM2: number | '';
  supHa: number | ''; // Calculado automático: supM2 / 10000
  destino: 'VENTA' | 'AUTOCONS' | '';
  riego: 'MANTO' | 'GOTEO' | 'ASPERSION' | 'COMPLEM' | '';
  maquinaria: 'PROPIA' | 'ALQUILADA' | 'NINGUNA' | '';

  // Factores Climáticos (Cols AQ - AX)
  factoresClimaticos: FactoresClimaticos;
  nivelDano: 'BAJO' | 'MEDIO' | 'ALTO' | 'NINGUNO' | '';

  // Observaciones generales (Col AD)
  observaciones: string;

  // Metadatos de sincronización y control de flujo
  estado: EstadoRegistro;
  creadoPor: string;
  fechaCreacion: string;
  fechaRevision?: string;
  revisadoPor?: string;
  enviadoSheets: boolean;
  filaSheets?: number;
  historial: EntradaHistorial[];
}


