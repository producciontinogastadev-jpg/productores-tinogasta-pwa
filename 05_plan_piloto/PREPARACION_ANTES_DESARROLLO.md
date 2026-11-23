# Preparación antes del desarrollo

Usar esta checklist antes de empezar el piloto. La meta no es decidir desde ahora cada detalle técnico: es reunir suficiente información para que el formulario y el flujo no se tengan que rediseñar por supuestos evitables.

## 1. Material que conviene conseguir

- [ ] Autorización para observar el proceso y consultar el Excel usado actualmente.
- [ ] Una copia de trabajo del archivo, preferentemente sin datos personales o con datos anonimizados.
- [ ] Acceso a un ejemplo de cómo se completa el rubro seleccionado, incluyendo encabezados y algunas filas representativas.
- [ ] Identificación de hojas relevantes, listas desplegables, validaciones, fórmulas, columnas ocultas/protegidas, macros o pasos manuales, si existen.
- [ ] Identificación de quién puede autorizar cambios y quién administra el archivo.

No copiar registros personales, credenciales ni información sensible a la documentación del proyecto. Si no se puede compartir una copia, registrar la estructura sin transcribir valores reales.

## 1.1 Cómo revisar el Excel con las herramientas disponibles

Cuando se agregue el archivo al workspace, se puede inspeccionar directamente aquí; no es necesario que transcribas manualmente todo su contenido. Primero confirmaremos el formato y revisaremos, según lo que permita el archivo:

- Nombres y orden de las hojas.
- Encabezados y estructura de columnas.
- Muestra acotada de filas para entender formatos y valores frecuentes.
- Fórmulas, celdas vacías y posibles datos repetidos.
- Listas de validación y opciones desplegables.
- Hojas, filas o columnas ocultas, tablas y rangos con nombre, si existen.

La inspección se hará localmente con las herramientas disponibles. Para un `.xlsx` o `.xlsm` normalmente no hace falta instalar nada de antemano; si el archivo o una característica concreta requiere una herramienta adicional, primero se identificará la necesidad y se propondrá una opción antes de instalarla. No se ejecutarán macros.

**No subir el Excel a conversores web ni servicios externos.** Si contiene datos personales, lo más seguro es agregar una copia anonimizada. Si no se puede anonimizar, acordaremos revisar solo encabezados/estructura y no reproducir filas personales en Markdown ni en ejemplos.

El análisis técnico puede revelar cómo está estructurada la planilla, pero no necesariamente el significado de cada columna ni las reglas de trabajo. Esos puntos los confirmarás tú o la persona que conoce el proceso. Por ejemplo, ante encabezados ambiguos, columnas heredadas o fórmulas cuyo propósito no sea evidente, te preguntaré antes de convertirlos en requisitos.

## 2. Entender el proceso actual

Observar el recorrido de un registro desde que se recoge hasta que queda asentado:

- [x] Los agentes son las personas que van al lugar y recolectan los datos que se agregarán o actualizarán.
- [x] Una persona en la oficina recibe esos datos, los transcribe al Excel desde una computadora y los revisa.
- [ ] Confirmar cómo se entregan hoy los datos entre agente y oficina (papel, archivo, mensajes u otro medio) y en qué momento.
- [ ] Confirmar qué pasos realiza la persona revisora y qué criterio usa para decidir que los datos están correctos.
- [ ] Qué hacen ante información faltante, ilegible, contradictoria o corregida.
- [ ] Cómo identifican el registro que se agrega o actualiza y cómo distinguen una actualización de un alta nueva.
- [ ] Cuál es la demora o dificultad más importante que el piloto debe reducir.

El objetivo del sistema se limita a capturar en la PWA la información recolectada, conservarla de forma segura y ordenada, y facilitar su revisión y paso correcto a la planilla. No es necesario modelar para qué usan luego esa información.

## 3. Especificar el formulario del rubro piloto

Por cada campo observado, registrar:

