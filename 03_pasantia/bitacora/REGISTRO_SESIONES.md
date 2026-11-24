# Registro maestro de sesiones

Este archivo resume el trabajo de cada sesión del proyecto para poder retomar rápidamente el contexto. Se actualiza al cierre de cada sesión de trabajo, junto con la bitácora formal y la etapa de Seminario que corresponda.

## Sesiones

### 2026-11-09 — Sesión 1: Preparación del piloto

- **Objetivo:** dejar preparado el camino de trabajo antes de conocer los campos del formulario.
- **Hecho:** se definió un piloto de un rubro, con captura en PWA, guardado local sin conexión, sincronización a Firebase, revisión y confirmación antes del envío a la planilla.
- **Decisiones:** relevar el Excel antes de definir campos, modelo de datos y destino exacto; construir la interfaz antes de crear Firebase; no desplegar hasta probar la web.
- **Documentación:** se creó el contexto, roadmap y lista de decisiones pendientes del piloto.
- **Siguiente paso:** relevar el rubro y completar la lista de decisiones durante la visita.

### 2026-11-09 — Sesión 2: Alcance y entregas

- **Objetivo:** separar el proyecto activo de los antecedentes y organizar las entregas académicas.
- **Hecho:** se estableció que solo se desarrollará la Propuesta 1; las Propuestas 2 y 3 quedan fuera de alcance. Se definió mantener únicamente la bitácora para Pasantía y trabajar Seminario etapa por etapa en paralelo.
- **Decisiones:** tomar del Excel y del relevamiento los requisitos concretos; no usar diagnósticos ni propuestas anteriores como fuente de campos.
- **Documentación:** se actualizaron instrucciones, pendientes y las etapas 1-3 de Seminario; se creó una skill y una instrucción del workspace para el seguimiento.
- **Siguiente paso:** revisar los criterios de la etapa vigente y completar el relevamiento antes de cerrar el formulario.

### 2026-11-09 — Sesión 3: Registro continuo de sesiones

- **Objetivo:** contar con un único Markdown consultable para recordar lo realizado en cada sesión.
- **Hecho:** se creó este registro maestro y se incorporó su actualización obligatoria al procedimiento del workspace.
- **Decisión:** al cierre de cada sesión de trabajo del proyecto, resumir objetivo, avances, decisiones, archivos, validación y próximos pasos. Mantener también la bitácora formal de Pasantía y actualizar Seminario cuando el trabajo afecte una etapa.
- **Archivos:** `REGISTRO_SESIONES.md`, `03_pasantia/README.md`, `.github/skills/seguimiento-pasantia-seminario/SKILL.md`, `.github/instructions/propuesta1-entregas.instructions.md`, `INSTRUCCIONES_GENERALES.md` y `PENDIENTES.md`.
- **Validación:** se verificó la existencia del registro y se revisaron las instrucciones que lo hacen parte del flujo.
- **Siguiente paso:** continuar con el relevamiento del Excel y registrar automáticamente el resumen de cada sesión futura al terminar el trabajo.

### 2026-11-09 — Sesión 4: Preparación antes del desarrollo

- **Objetivo:** identificar qué información conviene recopilar antes de programar para reducir cambios y bloqueos.
- **Hecho:** se creó una checklist de preparación que cubre el proceso actual, los campos del Excel, revisión y estados, destino, condiciones de uso en campo, criterios de aceptación y recursos.
- **Decisión:** separar lo necesario para validar el prototipo visual de lo que debe definirse antes de Firebase y de la integración con la planilla.
- **Siguiente paso:** usar la checklist durante la visita; completar el formulario y las decisiones con datos observados, no supuestos.

### 2026-11-09 — Sesión 5: Revisión del Excel

- **Objetivo:** aclarar si el archivo se podrá analizar directamente y qué herramientas extra hacen falta.
- **Respuesta:** sí; cuando el archivo esté en el workspace se puede inspeccionar directamente. Para `.xlsx`/`.xlsm` probablemente basten las herramientas disponibles; no instalar nada antes de revisar el formato y las necesidades.
- **Alcance de análisis:** hojas, encabezados, estructura, muestras acotadas, fórmulas, validaciones, ocultos y otros elementos compatibles con el formato. No ejecutar macros.
- **Límite:** el análisis estructural no determina por sí solo el significado de columnas ni reglas del proceso; esos puntos se confirmarán con el usuario o con quien conozca el Excel.
- **Privacidad:** preferir una copia anonimizada; no usar conversores web ni copiar datos personales a documentos.
- **Próximo paso:** agregar el Excel en la próxima sesión y empezar por identificar su formato y estructura.

