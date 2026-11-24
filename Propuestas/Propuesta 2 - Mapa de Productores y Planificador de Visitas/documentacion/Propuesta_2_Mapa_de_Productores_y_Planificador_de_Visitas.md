# PROPUESTA 2: Mapa de Productores y Planificador de Visitas

## 1. Problema identificado

En el diagnóstico tecnológico se detectó que no fue posible relevar las ubicaciones de muchos productores en los distintos proyectos, y que las visitas de campo fueron acotadas. Actualmente, la organización no cuenta con una forma visual y organizada para planificar las salidas al campo. Esto dificulta optimizar rutas y saber qué productores aún faltan por visitar.

## 2. Objetivo

Desarrollar un módulo simple de geolocalización para visualizar, filtrar y organizar las visitas a productores, aprovechando la información ya cargada en el Registro de Productores Tinogasteños (Google Sheets).

## 3. Alcance (MVP - Lograble en la pasantía)

- **Lectura desde Google Sheets:** Obtiene los datos directamente de la planilla existente, sin duplicar el registro.
- **Mapa interactivo:** Muestra a todos los productores con sus marcadores correspondientes.
- **Georreferenciación incremental:** Incluir campos de Latitud y Longitud en la visualización. Estos pueden completarse durante las visitas, permitiendo ir poblando las ubicaciones poco a poco (enfoque incremental).
- **Filtros:** Por rubro, proyecto o tipo de producción (vid, higo, dulceras, curtiembre, vivero, etc.).
- **Estado de visita:** Cada productor podrá tener un estado (Pendiente / Visitado / Actualizado). Esto permitirá organizar y dar seguimiento a las salidas de campo.
- **Listado por cercanía:** Generación de un listado para armar rutas de visita según ubicación.
- **Acceso interno:** Enfoque pensado para uso del equipo y de la Municipalidad (se puede definir si es interno o mixto, sin complejidad).
- **Mapas sin costo:** Utilización de OpenStreetMap para evitar costos de APIs de pago.

## 4. Tecnologías a utilizar

| Tecnología | Justificación |
|---|---|
| **React + TypeScript + Vite** | Desarrollo ágil, ligero y modular. Se integra fácilmente con el resto de las propuestas. |
| **Leaflet.js + React-Leaflet** | Solución gratuita, estable, sin necesidad de claves de API pagas. Ideal para entornos con recursos limitados. |
| **Google Sheets (CSV/JSON) o Google Apps Script (Web App)** | Permite leer los datos existentes sin requerir un backend completo. |
| **PWA (opcional y muy ligero)** | Posibilidad de tener caché de marcadores para consulta offline (solo lectura), útil en zonas con señal inestable. |

## 5. Beneficios esperados

- **Optimización de visitas:** Se pueden planificar rutas según ubicación, ahorrando tiempo y recursos.
- **Visibilización geográfica:** Facilita identificar qué zonas están cubiertas y cuáles faltan por relevar.
- **Trabajo incremental:** Permite completar coordenadas en las visitas reales, sin bloquear el desarrollo por falta de datos de ubicación.
- **Organización del trabajo:** El estado de visita ayuda a Walter Quiroga y al equipo a llevar un seguimiento claro de sus salidas al campo.
- **Modularidad:** Se conecta con la Propuesta 1 (Alta/Actualización), sin generar acoplamiento fuerte entre módulos.

## 6. Entregables

- Módulo de mapa interactivo con marcadores por productor.
- Filtros por rubro/proyecto.
- Panel para gestionar estados de visita (Pendiente/Visitado/Actualizado).
- Listado de productores ordenado por cercanía para planificar rutas.
- Código fuente documentado.
- Demo funcional.

## 7. Justificación

Es un módulo pequeño, muy visual, demostrable y resuelve una necesidad concreta detectada en el diagnóstico. Su alcance reducido lo hace perfectamente lograble para el tiempo de pasantía, a la vez que aporta valor operativo inmediato para el equipo de trabajo.