- [ ] Nombre y significado para quien carga.
- [ ] Tipo y formato esperado (texto, número, fecha, selección, etc.).
- [ ] Si el proceso lo considera obligatorio, opcional o condicional. Registrar esa regla, pero no bloquear la captura por estar vacío: los datos faltantes pueden quedar en blanco.
- [ ] Opciones permitidas, unidad de medida, límites y validaciones.
- [ ] Un ejemplo ficticio válido y, si ayuda, un ejemplo inválido.
- [ ] Orden y agrupación preferidos para completar los datos en campo.
- [ ] Campos que dependen de respuestas anteriores.
- [ ] Qué se debe poder corregir y quién puede hacerlo.

No inferir un campo solo porque haya una columna en el Excel: confirmar qué significa y si se debe capturar desde la PWA.

## 4. Acordar revisión y estados

- [x] El agente carga/envía; el administrador revisa y acepta antes de pasar los datos a la planilla.
- [ ] Qué debe verificar el administrador antes de aceptar, según el Excel y el proceso observado.
- [ ] Qué ocurre con registros rechazados, incompletos o devueltos para corrección.
- [x] La persona de oficina debe poder corregir, actualizar o eliminar los registros recibidos desde una computadora.
- [x] La falta de un dato no debe bloquear el guardado ni exigir que el agente lo complete; el campo puede quedar vacío para completarlo más adelante.
- [x] Definir acciones funcionales de cada rol: el agente solo carga/envía y el administrador revisa y gestiona registros.
- [ ] Acordar cómo se registran las correcciones y quién puede eliminar definitivamente un registro.
- [x] La persona de oficina puede modificar/eliminar desde la PWA registros ya incorporados a la planilla; esos cambios deben reflejarse en la hoja.
- [ ] Confirmar qué estados necesita ver cada persona (por ejemplo, guardado en el dispositivo, pendiente de sincronizar, pendiente de revisión, confirmado o con error).
- [x] Solo un usuario tendrá permisos administrativos completos; las opciones visibles dependen de la cuenta autenticada.
- [x] La sesión del agente permanece activa durante el uso normal; el inicio de sesión inicial requiere conexión.
- [x] Registrar quién hizo cada cambio para identificar al responsable.
- [x] El agente no puede revisar, aceptar ni gestionar registros sincronizados.
- [x] Registrar en cada cambio usuario, fecha/hora, acción y campos modificados.
- [x] Para el MVP no se conservarán valores anteriores/nuevos en el historial; la auditoría detallada queda para una posible etapa posterior.

Mantener los estados simples. Agregar estados solo si cambian una acción concreta del usuario.

**Regla acordada:** en una actualización, dejar un campo vacío conserva el valor existente; borrar el dato requiere una acción explícita.

La edición y eliminación desde la PWA continuará después del envío a la planilla y deberá reflejarse en ella. **Regla acordada:** eliminar es una baja lógica; se marca el registro como eliminado/inactivo y se conserva la fila y el historial. El único usuario administrativo podrá consultar y restaurar registros inactivos. Las opciones de la PWA se muestran según el usuario autenticado. Para el MVP, el historial se limita a usuario, fecha/hora, acción y campos modificados, sin guardar valores anteriores/nuevos. Las actualizaciones deben localizar la fila por un identificador estable y preservar datos ajenos y fórmulas.

## 5. Confirmar destino y reglas de escritura

- [ ] Confirmar si el archivo actual es Excel, Google Sheets u otro formato.
- [ ] Acordar si se seguirá usando ese archivo, se convertirá, se copiará como destino o se elegirá otro mecanismo.
- [ ] Identificar hoja, encabezados, columnas destino y orden esperado.
- [ ] Identificar fórmulas, formatos o información que nunca se deben sobrescribir.
- [ ] Confirmar si el flujo agrega filas, actualiza filas existentes o ambas cosas.
- [x] Las altas y las actualizaciones deben poder reflejarse; la persona de oficina también necesita poder corregir o eliminar registros.
- [ ] Definir cómo hacer que una actualización afecte solo los campos que se editaron y preserve los demás.
- [ ] Acordar cómo se reconocen duplicados y qué hacer cuando se corrige un dato ya enviado.
- [ ] Confirmar con la persona responsable qué accesos y permisos se pueden conceder a la integración.

No implementar ni conectar la escritura automática hasta tener esta decisión y un entorno de prueba autorizado. Apps Script u otra integración siguen siendo opciones, no una elección anticipada.

