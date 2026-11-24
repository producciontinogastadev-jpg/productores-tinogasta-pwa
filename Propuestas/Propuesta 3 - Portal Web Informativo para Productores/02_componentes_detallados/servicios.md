# SERVICIOS

> Al ser un sitio mayormente estático, los "servicios" son módulos de datos y utilidades, no llamadas a backend.

## contenidoService
```typescript
getSecciones(): Seccion[]
getRequisitos(): Requisito[]
getTramites(): Tramite[]
getFaq(): Faq[]
getContacto(): Contacto
```
- Lee el contenido desde `src/content` (Markdown/JSON/TS).
- No requiere backend.

## whatsappService
```typescript
buildLink(numero: string, mensaje: string): string        // https://wa.me/<num>?text=<msg>
mensajePorTramite(tramite: Tramite): string
```
- Arma enlaces Click-to-WhatsApp con mensaje preformateado y URL-encoded.

## solicitudService (opcional)
```typescript
enviarSolicitud(s: Solicitud): Promise<ApiResponse>
```
- Deriva la solicitud por WhatsApp o hacia Google Sheets (Google Forms o Apps Script), sin backend propio.

## Reglas generales
- Sin base de datos propia.
- Sin login.
- Enlaces salientes deben abrir en nueva pestaña (`target="_blank"` + `rel="noopener"`).
- SEO básico en cada página (title, description).
