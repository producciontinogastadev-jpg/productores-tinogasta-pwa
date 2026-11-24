# OBJETIVOS

## General
Desarrollar un módulo web de geolocalización que permita **visualizar, filtrar y organizar** los productores en un mapa interactivo y planificar las visitas de campo, aprovechando la información ya cargada en el Registro de Productores Tinogasteños (Google Sheets), sin duplicar el registro.

## Específicos
- Leer los productores desde el Registro de Productores existente (sin crear datos paralelos).
- Visualizar los productores con coordenadas en un mapa interactivo (Leaflet + OpenStreetMap).
- Permitir la georreferenciación incremental (lat/lon) a medida que se hacen las visitas.
- Filtrar por rubro / proyecto / tipo de producción.
- Gestionar un estado de visita por productor (Pendiente / Visitado / Actualizado).
- Generar un listado ordenado por cercanía para planificar rutas.
- Ofrecer consulta offline ligera (caché de marcadores, solo lectura).
- Mantener una interfaz coherente con la Propuesta 1 (topbar + drawer + modo nocturno).

## Clarificación de alcance
Uso **interno**: equipo de la Secretaría de Producción / Municipalidad. Es operativo, no público.
