# TIPOS COMPARTIDOS (Propuesta 2)

```typescript
export type EstadoVisita = 'pendiente' | 'visitado' | 'actualizado'

export interface ProductorMapa {
  id: string
  dni?: string
  cuit?: string
  apellido: string
  nombre: string
  rubro?: string
  proyecto?: string
  telefono?: string
  localidad?: string
  lat?: number
  lng?: number
}

export interface ProductorCercania extends ProductorMapa {
  distanciaKm: number
}

export interface FiltroMapa {
  rubro?: string
  proyecto?: string
  tipoProduccion?: string
  estadoVisita?: EstadoVisita
}

export interface PuntoReferencia {
  lat: number
  lng: number
}

export interface MetadatoVisita {
  productorId: string
  estado: EstadoVisita
  fecha: string          // ISO 8601
  lat?: number
  lng?: number
  actualizadoPor: string
}

export interface ApiResponse<T = unknown> {
  ok: boolean
  message?: string
  error?: string
  data?: T
}

export type SyncStatus = 'synced' | 'pending' | 'error'
```

## Notas
- `id` = clave lógica del Registro de Productores (no se regenera).
- Fechas ISO 8601 (`YYYY-MM-DD HH:mm:ss`).
- Productores **sin** `lat`/`lng` no aparecen en el mapa, sí en la lista "Sin georreferenciar".
- `distanciaKm` se calcula en runtime (no se persiste).