### 2026-11-09 — Sesión 6: Aclaración del proceso de captura y revisión

- **Objetivo:** precisar el flujo actual y las necesidades de los agentes y de la persona de oficina.
- **Hecho:** los agentes recogen los datos en el lugar y se los entregan a una persona en la oficina, quien los transcribe y revisa desde una computadora.
- **Requisitos confirmados:** el agente cargará desde el celular; la oficina revisará desde una computadora y podrá corregir, actualizar y eliminar registros; los campos sin información pueden quedar vacíos y no deben bloquear ni afectar otros datos; no es necesario conocer el uso posterior de la información.
- **Calidad/costo:** se prioriza costo cero y evitar errores. Se documentó que no puede garantizarse costo cero para cualquier uso ni ausencia absoluta de errores; se revisarán límites gratuitos y se implementarán controles y pruebas.
- **Pendientes críticos:** decidir si un campo vacío al modificar conserva el valor anterior o lo borra; definir si edición/eliminación sigue disponible después de que el registro se incorpora a la planilla.
- **Documentación:** actualizados contexto del proyecto, checklist, decisiones pendientes, roadmap, etapa 1 del Seminario e instrucciones del workspace.
- **Siguiente paso:** confirmar la semántica de campos vacíos y el alcance de edición/eliminación posterior al envío; luego revisar el Excel cuando esté disponible.

### 2026-11-09 — Sesión 7: Confirmación de reglas de actualización

- **Objetivo:** cerrar cómo se comportan las actualizaciones parciales y el mantenimiento de registros enviados.
- **Decisiones confirmadas:** un campo vacío al actualizar conserva el valor existente; borrar un dato requiere una acción explícita. La persona de oficina podrá modificar y eliminar desde la PWA registros incluso después de que se hayan enviado a la planilla, y esos cambios deberán reflejarse allí.
- **Pendiente:** definir si eliminar un registro ya enviado lo borra físicamente o lo marca como baja/archivado, y qué historial se conserva.
- **Documentación:** actualizados contexto, checklist, decisiones pendientes, roadmap, etapa 1 del Seminario e índice de pendientes.
- **Siguiente paso:** acordar el tipo de eliminación y luego revisar el Excel y el mapeo del rubro piloto.

### 2026-11-09 — Sesión 8: Regla de baja lógica

- **Objetivo:** definir qué significa eliminar un registro ya sincronizado.
- **Decisión confirmada:** usar baja lógica; marcar el registro como eliminado/inactivo en la PWA y planilla, conservando la fila y el historial en lugar de borrarlo físicamente.
- **Pendiente:** decidir qué usuarios pueden ver o restaurar registros inactivos, si se permite restaurarlos.
- **Documentación:** actualizados contexto, checklist, decisiones pendientes, roadmap, etapa 1 del Seminario e índice de pendientes.
- **Siguiente paso:** analizar el Excel, acordar acceso/restauración y confirmar el mapeo y la identidad estable de los registros.

### 2026-11-09 — Sesión 9: Permisos de administración y auditoría

- **Objetivo:** precisar quién puede consultar/restaurar bajas y cómo identificar a quien realiza cambios.
- **Decisiones confirmadas:** el usuario que maneja la computadora será el único con permisos administrativos completos; podrá consultar y restaurar registros inactivos. Las opciones de la PWA dependen de la cuenta autenticada. Cada cambio debe registrar quién lo hizo.
- **Alcance de auditoría aceptado:** como mínimo, registrar usuario, fecha/hora, acción y campos modificados.
- **Pendientes:** delimitar qué acciones tienen los usuarios no administrativos y decidir si también se guardan valores anteriores/nuevos.
- **Documentación:** actualizados contexto, checklist, decisiones pendientes, roadmap, etapa 1 del Seminario y PENDIENTES.md.
- **Siguiente paso:** revisar el Excel cuando esté disponible y cerrar permisos e historial antes de implementar autorización y auditoría.

### 2026-11-09 — Sesión 10: Confirmación del detalle mínimo de auditoría

