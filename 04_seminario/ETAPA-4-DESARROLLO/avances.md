# ETAPA 4 - DESARROLLO DEL PILOTO (PRODUCCIÓN AGRÍCOLA - VID)

## Estado del desarrollo (Implementado y verificado en sesión 2026-11-13)

- **Frontend:** React 18 + TypeScript + Vite 5 + Tailwind CSS.
- **Rubro piloto implementado:** Producción Agrícola - VID (Vitivinicultura), basado en las columnas A a AV de la hoja maestra `REGISTRO` del Excel de la Secretaría de Producción de Tinogasta.
- **Persistencia local offline-first:** IndexedDB nativo (`RegistroTinogastaDB`, store `registros`) mediante `src/services/db.ts`. Los registros se conservan físicamente en el disco del navegador ante cortes de energía o reinicio del dispositivo.
- **PWA instalable:** Service Worker (`public/sw.js`) con estrategia de caché de activos estáticos, `manifest.json` e íconos vectoriales en `public/icons/`.
- **Cola en la nube:** Integración modular con Firebase Cloud Firestore (`src/services/firebase.ts`) con listeners en tiempo real (`onSnapshot`) y sincronización automática bidireccional entre la base local y la nube.
- **Regla de actualización parcial:** Soporte para distinguir altas nuevas de actualizaciones de productores preexistentes; los campos no modificados conservan el valor ya existente en Google Sheets sin borrarse.

## Componentes implementados

- `AgentForm.tsx`: Formulario de campo móvil para el agente en finca. Incluye pestañas para "Actualizar Productor Existente" (con buscador predictivo) y "Nuevo Productor (Alta)", cálculo automático en tiempo real de Hectáreas (`m² / 10.000`) respetando la fórmula del Excel, casillas de daño climático y botón de guardado offline.
- `AdminReview.tsx`: Tablero de escritorio para la persona de oficina. Métricas en vivo, filtros por estado, búsqueda de registros, modal de auditoría y corrección previa, confirmación y baja lógica con restauración.
- `Navbar.tsx`: Barra superior con conmutador de roles (Agente móvil vs Oficina escritorio) y simulador/detector de conectividad (Online / Offline).
- `SyncStatusBadge.tsx`: Insignias de estado (`LOCAL`, `PENDIENTE`, `CONFIRMADO`, `INACTIVO`).

## Servicios implementados

- `src/services/db.ts`: Gestión de IndexedDB para almacenamiento local seguro.
- `src/services/firebase.ts`: Conexión a Cloud Firestore (`registros_productores`) con fallback automático a IndexedDB.
- `src/services/sheets.ts`: Cliente HTTP para conexión con Webhook de Google Apps Script.
- `google-apps-script/Webhook.js`: Endpoint de Google Apps Script para inserción y actualización en hoja `REGISTRO` respetando fórmulas y regla de actualización parcial.
- `src/registerServiceWorker.ts`: Registro del Service Worker en navegadores cliente.

## Verificación
- Compilación de producción con TypeScript y Vite (`pnpm run build`) completada con éxito sin advertencias.
- Servidor de desarrollo operativo en `http://localhost:3000`.
