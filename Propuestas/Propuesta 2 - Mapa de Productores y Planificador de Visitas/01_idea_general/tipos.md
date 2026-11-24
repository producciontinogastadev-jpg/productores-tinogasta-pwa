# TIPOS

```typescript
export type EstadoVisita = 'pendiente' | 'visitado' | 'actualizado'

// Productor leído del Registro de Productores (Google Sheets)
export interface ProductorMapa {
  id: string
  dni?: string
  cuit?: string
  apellido: string
  nombre: string
  rubro?: string
  proyecto?: string
  lat?: number
  lng?: number
  estadoVisita: EstadoVisita
  fechaUltimaVisita?: string
}

// Resultado del listado por cercanía
export interface ProductorCercania extends ProductorMapa {
  distanciaKm: number
}

// Filtro activo del mapa
export interface FiltroMapa {
  rubro?: string
  proyecto?: string
  tipoProduccion?: string
  estadoVisita?: EstadoVisita
}

// Punto de referencia para calcular cercanía
export interface PuntoReferencia {
  lat: number
  lng: number
}

// Metadato de visita (escritura opcional, a validar con tutor)
export interface MetadatoVisita {
  productorId: string
  estado: EstadoVisita
  fecha: string
  lat?: number
  lng?: number
  actualizadoPor: string
}
```
