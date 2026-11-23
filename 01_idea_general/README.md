# 01 - IDEA GENERAL
## Propuesta 1: Módulo de Alta y Actualización Controlada del Registro de Productores Tinogasteños

### ¿Qué queremos lograr?
Desarrollar un módulo web acotado que permita dar de alta, buscar y actualizar datos de productores, ampliando el Registro de Productores Tinogasteños ya existente en Google Sheets (desde 2019), sin crear un registro paralelo.

### ¿Por qué?
- El registro actual es Excel/Google Sheets con altas/correcciones manuales
- Genera duplicados, múltiples versiones y falta trazabilidad
- Se requiere control de calidad y auditoría de quién/cuándo modifica
- Necesidad detectada en diagnóstico

### Alcance resumido
- Formulario para Alta, Búsqueda (DNI/CUIT), Modificación controlada
- Validación duplicados, metadatos de auditoría
- Escritura directa vía Google Apps Script (Web App) a hoja Productores
- MVP funcional y demostrable
