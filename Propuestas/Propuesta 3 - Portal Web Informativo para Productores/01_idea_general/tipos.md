# TIPOS

```typescript
// Sección informativa del portal
export interface Seccion {
  id: string
  titulo: string
  slug: string
  contenido: string
}

// Requisito para inscribirse
export interface Requisito {
  id: string
  descripcion: string
  obligatorio: boolean
}

// Paso de un trámite
export interface PasoTramite {
  orden: number
  titulo: string
  detalle: string
}

// Tipo de trámite
export interface Tramite {
  id: string
  nombre: string        // "Inscripción" | "Actualización" | "Consulta"
  pasos: PasoTramite[]
  mensajeWhatsApp: string
}

// Pregunta frecuente
export interface Faq {
  pregunta: string
  respuesta: string
}

// Enlace de contacto
export interface Contacto {
  whatsapp: string      // número en formato internacional
  email?: string
  direccion?: string
}

// Solicitud del formulario ligero (opcional)
export interface Solicitud {
  nombre: string
  contacto: string
  motivo: string
}
```