- **Decisión confirmada:** el historial debe registrar usuario responsable, fecha/hora, acción y campos modificados.
- **Alcance MVP:** no guardar valores anteriores/nuevos; esa auditoría ampliada queda fuera de la pasantía.
- **Siguiente paso:** analizar el Excel cuando esté disponible y mantener el desarrollo en el mínimo necesario.

### 2026-11-09 — Sesión 11: Mantener el MVP mínimo

- **Decisión:** implementar solo lo necesario para que el flujo acordado funcione y pueda probarse durante la pasantía.
- **Fuera del MVP:** auditoría detallada con valores anteriores/nuevos y mejoras que no sean necesarias para el funcionamiento; podrán evaluarse en una etapa o contratación posterior.
- **Documentación:** actualizados contexto, checklist, decisiones pendientes, roadmap, etapa 1 de Seminario e instrucciones de trabajo.
- **Siguiente paso:** analizar el Excel, completar requisitos esenciales y no ampliar el alcance sin necesidad confirmada.

### 2026-11-09 — Sesión 12: Delimitar el repositorio de GitHub

- **Objetivo:** precisar qué contenido se subirá a GitHub y dónde residirá la PWA.
- **Decisión:** la carpeta de la Propuesta 1 será la raíz del repositorio. La PWA y todo lo necesario para instalar, probar, compilar y desplegar estarán dentro de esa carpeta. La carpeta superior y las Propuestas 2 y 3 no se subirán.
- **Criterio:** incluir archivos ajenos únicamente si son requeridos por el desarrollo o despliegue; mantener secretos y datos reales fuera del repositorio.
- **Documentación:** creado `REPOSITORIO_Y_DESPLIEGUE.md` y actualizado el índice de instrucciones del proyecto.
- **Siguiente paso:** al iniciar la implementación, crear la aplicación dentro de esta carpeta y revisar cada configuración de build/despliegue contra este límite.

### 2026-11-09 — Sesión 13: Pruebas de aceptación y alcance funcional

- **Objetivo:** preparar criterios verificables antes de programar y confirmar que no se agregarán funciones extra.
- **Decisiones:** el agente solo carga/envía formularios desde el celular; el administrador revisa y acepta desde la computadora. La sesión del agente permanece activa durante el uso normal; la autenticación inicial requiere conexión y las cargas offline se guardan en el celular hasta reconectar.
- **Hecho:** creada `05_plan_piloto/PRUEBAS_ACEPTACION.md` con escenarios para cargas online/offline, persistencia, permisos, campos vacíos, actualizaciones, baja lógica, restauración, historial y límites de costo.
- **Seminario:** reemplazada la lista antigua de pruebas de Etapa 6, que incluía funciones del alcance previo, por el alcance vigente del piloto.
- **Validación:** revisada la coherencia de los casos con los roles y el flujo confirmados. No se ejecutaron pruebas de código porque la PWA aún no existe.
- **Siguiente paso:** validar los casos cuando estén definidos el formulario del Excel y la planilla de prueba; luego ejecutarlos con datos ficticios.

### 2026-11-13 — Sesión 14: Relevamiento del Excel y definición del rubro piloto (VID)

- **Objetivo:** analizar la planilla real de la Secretaría de Producción de Tinogasta, evaluar conveniencia de Google Sheets y definir el rubro piloto junto con sus campos exactos.
- **Hecho:** se analizó la estructura interna del archivo desprotegido (`2022  REGISTRO DE PRODUCTORES TINOGASTA NV`). Se determinó que la hoja maestra es `REGISTRO` (102 columnas, >9.500 filas) y las demás pestañas (`PROD.AGRICOLA`, etc.) son tableros de resumen con fórmulas `SUMIFS`. Se confirmó la conveniencia técnica de migrar a Google Sheets para integración directa y sin costos vía Google Apps Script Webhook.
- **Decisiones:** rubro piloto seleccionado: **VID (Vitivinicultura)**, con 501 productores registrados en Tinogasta. Se relevó el mapeo exacto de columnas (A a AV), las 20 opciones de distritos, cepas de vid, riego, tenencia y factores climáticos. Se identificó la fórmula de hectáreas en la columna AH (`AG/10000`) para que la PWA la calcule de forma automática.
- **Documentación:** actualizados `DECISIONES_PENDIENTES.md`, `PENDIENTES.md` y este registro maestro de sesiones.
- **Validación:** se comprobó la correspondencia de columnas y fórmulas entre `REGISTRO` y los resúmenes automáticos.
- **Siguiente paso:** Etapa 3 del Roadmap: iniciar la construcción del frontend de la PWA (React + TypeScript + Vite + Tailwind) y validar las interfaces móviles (agente) y escritorio (oficina) con datos de prueba.

