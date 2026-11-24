# HOOKS

## useProductores
- Estado: `productores: ProductorMapa[]`, `loading`, `error`
- Carga desde `sheetsService.getProductores()` + `visitasService.getMetadatos()`
- `refrescar()` para releer
- Cachea en `cacheService`

## useFiltros
- Estado: `filtro: FiltroMapa`
- `setFiltro(parcial)`, `limpiar()`
- Devuelve la lista filtrada (memo)

## useCercania
- Entrada: productores filtrados + punto de referencia
- `ordenar(ref)` → `ProductorCercania[]`
- `setReferenciaActual()` usa `geoService.getUbicacionActual()`

## useVisitas
- Estado: `metadatos`, `pendientes`
- `marcar(productorId, estado, coords?)`
- Encola si offline; reintenta al reconectar
