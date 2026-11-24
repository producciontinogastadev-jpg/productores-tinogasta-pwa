# COMPONENTES — Propuesta 1

## Componentes del módulo
- `Layout`, `Topbar`, `DrawerHamburguesa`, `MenuEstatico`, `Bienvenida`.
- `Login`, `AuthContext`, `GestionUsuarios`, `ProtectedRoute`.
- `BuscadorProductor`, `FormProductor`, `Input`, `Boton`, `Alerta`, `Loader`, `CampoControl`.
- `Informacion`, `FAQ`, `ModificarPerfil`.
- `OfflineBanner`, `SyncStatus`.

## Servicios
- `idbService` (IndexedDB), `syncService` (cola + batch), `fichasService` (CRUD), `pwaService` (SW).
- `sheetsService` / Apps Script (lectura/escritura hoja Productores).

## Hooks
- `useAuth`, `useFormProductor`, `useSync`, `useOnline`.

Detalle en `02_componentes_detallados/`.
