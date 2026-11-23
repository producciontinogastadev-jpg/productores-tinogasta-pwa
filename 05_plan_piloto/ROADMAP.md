# Roadmap del piloto

Las actividades están ordenadas para no fijar el modelo de datos ni la integración antes de conocer el formulario real. Avanzar de una etapa a la siguiente al cumplir su criterio de salida.

## 0. Preparar el relevamiento

**Actividades**
- Llevar una lista de preguntas de [DECISIONES_PENDIENTES.md](./DECISIONES_PENDIENTES.md).
- Solicitar permiso para observar el proceso y consultar una copia o ejemplo de la planilla.
- Si se comparte información real, resguardarla y no copiar datos personales a documentos de desarrollo.

**Criterio de salida:** se puede observar cómo se recolecta, revisa y transcribe la información de un rubro.

## 1. Relevar el rubro y la planilla

**Actividades**
- Seleccionar un rubro para el piloto.
- Confirmar el flujo existente: agentes recolectan en campo y la persona de oficina recibe, transcribe al Excel y revisa.
- Registrar los campos que se preguntan, cuáles son obligatorios, sus formatos y opciones válidas.
- Observar el orden de carga y las reglas que aplica actualmente quien transcribe.
- Documentar la operación posterior como fuera de alcance si no afecta la captura, corrección o escritura en la planilla.
- Identificar la hoja y las columnas de destino, fórmulas, cálculos y cualquier dato que no deba sobrescribirse.
- Entender quién carga, quién revisa y quién confirma.
- Documentar el proceso con ejemplos ficticios o anonimizados.

**Criterio de salida:** hay un formulario y un destino de planilla descritos sin campos ni reglas supuestos.

## 2. Cerrar alcance y flujo

**Actividades**
- Definir qué incluye el piloto y qué se deja fuera.
- Acordar qué estados necesita un registro y quién puede cambiarlo.
- Acordar qué hacer con un dato incompleto, rechazado, corregido o repetido.
- Definir permisos del agente en celular y de la persona de oficina en computadora, incluyendo corrección, actualización y eliminación.
- Definir las opciones/acciones por usuario autenticado: solo un usuario tendrá permisos administrativos completos, incluido consultar y restaurar registros inactivos.
- El agente solo puede cargar/enviar formularios; mantener su sesión activa durante el uso normal.
- El historial del MVP incluye usuario responsable, fecha/hora, acción y campos modificados; no guardar valores anteriores/nuevos.
- Los campos vacíos no bloquean la carga; al actualizar, un campo vacío conserva el valor anterior y borrar requiere una acción explícita.
- La persona de oficina podrá mantener desde la PWA registros ya enviados, y la planilla deberá reflejar esos cambios.
- La eliminación de un registro enviado será lógica: marcarlo como inactivo/eliminado y conservar la fila y el historial.
- Definir qué debe ocurrir si la carga se interrumpe o la sincronización falla.
- Escribir criterios de aceptación medibles para el flujo completo.

**Criterio de salida:** el usuario puede describir qué sucede desde la carga hasta la aparición confirmada en Sheets.

## 3. Diseñar y construir la interfaz con datos de prueba

**Actividades**
- Crear o adaptar la aplicación React + TypeScript + Vite y el estilo acordado.
- Implementar las pantallas mínimas: inicio de sesión, carga para el agente en celular, revisión/edición para la persona de oficina en computadora y estados de sincronización.
- Permitir campos vacíos cuando la información no esté disponible; no bloquear la carga por datos faltantes salvo que se acuerde una regla concreta del Excel.
- Probar los recorridos del agente en teléfono y de la persona de oficina en escritorio.
- Usar datos ficticios; no conectar todavía Firebase ni Sheets.
- Ajustar la interfaz con quien usará el sistema antes de definir el esquema persistente.

**Criterio de salida:** el flujo visual puede recorrerse con datos de prueba y el formulario refleja el relevamiento.

## 4. Implementar la PWA y el guardado local

**Actividades**
- Configurar lo necesario para instalar y abrir la PWA.
- Guardar temporalmente los registros sin conexión en almacenamiento local persistente del navegador (evaluar IndexedDB).
- Mostrar claramente si cada registro está guardado localmente, pendiente de sincronización, sincronizado o requiere atención.
- Reintentar la sincronización al recuperar conexión, sin crear registros duplicados.
- Probar cierre/reapertura de la aplicación y pérdida/restauración de conectividad.

**Criterio de salida:** un registro puede cargarse sin conexión y permanece disponible en el dispositivo hasta sincronizarse.

