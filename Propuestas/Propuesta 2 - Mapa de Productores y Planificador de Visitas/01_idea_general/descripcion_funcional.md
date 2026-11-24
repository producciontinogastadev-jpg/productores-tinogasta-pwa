# DESCRIPCIÓN FUNCIONAL DETALLADA

## Idea real
Convertir la planificación de visitas actual (sin soporte visual) en un flujo con apoyo digital:
hoy → no se sabe dónde está cada productor ni cuáles falta visitar.
nuevo → mapa con todos los productores + estado de visita + listado por cercanía para armar la ruta del día.

La información de productores se **lee** del Registro de Productores Tinogasteños existente (Google Sheets). Este módulo **no crea ni duplica** el registro.

## Escenario de uso
Persona del equipo de la Secretaría de Producción planifica la salida al campo:
- Abre el módulo y ve el mapa con los productores georreferenciados.
- Filtra por rubro/proyecto para acotar la zona de trabajo.
- Consulta el listado por cercanía para ordenar la ruta.
- Durante la visita, marca el productor como Visitado y (si corresponde) completa sus coordenadas.
- Al volver, el estado de visita queda actualizado para el seguimiento.

## Requerimientos funcionales ampliados
- **Lectura desde Google Sheets:** obtiene los productores y sus datos desde la planilla existente (CSV/JSON o Apps Script Web App), sin duplicar.
- **Mapa interactivo:** Leaflet + OpenStreetMap, sin claves de API pagas.
- **Marcadores por productor:** agrupables (clusters) cuando hay muchos en una zona.
- **Georreferenciación incremental:** campos lat/lon que se completan en las visitas; el mapa arranca con lo que ya exista y se va poblando.
- **Filtros:** por rubro, proyecto o tipo de producción (vid, higo, dulceras, curtiembre, vivero, etc.).
- **Estado de visita:** Pendiente / Visitado / Actualizado, con fecha de última visita.
- **Listado por cercanía:** ordena los productores por distancia (fórmula de haversine) desde un punto de referencia o ubicación actual.
- **Cache offline ligera (solo lectura):** los marcadores quedan disponibles sin conexión para consulta en campo.
- **Acceso interno:** pensado para el equipo de la Secretaría/Municipalidad.

## Integridad de datos
- **Solo lectura** sobre el Registro de Productores: el módulo no escribe datos de productores.
- La única escritura posible es sobre **metadatos de visita** (estado, fecha, lat/lon), que se documenta como decisión a validar con el tutor (pueden escribirse a una hoja anexa o a Firestore).
- Sin duplicación de la fuente: si un productor cambia en el Registro, el mapa se actualiza en la próxima lectura.

## Visualización
- Mapa centrado en Tinogasta con marcadores y colores por estado.
- Panel lateral con filtros y listado por cercanía.
- Ficha rápida al tocar un marcador (nombre, rubro, proyecto, estado, distancia).

## MVP vs post-MVP
**MVP:** mapa + marcadores + filtros + estados de visita + listado por cercanía + lectura del Registro + cache offline de lectura.

**Post-MVP:** optimización automática de rutas con múltiples paradas, exportación a GPX/Google Maps, historial de rutas realizadas, edición de coordenadas en lote, integración embebida en el portal (Propuesta 3).

## Notas
- Evitar costos: OpenStreetMap en lugar de Google Maps API.
- Posible uso de Firestore solo para el estado de visita (pequeño volumen), manteniendo el Registro como fuente de productores.
- El módulo debe funcionar aunque falten coordenadas: los productores sin ubicación aparecen en una lista "sin georreferenciar".
