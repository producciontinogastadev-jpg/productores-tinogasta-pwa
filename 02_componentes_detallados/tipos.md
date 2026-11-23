# TIPOS COMPARTIDOS

```typescript
export interface Productor {
  ID_Productor?: string
  DNI: string
  CUIT?: string
  Apellido: string
  Nombre: string
  Rubro?: string
  Proyecto?: string
  Telefono?: string
  Direccion?: string
  Localidad?: string
  Observaciones?: string
  Fecha_Alta?: string
  Actualizado_Por?: string
  Fecha_Actualizacion?: string
}

export type Modo = 'buscar' | 'alta' | 'editar'

export interface ApiResponse {
  ok: boolean
  message?: string
  error?: string
  data?: any
  results?: Productor[]
}
```

## Notas
- DNI normalizar (sin puntos)
- Fechas ISO 8601 (YYYY-MM-DD HH:mm:ss)
- ID_Productor formato PROD-YYYYMMDDHHmmss-XXXXXX

export type SyncStatus = 'pending' | 'synced' | 'error'

export interface FichaBase {
  id_ficha?: string
  id_productor?: string  // vincula a Productores
  rubro?: string
  fecha_visita?: string
  lugar_visita?: 'finca' | 'casa' | 'invernadero' | 'criadero' | 'lugar_produccion' | 'otro'
  latitud?: number
  longitud?: number
  fotos?: string[]
  observaciones?: string
  creado_por?: string
  fecha_creacion?: string
  modificado_por?: string
  fecha_modificacion?: string
  sync_status?: SyncStatus
  error_sync?: string
}