## 5. Definir datos, crear Firebase y autenticar

**Actividades**
- Traducir los campos y estados ya aprobados a un contrato de datos.
- Crear el proyecto de Firebase con la cuenta dedicada, una vez acordado el formulario.
- Configurar el método de autenticación y los usuarios mínimos del piloto.
- Definir reglas de acceso de Firestore para limitar lectura y escritura a usuarios autorizados.
- No almacenar secretos de servidor ni credenciales de Google en la PWA.

**Criterio de salida:** una persona autorizada puede iniciar sesión y los datos aprobados se guardan en Firebase con acceso restringido.

## 6. Sincronizar la cola local con Firebase

**Actividades**
- Enviar a Firebase los registros locales pendientes cuando haya conexión y sesión válida.
- Asignar un identificador estable a cada registro y diseñar reintentos idempotentes.
- Conservar el registro local si la sincronización falla; mostrar el error de forma comprensible.
- Evitar enviar a Sheets registros que todavía no fueron revisados y confirmados.

**Criterio de salida:** los registros creados online u offline llegan una sola vez a Firebase y quedan pendientes de revisión.

## 7. Implementar revisión, confirmación y escritura en Sheets

**Actividades**
- Implementar la vista y acción de revisión conforme a los permisos acordados.
- Después de confirmar, enviar el registro a la hoja y columnas definidas.
- Propagar también a la hoja las modificaciones/eliminaciones posteriores realizadas desde la PWA, localizando la fila mediante un identificador estable.
- Aplicar la regla acordada de campos vacíos: conservar el valor existente; permitir borrar solo mediante una acción explícita.
- Aplicar baja lógica a registros eliminados, conservar la fila y el historial, y definir quién puede consultar o restaurar registros inactivos.
- Mostrar acciones según la cuenta autenticada; registrar usuario responsable, fecha/hora, acción y campos modificados para cada modificación, baja y restauración.
- Elegir la integración de servidor apropiada tras revisar la planilla y sus permisos (por ejemplo, Apps Script); mantener las credenciales fuera del cliente.
- Registrar el resultado del envío y permitir un reintento seguro si Sheets no responde.
- Preservar datos y fórmulas preexistentes de la planilla.

**Criterio de salida:** solo los registros confirmados se agregan en el destino correcto y los reintentos no duplican filas.

## 8. Probar el recorrido y corregir

**Pruebas mínimas**
- Carga online, revisión, confirmación y aparición correcta en Sheets.
- Carga offline, cierre y reapertura de la PWA, recuperación de internet y sincronización.
- Reintento por error de red y verificación de que no haya duplicados.
- Campos ausentes que no bloquean la carga y actualización parcial que preserva valores previos.
- Permisos: el agente solo carga; solo el administrador revisa/acepta, modifica, elimina lógicamente y restaura.
- Auditoría mínima de usuario, fecha/hora, acción y campos modificados.
- Comportamiento en teléfono y escritorio.

El detalle ejecutable de los casos está en `PRUEBAS_ACEPTACION.md`.

**Criterio de salida:** los criterios de aceptación del piloto pasan con datos de prueba; las incidencias conocidas quedan registradas.

## 9. Preparar el despliegue y cerrar el piloto

**Actividades**
- Crear o configurar Netlify con la cuenta dedicada cuando el producto esté listo para publicarse.
- Revisar variables de entorno, reglas de Firebase, permisos de Google y datos de prueba.
- Desplegar y comprobar la versión publicada con usuarios autorizados.
- Completar manual, evidencias e informe, y actualizar la bitácora.
- Evaluar qué se puede reutilizar y qué debe adaptarse antes de sumar otro rubro.

**Criterio de salida:** piloto publicado y verificado, con documentación suficiente para demostrar y mantener el producto.

## Condiciones de costo y calidad

- Implementar solo lo necesario para demostrar el flujo del piloto; postergar mejoras que no sean necesarias para su funcionamiento.
- Diseñar inicialmente con servicios que ofrezcan un nivel gratuito apropiado; revisar cuotas, cambios de planes y condiciones de uso antes de habilitar cada servicio.
- No se puede garantizar costo cero para cualquier volumen o para siempre. Registrar cualquier límite que pueda afectar el piloto y obtener aprobación antes de activar una opción con costo.
- No prometer ausencia absoluta de errores. Usar mapeo explícito de columnas, validaciones que no impidan cargas incompletas, identificadores estables, actualizaciones parciales, permisos, trazabilidad, manejo de fallos y pruebas con datos ficticios para reducir y detectar errores.
