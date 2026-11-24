# SERVICIOS

> Nota: al ser un sitio mayormente estático, estos "servicios" son módulos de datos/utilidades, no llamadas a backend.

## contenidoService
- `getSecciones(): Seccion[]` — devuelve las secciones informativas (pueden estar en Markdown o JSON).
- `getRequisitos(): Requisito[]` — checklist de requisitos.
- `getTramites(): Tramite[]` — guía de trámites paso a paso.
- `getFaq(): Faq[]` — preguntas frecuentes.

## whatsappService
- `buildLink(numero: string, mensaje: string): string` — arma el enlace `https://wa.me/...` con mensaje preformateado.
- `mensajePorTramite(tramite: Tramite): string` — devuelve el mensaje según el caso.

## solicitudService (opcional)
- `enviarSolicitud(solicitud: Solicitud): Promise<void>` — envía datos básicos por WhatsApp o hacia Google Sheets (Forms/Apps Script), sin backend propio.

## contactoService
- `getContacto(): Contacto` — datos de contacto de la Secretaría.

## Flujo general
1. El sitio carga el contenido desde `contenidoService` (estático).
2. Los botones de contacto usan `whatsappService.buildLink`.
3. El formulario opcional usa `solicitudService.enviarSolicitud`.
