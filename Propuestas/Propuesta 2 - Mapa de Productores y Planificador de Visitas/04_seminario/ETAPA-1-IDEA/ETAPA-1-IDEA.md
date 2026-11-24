# ETAPA 1 - IDEA DEL PROYECTO
Título: Mapa de Productores y Planificador de Visitas

## Idea
Módulo web que muestra en un mapa interactivo a los productores del Registro, con filtros y estados de visita, y genera un listado por cercanía para planificar las salidas al campo.

## Objetivos
- Visualizar los productores georreferenciados de la Secretaría.
- Filtrar por rubro/proyecto/tipo de producción.
- Organizar las visitas por estado y por cercanía.

## Alcance
MVP: mapa + marcadores + filtros + estados de visita + listado por cercanía + lectura del Registro.
No incluye: ABM de productores, optimización automática de rutas.

## RF/RNF
Ver `01_idea_general/requisitos.md`.

## MoSCoW (resumen)
- **Must:** mapa, marcadores, filtros, leer el Registro, estado de visita.
- **Should:** listado por cercanía, cache offline de lectura.
- **Could:** completar coordenadas en visita, exportar ruta.
- **Won't (MVP):** optimización automática de rutas, ABM de productores.

## Relato de solución
El equipo abre el módulo, ve el mapa con los productores, filtra por rubro, revisa qué falta visitar y arma la ruta del día usando el listado por cercanía. El Registro de Productores existente es la fuente; este módulo no lo modifica.
