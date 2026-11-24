# COMPONENTES — Propuesta 2

## Componentes del módulo
- Layout.tsx, Topbar.tsx, DrawerHamburguesa.tsx, MenuEstatico.tsx, Bienvenida.tsx
- Login.tsx, AuthContext.tsx, ProtectedRoute.tsx
- MapaInteractivo.tsx
- FiltrosMapa.tsx
- ListadoCercania.tsx
- EstadosVisita.tsx
- FichaProductor.tsx
- BannerOffline.tsx

## Servicios
- sheetsService.ts (lectura del Registro de Productores)
- visitasService.ts (estado de visita, cola offline)
- geoService.ts (haversine, ubicación actual)
- cacheService.ts (cache de marcadores)

## Hooks
- useProductores, useFiltros, useCercania, useVisitas

Detalle en `02_componentes_detallados/`.
