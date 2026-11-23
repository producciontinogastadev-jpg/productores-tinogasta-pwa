# COMPONENTES PARA CARGA EN CAMPO

## Nuevos componentes
- OfflineBanner.tsx (indica modo offline + pendientes)
- SyncStatus.tsx (estado sync)
- BuscadorProductor.tsx
- SelectorRubro.tsx
- FormularioDinamico.tsx (render por rubro)
- ListaFichasPendientes.tsx
- MapaUbicacion.tsx (opcional GPS)
- CapturaFoto.tsx (opcional)

## Servicios
- idbService.ts (IndexedDB)
- syncService.ts (cola + batch)
- fichasService.ts (CRUD fichas)
- pwaService.ts (sw/register)

## Layout/Auth
- Layout.tsx, Topbar.tsx, DrawerHamburguesa.tsx, MenuEstatico.tsx, Bienvenida.tsx
- Login.tsx, AuthContext.tsx, ProtectedRoute.tsx
- ModificarPerfil.tsx
