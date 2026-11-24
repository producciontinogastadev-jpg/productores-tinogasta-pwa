# SERVICIOS (CONTRATOS APPS SCRIPT)

## Variables
```env
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXX/exec
```

## apiGet (búsqueda)
GET `${BASE}?action=search&dni=...&cuit=...`

Response OK: { ok: true, results: Productor[] }
Response Error: { ok: false, error: "mensaje" }

## apiPost (alta/edición)
POST `${BASE}` body JSON:
- alta: { action: "create", data: ProductorSinID, actualizadoPor: string }
- editar: { action: "update", data: ProductorConID, actualizadoPor: string }

Response: ApiResponse

## Reglas servidor
- Validar duplicados por DNI (create)
- findRowByDNI/ID
- generateId() con prefijo PROD + timestamp + random
- Escribir SOLO hoja "Productores"
- Setear Fecha_Alta (create), Fecha_Actualizacion + Actualizado_Por (update)
- Retornar JSON con headers correctos

## Stack tecnológico (general)
- Frontend: React + TypeScript + Vite
- Estilos: Tailwind CSS
- Backend/Servicios: Firebase (Auth/Firestore/Storage según necesidad) + Google Apps Script (Web App) para escribir directo a Google Sheets (caso Propuesta 1)
- Despliegue: Vercel/Netlify (frontend)

## Offline/Sync (ampliado)
- localStorage/IndexedDB (idb) para cola pendientes
- Al recuperar conexión: enviar cola (batch) a Apps Script
- Marcar enviado/error con retry
- Flag sync_status: 'pending'|'synced'|'error'
