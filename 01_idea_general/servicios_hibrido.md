# SERVICIOS - ENFOQUE HÍBRIDO

## Firebase (Firestore)
- Colecciones: `productores`, `fichas_{rubro}`, `sincronizaciones`, `usuarios`
- Offline persistence activado
- Reglas: usuarios autenticados, auditoría automática

## Sincronización Firebase → Sheets
- Función Apps Script llamada tras crear/actualizar/borrar ficha en Firebase (Webhook/HTTP)
- Escribir por rangos (append/update), NO borrar hoja completa
- Preservar fórmulas, encabezados
- Mapear estructura Firebase → columnas Sheets según rubro
- Log de sync (último sync por ficha/colección)

## Flujo
1. PWA crea/edita ficha → Firestore (offline OK)
2. onSnapshot o trigger → notifica Apps Script
3. Apps Script formatea y escribe en hoja correspondiente (conservando fórmulas)
4. Sheets recalcula automáticamente
