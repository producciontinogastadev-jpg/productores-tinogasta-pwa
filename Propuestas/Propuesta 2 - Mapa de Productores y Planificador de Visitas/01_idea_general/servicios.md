# SERVICIOS

## sheetsService (lectura)
- `getProductores(): Promise<ProductorMapa[]>` — lee el Registro de Productores (CSV/JSON público o Apps Script en modo lectura).
- `getRubros(): Promise<string[]>` — obtiene rubros/proyectos distintos para poblar filtros.
- Caché en memoria + persistencia local (para modo offline de lectura).

## geoService
- `calcularDistancia(a: PuntoReferencia, b: PuntoReferencia): number` — fórmula de haversine (km).
- `ordenarPorCercania(productores: ProductorMapa[], ref: PuntoReferencia): ProductorCercania[]`.
- `getUbicacionActual(): Promise<PuntoReferencia>` — geolocalización del navegador (opcional).

## visitasService (escritura de metadatos, a validar)
- `marcarVisita(metadato: MetadatoVisita): Promise<void>` — persiste estado de visita (Firestore o hoja anexa).
- `getMetadatos(): Promise<MetadatoVisita[]>` — recupera estados para pintar el mapa.
- Cola offline: si no hay conexión, guardar local y reintentar.

## cacheService
- `guardarMarcadores(productores: ProductorMapa[])` — persiste en IndexedDB/localStorage.
- `leerMarcadores(): ProductorMapa[] | null` — recupera para modo offline.

## Flujo general
1. Al iniciar → `sheetsService.getProductores()` + `visitasService.getMetadatos()`.
2. Se combinan productores con estado de visita → `ProductorMapa[]`.
3. El mapa y el listado consumen ese array; `geoService` ordena por cercanía.
4. Al marcar una visita → `visitasService.marcarVisita()` y refresco local.
