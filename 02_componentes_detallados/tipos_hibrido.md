# TIPOS HÍBRIDO

```typescript
export interface ProductorFB {
  id: string
  dni: string
  cuit?: string
  apellido: string
  nombre: string
  rubro?: string
  activo: boolean
  creado_por: string
  creado_en: Timestamp
  modificado_por?: string
  modificado_en?: Timestamp
}

export interface FichaFB {
  id: string
  productor_id: string
  rubro: string
  fecha_visita: string
  lugar_visita: string
  datos: Record<string, any>  // dinámico por rubro
  coords?: {lat:number, lng:number}
  fotos?: string[]
  observaciones?: string
  creado_por: string
  creado_en: any
  modificado_por?: string
  modificado_en?: any
  sync_sheets?: boolean
  fecha_sync_sheets?: any
}
```
