# FORMULARIOS DINÁMICOS POR RUBRO

## Rubros identificados (desde diagnóstico)
1. Cocina Comunitaria (Museo del Sabor) - Alimentación y economía social
2. Vivero Provincial Anillaco - Plantaciones y espacios verdes
3. Producción intensiva bajo cubierta - Invernadero, vid, caprino y ovino
4. Centro Experimental (CEMA) - Investigación y parcelas demostrativas de higo
5. Curtiembre - Industrialización de cueros
6. Pequeñas industrias dulceras - Dulce, jalea y mermelada
7. Esterilización de animales domésticos - Canino y felino

## MVP inicial
Priorizar: Vivero, CEMA (higo), Dulceras, Curtiembre, Animales. Cocina puede ser simplificado.

## Campos mínimos sugeridos (base ficha)
- id_ficha, productor_id, rubro, fecha_visita, lugar_visita (finca/casa/invernadero/criadero/etc)
- creado_por, creado_en, modificado_por, modificado_en, sync_sheets
- observaciones, coords opcionales

## Sugerido por rubro (borrador - validar con tutor)
### Vivero (plantaciones/espacios verdes)
- lote, especie, cantidad plantines, fecha siembra/transplante, riego, estado, superficie m²

### Dulceras (mermelada/dulce)
- fecha producción, materia prima (kg), producto, cantidad frascos, lote, observaciones

### CEMA (higo)
- parcela/lote, variedad, poda/riego/tratamiento, cosecha aprox, observaciones

### Curtiembre
- ingreso cueros (cantidad), procedencia, etapa, responsable, observaciones

### Animales (esterilización)
- especie (canino/felino), cantidad, sexo, edad, realizado por, observaciones

## Acción
Validar con tutor: rubros definitivos + campos exactos. Marcar en PENDIENTES.
