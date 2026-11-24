# HOOKS

> El portal es estático; los hooks son mínimos.

## useContenido
- Devuelve las secciones/trámites/FAQ desde `contenidoService`.
- Memoizado.

## useWhatsApp
- `abrir(tramite?: Tramite)` → construye el enlace y lo abre.
- Encapsula `whatsappService`.

## useFormularioSolicitud
- Estado: `solicitud`, `enviando`, `enviado`, `error`
- `setCampo`, `enviar()`
- Validación básica (nombre y contacto obligatorios)

## useAcordeon
- Estado: `abiertoId: string | null`
- `toggle(id)` — permite una sola respuesta abierta por vez.
