# ETAPA 7 - MANTENIMIENTO

## Enfoque
MVP simple y de bajo mantenimiento.

## Puntos de mantenimiento
- **Actualización de datos:** el módulo lee el Registro; no requiere mantenimiento propio de contenido.
- **Tiles del mapa:** OpenStreetMap gratuito; sin claves que expiren.
- **Georreferenciación incremental:** el mapa mejora a medida que se completan coordenadas en las visitas.
- **Dependencias:** actualizar Leaflet/React-Leaflet periódicamente.
- **Persistencia de visitas:** monitorear el almacenamiento si se usa plan gratuito de Firestore.

## Riesgos
- Coordenadas incompletas al inicio (mitigado con lista "Sin georreferenciar").
- Dependencia de la disponibilidad del endpoint de lectura del Registro.
