# ETAPA 1 - IDEA DEL PROYECTO

## Título

PWA para digitalizar el registro de campo de un rubro gestionado actualmente en Excel.

## Idea

Desarrollar un producto piloto pequeño para que los agentes carguen desde el lugar de trabajo los datos de un rubro, en vez de entregarlos para una transcripción manual al Excel. La PWA debe conservar una carga en el teléfono cuando no haya conexión, sincronizarla después con Firebase y permitir que la persona de oficina la revise y corrija desde una computadora. Al confirmar el registro, se incorpora a la hoja de destino acordada.

El rubro, los campos, las validaciones y el mapeo se definirán a partir del Excel y de la observación del proceso. No se deben suponer ni reutilizar automáticamente los campos descritos en documentos anteriores.

## Objetivos

- Evitar la doble carga de la información del rubro piloto.
- Permitir la captura desde un teléfono en el lugar donde se genera el dato.
- Conservar registros cuando no haya conexión y sincronizarlos cuando vuelva.
- Separar la carga de la revisión y confirmación antes de escribir en la planilla.
- Comprobar el flujo completo con un rubro antes de adaptar el producto a otros rubros.
- Permitir a la persona de oficina corregir, actualizar o eliminar registros recibidos.
- Permitir campos vacíos cuando el agente no cuente con la información, sin bloquear la carga.
- En una actualización, un campo vacío conserva el valor existente; el borrado de un dato es una acción explícita.
- Permitir modificar o eliminar desde la PWA los registros ya incorporados a la planilla y reflejar allí los cambios.
- La eliminación de un registro es lógica: se marca inactivo/eliminado y se conserva la fila y el historial.
- Solo un usuario tendrá permisos administrativos completos para consultar y restaurar registros inactivos; la interfaz mostrará acciones según el usuario autenticado.
- Los cambios registrarán usuario responsable, fecha/hora, acción y campos modificados.

## Alcance del piloto

**Incluye (relevamiento completado):**
- Inicio de sesión para usuarios autorizados.
- Formulario del rubro piloto confirmado: **Producción Agrícola - VID (Vitivinicultura)**, basado en las columnas A a AV de la hoja maestra `REGISTRO` del Excel de la Secretaría de Producción de Tinogasta.
- Guardado local de cargas sin conexión (offline-first con IndexedDB) y posterior sincronización a Firebase.
- Lista o vista para revisar y confirmar registros en la oficina.
- Edición y eliminación lógica de registros desde la computadora por la persona autorizada de oficina.
- Envío de registros confirmados a la hoja `REGISTRO` de Google Sheets mediante Google Apps Script.
- Estados visibles de guardado y sincronización.

**Fuera del alcance inicial:**
- Formularios para todos los rubros.
- Reportes avanzados, mapas y funcionalidades de otras propuestas.
- Administración avanzada de usuarios.
- Crear la base de Firebase antes de cerrar los campos y validar la interfaz.
- Desplegar el sistema antes de implementar y probar la web.

## Flujo propuesto

`Iniciar sesión → cargar datos → guardar en el teléfono si no hay conexión → sincronizar a Firebase → revisar → confirmar → incorporar a la planilla`

Los detalles de autenticación sin conexión, permisos de usuarios no administrativos, duplicados, planilla de destino y tratamiento de errores quedan pendientes de relevamiento. La auditoría ampliada con valores anteriores/nuevos queda fuera del MVP y puede evaluarse después de la pasantía.

## Criterios iniciales de éxito

- El formulario coincide con los campos y reglas confirmados del rubro piloto.
- Una carga sin conexión se conserva y se sincroniza al recuperar internet sin duplicarse.
- Una carga sincronizada permanece fuera de la planilla hasta que alguien la confirme.
- El registro confirmado llega a la ubicación correcta sin alterar información existente.
- Una actualización parcial conserva los campos no modificados; un campo vacío no borra el valor existente.
- Una modificación posterior se refleja en la fila correspondiente; la eliminación marca el registro como inactivo y conserva la fila y el historial.
- El estado de la carga resulta entendible para quien usa la PWA.

## Pendiente de validar

- Identificar el rubro y completar los campos desde el Excel.
- Confirmar el archivo/hoja de destino y el mapeo.
- Acordar quién revisa y confirma, y cómo se tratan errores o duplicados.
- Revisar los criterios de entrega de Seminario antes de cerrar esta etapa.
