# 01 - IDEA GENERAL
## Propuesta 2: Mapa de Productores y Planificador de Visitas

### ¿Qué queremos lograr?
Desarrollar un módulo web acotado de geolocalización que permita **visualizar, filtrar y organizar** los productores en un mapa interactivo y planificar las visitas de campo, aprovechando la información ya cargada en el Registro de Productores Tinogasteños (Google Sheets), sin duplicar el registro.

### ¿Por qué?
- El diagnóstico mostró que **no fue posible relevar las ubicaciones** de muchos productores y que las visitas de campo fueron acotadas.
- Hoy no existe una forma visual y organizada de planificar las salidas al campo: no se sabe qué zonas están cubiertas y cuáles faltan.
- Planificar rutas de visita manualmente hace perder tiempo y recursos.
- Complementa a la Propuesta 1: reutiliza el mismo Registro, no crea datos paralelos.

### Alcance resumido
- Mapa interactivo (Leaflet + OpenStreetMap) con marcadores por productor
- Lectura directa del Registro de Productores existente en Google Sheets
- Georreferenciación incremental (lat/lon completados durante las visitas)
- Filtros por rubro / proyecto / tipo de producción
- Estado de visita por productor (Pendiente / Visitado / Actualizado)
- Listado por cercanía para armar rutas
- MVP funcional, demostrable y de uso interno

### Relación con las otras propuestas
- **Propuesta 1** (Alta/Actualización): comparte la fuente de datos (Registro de Productores). La Propuesta 2 solo **lee**; la carga sigue siendo de la Propuesta 1.
- **Propuesta 3** (Portal informativo): ambas pueden integrarse como módulos de un portal común post-pasantía.