## 6. Relevar las condiciones de uso en campo

- [ ] Modelos o tipos de teléfonos que se usarán y navegadores disponibles.
- [ ] Si la PWA se abrirá desde un enlace o se instalará en los dispositivos.
- [ ] Qué conectividad hay durante las visitas y cuánto tiempo puede durar el trabajo sin conexión.
- [ ] Si la aplicación se habrá abierto e iniciado sesión con conexión antes de salir al campo.
- [ ] Si una persona podría usar más de un dispositivo o compartir un dispositivo.
- [ ] Si se prevé adjuntar fotos, ubicación u otros datos: incluirlos solo si se confirman como necesarios.

Probar explícitamente los límites de conexión y autenticación sin internet; no asumir que “offline” resuelve por sí solo el inicio de sesión.

## 7. Acordar alcance y criterios de aceptación

Antes de programar el flujo:

- [ ] Confirmar un único rubro para el piloto.
- [ ] Escribir qué queda incluido y qué se excluye por tiempo.
- [ ] Acordar cómo se demostrará que se eliminó la doble carga.
- [ ] Definir qué debe ocurrir si la conexión se pierde durante la carga o sincronización.
- [ ] Definir cómo verificar que los reintentos no dupliquen registros.
- [ ] Definir quién valida el formulario y el recorrido visual.
- [ ] Escribir criterios comprobables para: carga en línea, carga sin conexión, revisión, confirmación y escritura en destino.
- [x] Redactar las pruebas de aceptación del MVP en `PRUEBAS_ACEPTACION.md`; su ejecución queda pendiente de la implementación.
- [x] El objetivo es que el flujo sea gratuito; revisar los límites y condiciones de cada servicio antes de habilitarlo, sin asumir que todos los usos permanecerán dentro de planes gratuitos.
- [x] Diseñar controles y pruebas para reducir y detectar errores; no es posible garantizar que un sistema esté libre de todo error.

## 8. Preparar recursos del proyecto sin adelantar la configuración

- [ ] Definir quién será responsable de la cuenta dedicada del proyecto.
- [ ] Acordar el resguardo de recuperación y autenticación de la cuenta fuera del repositorio.
- [ ] Confirmar quién será propietario del proyecto Firebase, del sitio Netlify y del archivo destino, cuando llegue el momento.
- [ ] Verificar permisos y límites/costos antes de habilitar servicios.
- [ ] Mantener credenciales y secretos fuera del código, Markdown, bitácora y capturas.

No es necesario crear ahora Firebase, Netlify ni accesos de Google. Se configuran cuando el roadmap indique que la interfaz y los datos ya están definidos.

## Puerta de entrada al prototipo visual

Se puede empezar la interfaz con datos ficticios cuando:

- [ ] Se seleccionó el rubro.
- [ ] Se conocen los campos, significados, opciones y validaciones observados en el Excel.
- [ ] Se entiende el recorrido mínimo de carga y revisión.
- [ ] Se acordó quién revisará el formulario y cómo dará conformidad.
- [ ] Se conocen los dispositivos y condiciones de uso más importantes.

Para validar la interfaz **no** es necesario haber creado Firebase ni decidido todavía la integración final con la planilla. Esas decisiones son previas a implementar persistencia y escritura reales, no un requisito para dibujar y probar el flujo visual.

## Puerta de entrada a Firebase e integración real

Antes de guardar datos reales en Firebase o escribir automáticamente en el archivo destino:

- [ ] Formulario y reglas aprobados.
- [ ] Estados, revisión, permisos y duplicados definidos.
- [ ] Contrato de datos revisado.
- [ ] Archivo/hoja destino, columnas y comportamiento de escritura confirmados.
- [ ] Plan de prueba con datos ficticios y autorización para usar los servicios.
- [ ] Reglas de seguridad y manejo de errores preparados.

## Resultado de la visita

Completar después del relevamiento:

- Rubro seleccionado:
- Archivo y hoja consultados:
- Persona(s) que validan el flujo:
- Campos y reglas documentados en:
- Decisión de destino:
- Dudas que bloquean el diseño:
- Próximo paso acordado:
