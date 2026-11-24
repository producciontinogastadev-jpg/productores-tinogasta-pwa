# ALCANCE

## Incluye (MVP)
- **Lectura desde Google Sheets:** obtiene los productores del Registro existente, sin duplicar.
- **Mapa interactivo** con marcadores por productor (clusters cuando corresponda).
- **Campos latitud/longitud** y georreferenciación incremental.
- **Filtros** por rubro / proyecto / tipo de producción.
- **Estados de visita:** Pendiente / Visitado / Actualizado, con fecha de última visita.
- **Listado por cercanía** (haversine) para planificar rutas.
- **Cache offline de lectura** (consulta de marcadores sin conexión).
- **Acceso interno** autenticado.
- **Diseño responsive** (PC + móvil/tablet para campo).
- **Modo nocturno** genérico.

## No incluye (MVP)
- ABM completo de productores (eso es de la Propuesta 1; aquí solo se lee).
- Optimización automática de rutas con múltiples paradas y turnos complejos.
- Exportación avanzada a GPX / Google Maps.
- Escritura masiva sobre el Registro de Productores.
- Uso público por parte de los productores (el módulo es interno).