### 2026-11-13 — Sesión 15: Construcción del prototipo interactivo (Etapa 3)

- **Objetivo:** implementar la aplicación frontend con React, Vite, TypeScript y Tailwind CSS en la raíz de la Propuesta 1 para validar la experiencia de carga móvil y revisión de oficina con datos simulados.
- **Hecho:** se crearon los componentes `AgentForm` (móvil, bloques de datos, cálculo automático de hectáreas, guardado offline), `AdminReview` (escritorio, métricas, búsqueda/filtros, edición por oficina, confirmación a Sheets, baja lógica y auditoría) y `Navbar` con controles para alternar rol y estado de conexión online/offline.
- **Validación:** compilación exitosa con TypeScript (`pnpm run build`), cero errores y servidor de desarrollo activo en `http://localhost:3000`.
- **Siguiente paso:** validación de la interfaz con el usuario y avance hacia la Etapa 4 (Service Worker e IndexedDB para PWA offline).

### 2026-11-13 — Sesión 16: Implementación de IndexedDB y PWA offline (Etapa 4)

- **Objetivo:** implementar almacenamiento físico persistente con IndexedDB y configuración formal de PWA con Service Worker para modo offline-first.
- **Hecho:** se creó el servicio `src/services/db.ts` (`RegistroTinogastaDB`), se configuró `manifest.json`, íconos vectoriales SVG, `sw.js` para caché de activos estáticos y meta tags de PWA en `index.html`. Se conectó `App.tsx` para persistir físicamente cualquier carga en IndexedDB y sincronizar automáticamente al recuperar conexión.
- **Validación:** compilación de producción exitosa (`dist/` completo con activos PWA), servidor Vite en ejecución y verificación de almacenamiento persistente.
- **Siguiente paso:** Etapas 5 y 6: configurar Firebase Firestore y Auth con la cuenta dedicada del proyecto; luego Etapa 7: integración con Google Sheets mediante Apps Script.

### 2026-11-13 — Sesión 17: Integración de Cloud Firestore (Etapas 5 y 6)

- **Objetivo:** conectar la PWA con Cloud Firestore para sincronización en tiempo real entre agentes de campo y personal de oficina.
- **Hecho:** instalación de la biblioteca `firebase`, creación de `src/services/firebase.ts`, listener en tiempo real con `onSnapshot`, `.env.example`, `firestore.rules` y enlace en `App.tsx` con soporte tolerante a fallos frente a desconexión o credenciales pendientes.
- **Validación:** compilación exitosa con TypeScript (`pnpm run build`) y verificación de carga híbrida IndexedDB + Firestore.
- **Siguiente paso:** completar las credenciales en `.env.local` desde Firebase Console y avanzar a la Etapa 7 (script de Google Sheets).

### 2026-11-23 — Sesión 18: Integración y despliegue del Webhook de Google Sheets (Etapa 7)

- **Objetivo:** conectar la PWA directamente con Google Sheets a través de un Webhook de Google Apps Script, asegurando la escritura en la hoja `REGISTRO`, la preservación de fórmulas y la regla de actualización parcial de datos.
- **Hecho:** se desarrolló el script `google-apps-script/Webhook.js` con soporte para operaciones de ALTA y ACTUALIZACIÓN, mapeo de columnas A a AV, preservación de la fórmula `=AG{fila}/10000` en columna AH, y control de concurrencia con `LockService`. Se creó el servicio cliente `src/services/sheets.ts` y se conectó el botón de Confirmación en `App.tsx` para enviar el registro a Sheets y capturar el número de fila real. El usuario desplegó el Webhook en Google Apps Script y se configuró la URL en `.env.local`.
- **Validación:** prueba de conectividad en vivo mediante solicitud HTTP al Webhook desplegado, respondiendo exitosamente: `{"status":"online","servicio":"Webhook PWA Productores Tinogasta","hoja":"REGISTRO","totalFilas":10324}`. Compilación de producción con TypeScript y Vite (`pnpm run build`) completada con éxito (código de salida 0).
- **Siguiente paso:** preparar el despliegue en Netlify y la configuración final de autenticación y Cloud Firestore en el entorno cloud.

