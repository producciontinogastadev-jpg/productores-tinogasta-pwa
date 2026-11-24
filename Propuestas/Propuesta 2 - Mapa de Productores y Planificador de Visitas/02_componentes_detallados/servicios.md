# SERVICIOS

## sheetsService (lectura)
```typescript
getProductores(): Promise<ProductorMapa[]>
getRubros(): Promise<string[]>
```
- Lee el Registro de Productores desde Google Sheets (CSV/JSON o Apps Script en modo lectura).
- No escribe sobre productores.

## visitasService (metadatos de visita — escritura acotada)
```typescript
getMetadatos(): Promise<MetadatoVisita[]>
marcarVisita(metadato: MetadatoVisita): Promise<ApiResponse>
```
- Persiste estado de visita y lat/lon (Firestore o hoja anexa; a validar con tutor).
- Si no hay conexión, encola localmente y reintenta.

## geoService
```typescript
calcularDistancia(a: PuntoReferencia, b: PuntoReferencia): number  // km (haversine)
ordenarPorCercania(list: ProductorMapa[], ref: PuntoReferencia): ProductorCercania[]
getUbicacionActual(): Promise<PuntoReferencia>  // navigator.geolocation (opcional)
```

## cacheService
```typescript
guardarMarcadores(list: ProductorMapa[]): void
leerMarcadores(): ProductorMapa[] | null
```
- Cache en IndexedDB/localStorage para consulta offline (solo lectura).

## Reglas generales
- Bajo acoplamiento: el frontend no accede directo a la API de Sheets si no es por Apps Script / endpoint de lectura.
- Errores normalizados a `ApiResponse`.
- Sin backend propio: solo lectura remota + persistencia mínima de visitas.
