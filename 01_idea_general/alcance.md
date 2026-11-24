# ALCANCE

## Incluye (MVP)
- Formulario web para Alta de nuevo productor
- Búsqueda por DNI/CUIT (detectar duplicados / precargar para modificar)
- Formulario para Modificación controlada
- Validaciones básicas de campos obligatorios
- Escritura directa a Google Sheets (hoja Productores) vía Google Apps Script Web App
- Metadatos: ID_Productor, Fecha_Alta, Actualizado_Por, Fecha_Actualizacion
- Diseño responsive (PC + Móvil)
- Prevención duplicados (DNI como clave lógica)

## No incluye
- Sistema integral para todos los proyectos
- Reportes gerenciales/cuadros de mando completos
- Múltiples niveles de roles/permiso complejos
- Sincronización offline completa con resolución de conflictos
- Migración masiva automática con reglas complejas
- Integración con otros sistemas municipales

## Ampliado para campo (MVP)
- PWA con modo offline + sync cuando hay conexión
- Formularios dinámicos por rubro (mínimos definidos con tutor)
- Búsqueda productor + alta ficha en sitio
- Cola de envíos + indicador estado
- Mantener Google Sheets existente ampliado
