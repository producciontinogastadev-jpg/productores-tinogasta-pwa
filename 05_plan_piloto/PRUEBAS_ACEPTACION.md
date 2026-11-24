# Pruebas de aceptación del MVP

Estas pruebas definen el mínimo que debe funcionar para considerar validado el piloto. Ejecutarlas con datos ficticios en un entorno de prueba antes de usar datos reales.

## Alcance fijado

- El agente inicia sesión desde un celular y solo puede cargar/enviar el formulario del rubro piloto. No puede revisar, modificar, eliminar, restaurar ni administrar registros.
- La sesión del agente permanece iniciada mientras trabaja; no debe cerrarse automáticamente durante el uso normal. La autenticación inicial requiere conexión.
- La persona administradora trabaja desde una computadora, revisa los datos recibidos y decide si los acepta para incorporarlos a la planilla.
- Los registros creados sin conexión se guardan en el celular y se sincronizan al recuperar internet.
- Los datos ausentes pueden quedar en blanco y no bloquean la carga.
- En una actualización, un campo vacío conserva el valor previo; borrar el dato requiere una acción explícita.
- Los cambios posteriores a la incorporación se reflejan en la planilla. La eliminación es lógica y puede restaurarse por la persona administradora.
- El historial mínimo registra usuario, fecha/hora, acción y campos modificados.
- No agregar pruebas/funciones de reportes, mapas, fotos, administración avanzada ni otros rubros al MVP.

## Preparación

Antes de ejecutar:

- Tener aprobado el formulario y el rubro piloto a partir del Excel.
- Tener una planilla/hoja de prueba autorizada y el mapeo de columnas acordado.
- Tener cuentas de prueba separadas para agente y administrador.
- Usar dispositivos/navegadores representativos: celular para agente y computadora para administrador.
- Preparar registros ficticios identificables para comprobar altas, cambios, bajas y duplicados.

Si un prerequisito todavía no está definido, mantener el caso como **Bloqueado por relevamiento/configuración**, no inventar campos o resultados.

## Casos de aceptación

| ID | Escenario y pasos | Resultado esperado | Estado |
|---|---|---|---|
| PA-01 | Iniciar sesión como agente desde un celular. Abrir la PWA y revisar las opciones disponibles. | La sesión queda activa durante el uso normal y el agente solo ve el formulario del rubro piloto y las acciones necesarias para cargar/enviar. No ve controles de revisión, administración, edición/eliminación de registros sincronizados ni restauración. | Pendiente |
| PA-02 | Como agente, cargar un registro ficticio con los campos que se tengan y dejar vacíos otros campos. Guardarlo/enviarlo. | Se puede guardar sin completar los campos que están ausentes; los datos disponibles se conservan y no se muestran bloqueos por los datos en blanco. | Bloqueado por formulario del Excel |
| PA-03 | Enviar una carga con conexión y abrir la bandeja desde la computadora como administrador. | El registro aparece una sola vez, asociado a la identidad del agente, y queda pendiente de revisión; todavía no está incorporado a la planilla. | Bloqueado por integración Firebase |
| PA-04 | Como administrador, revisar un registro pendiente y aceptarlo para envío. | El registro se incorpora a la hoja y columnas acordadas. Los datos se corresponden con la carga y no se altera información o fórmulas ajenas. | Bloqueado por mapeo e integración |
| PA-05 | Como agente, navegar fuera del formulario y volver a la PWA durante el uso normal con conexión. | La sesión continúa activa y el agente no tiene que volver a iniciar sesión en cada uso normal del mismo dispositivo. | Pendiente de implementación |
| PA-06 | Iniciar sesión como agente con conexión, luego activar modo avión. Cargar un registro ficticio y cerrar/reabrir la PWA antes de reconectar. | La carga queda guardada en el dispositivo y sigue disponible tras cerrar/reabrir. La PWA muestra que aún no se sincronizó; no afirma que el dato llegó a Firebase. | Bloqueado por almacenamiento local |
| PA-07 | Con PA-06 pendiente, restaurar conexión y esperar/solicitar sincronización. | El registro llega a Firebase una sola vez y pasa a pendiente de revisión. Si se reintenta, no se duplica. | Bloqueado por sincronización |
| PA-08 | Interrumpir la conexión durante el intento de sincronización y luego recuperarla. | El registro no se pierde; se indica que sigue pendiente y se puede reintentar sin generar duplicados. | Bloqueado por sincronización |
| PA-09 | Como agente, intentar abrir una URL/acción administrativa o modificar/revisar un registro ya sincronizado. | El acceso se deniega también en el backend/reglas de datos; ocultar el botón por sí solo no cuenta como control suficiente. | Bloqueado por autenticación y reglas |
| PA-10 | Como administrador, editar un registro existente dejando vacío un campo que ya tiene valor; guardar. | El campo conserva el valor anterior y solo se reflejan los campos efectivamente modificados. Los cambios se propagan a la fila correcta de la planilla. | Bloqueado por esquema/mapeo |
| PA-11 | Como administrador, borrar explícitamente un valor de campo, si esa acción está incluida en el formulario aprobado. | Se borra solamente el valor seleccionado; los demás campos permanecen iguales. La acción queda registrada. | Bloqueado por interfaz de borrado |
| PA-12 | Como administrador, modificar un registro ya incorporado a la planilla. | Se actualiza el registro/fila correspondiente una sola vez; no se crea una fila duplicada ni se sobrescriben columnas ajenas. | Bloqueado por integración |
| PA-13 | Como administrador, eliminar lógicamente un registro ya incorporado y luego consultar/restaurar los inactivos. | El registro queda marcado como inactivo en la PWA y la planilla; la fila/historial se conserva y solo el administrador puede restaurarlo. | Bloqueado por interfaz/regla |
| PA-14 | Modificar, dar de baja y restaurar un registro como administrador; consultar el historial mínimo. | Cada acción muestra el usuario responsable, fecha/hora, acción y campos modificados, sin requerir guardar valores anteriores/nuevos. | Bloqueado por auditoría mínima |
| PA-15 | Revisar el uso de servicios y límites antes de publicar/habilitar facturación. | El piloto puede probarse con los niveles gratuitos elegidos o se informa y obtiene aprobación antes de activar cualquier servicio pago. | Pendiente de verificación de cuotas |

## Aprobación del MVP

El piloto se considera aceptado cuando:

1. Los casos aplicables pasan con datos ficticios.
2. No hay defectos abiertos que impliquen pérdida, duplicación, escritura en fila/columna incorrecta o acceso no autorizado.
3. La persona responsable valida el formulario del rubro y la ubicación de los datos en la planilla.
4. Se documentan resultados y defectos conocidos, sin afirmar que el sistema está libre de todo error.
5. Se aprueba el costo/uso de los servicios antes de habilitar opciones pagas o publicar el sitio.
