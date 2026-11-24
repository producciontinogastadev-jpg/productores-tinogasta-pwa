# TIPOS COMPARTIDOS (Propuesta 3)

```typescript
export interface Seccion {
  id: string
  titulo: string
  slug: string
  contenido: string
}

export interface Requisito {
  id: string
  descripcion: string
  obligatorio: boolean
}

export interface PasoTramite {
  orden: number
  titulo: string
  detalle: string
}

export interface Tramite {
  id: string
  nombre: string          // "Inscripción" | "Actualización" | "Consulta"
  pasos: PasoTramite[]
  mensajeWhatsApp: string
}

export interface Faq {
  pregunta: string
  respuesta: string
}

export interface Contacto {
  whatsapp: string        // formato internacional, ej "5491123456789"
  email?: string
  direccion?: string
}

export interface Solicitud {
  nombre: string
  contacto: string
  motivo: string
}
```

## Notas
- El número de WhatsApp debe estar en formato internacional (sin `+`, sin espacios).
- El contenido (`Seccion`, `Tramite`, `Faq`) vive en `src/content` como datos, no hardcodeado en los componentes.
