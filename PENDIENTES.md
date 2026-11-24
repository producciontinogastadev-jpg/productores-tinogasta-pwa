# LISTADO DE PENDIENTES

ESTADO: [PENDIENTE | EN_PROCESO | HECHO | CANCELADO | REVISION]
NO BORRAR NADA. Solo actualizar estado y notas.

## Propiedad
- Creado: 2026-10-14
- Propósito: controlar qué falta hacer, qué aceptado, documentado o pendiente. No eliminar ítems.
- Enfoque vigente (2026-11-09): solo desarrollar Propuesta 1. Propuestas 2 y 3 quedan como antecedentes; para Pasantía mantener la bitácora y para Seminario entregar por etapas.

## PENDIENTES GLOBALES
- [HECHO] Aclarar alcance único de Propuesta 1 y crear instrucciones/skill para actualizar bitácora y Seminario en paralelo (2026-11-09)
- [HECHO] Crear registro maestro de sesiones y establecer su actualización obligatoria al cierre de cada sesión (2026-11-09)
- [HECHO] Crear checklist de preparación antes del desarrollo y vincularla al roadmap y Seminario (2026-11-09)
- [HECHO] Preparar pruebas de aceptación del MVP para agente, administrador, uso offline, sincronización y correcciones (2026-11-09); la ejecución queda pendiente de la implementación
- [HECHO] Crear contexto y roadmap para el piloto de Propuesta 1 (un rubro, interfaz antes de Firebase, revisión antes de Sheets) (2026-11-09)
- [HECHO] Relevar el rubro piloto (VID), los campos, las reglas de carga/revisión y las columnas de la planilla a partir del archivo real de la Secretaría (Propuesta 1) (2026-11-13)
- [HECHO] Definir que en actualizaciones un campo vacío conserva el valor anterior, que borrar requiere acción explícita y que cambios posteriores se reflejan en la planilla (2026-11-09)
- [HECHO] Definir eliminación lógica, acceso/restauración por un único usuario administrativo y registro de quién realiza cambios (2026-11-09)
- [HECHO] Definir que el agente solo carga/envía y que el administrador revisa/acepta (2026-11-09); falta implementar y verificar permisos
- [CANCELADO] Guardar valores anteriores/nuevos en el historial del MVP; mejora opcional posterior a la pasantía (2026-11-09)
- [HECHO] Completar DECISIONES_PENDIENTES.md con los campos de VID, hoja REGISTRO en Sheets y reglas observadas (2026-11-13)
- [HECHO] Construir la interfaz del piloto (React + TypeScript + Vite + Tailwind) con datos ficticios para validar vistas de Agente (móvil) y Oficina (escritorio) antes de conectar Firebase (2026-11-13)
- [HECHO] Implementar persistencia local con IndexedDB y configuración de PWA instalable con Service Worker para modo offline-first real (2026-11-13)
- [HECHO] Implementar arquitectura de sincronización en tiempo real con Cloud Firestore (src/services/firebase.ts, reglas de seguridad y variables de entorno) (Etapas 5 y 6) (2026-11-13)
- [EN_PROCESO] Configurar proyecto en Firebase Console con la cuenta de Google dedicada del proyecto (2026-11-13)
- [HECHO] Validar la interfaz del piloto y la persistencia local en ejecución con el usuario (2026-11-23)
- [HECHO] Conectar Webhook de Google Apps Script para inserción y actualización real en Google Sheets (Etapa 7) (Propuesta 1) - Webhook desplegado, verificado en vivo con la hoja REGISTRO (10.324 filas) y servicio src/services/sheets.ts integrado (2026-11-23).
- [PENDIENTE] Ejecutar y aprobar las pruebas de aceptación cuando exista el formulario, la PWA y el destino de prueba (Propuesta 1)
- [HECHO] Configurar Netlify con despliegue continuo desde GitHub, variables de entorno y PWA online activa en https://productores-tinogasta-pwa-xry3.netlify.app/ (2026-11-23)
- [HECHO] Propuesta 2 (Mapa y Planificador de Visitas): 01_idea_general + 02_componentes_detallados + 03_pasantia + 04_seminario completos (2026-10-20)
- [HECHO] Propuesta 3 (Portal Web Informativo): 01_idea_general + 02_componentes_detallados + 03_pasantia + 04_seminario completos (2026-10-20)
- [CANCELADO] Reemplazar placeholders de campo (diagnóstico/entrevistas reales): se decidió NO realizar entrevistas; el TP3 quedó cerrado y entregado con enfoque de observación + análisis documental (2026-10-20)
- [PENDIENTE] Preparar los artefactos visuales que requiera la etapa de Seminario del piloto; definirlos al revisar sus criterios
- [HECHO] Definir formulario del rubro piloto tras el relevamiento (VID: identificación, tenencia, cultivo, riego, factores climáticos y daño) (2026-11-13)
- [HECHO] Definir mapeo de campos a la planilla de destino del rubro piloto (hoja REGISTRO, columnas A a AV, cálculo automático en col AH) (2026-11-13)
- [HECHO] Elegir y especificar la integración segura con Google Sheets (Google Apps Script Webhook sin costo adicional en el ecosistema Google) (2026-11-13)
- [HECHO] Definir que se convierte la planilla actual a Google Sheets en Drive de la cuenta de pasantía y la hoja destino es REGISTRO (2026-11-13)
- [HECHO] Completar ETAPAS 4-8 con detalle (Prop1) (2026-10-20)
- [EN_PROCESO] Mantener la bitácora formal y REGISTRO_SESIONES.md actualizados al cierre de cada sesión del proyecto
- [PENDIENTE] Actualizar y entregar las etapas de Seminario en el orden establecido, junto con el avance del piloto
- [PENDIENTE] **Push final code to GitHub** y habilitar despliegue automático en Netlify (incluye .env.local con VITE_SHEETS_URL)
- [CANCELADO] Seleccionar paleta y logo institucional como requisito previo del piloto (no necesario para el flujo mínimo)
- [CANCELADO] Preparar capturas promocionales (fuera de las entregas activas actuales)
- [CANCELADO] Redactar sección Información importante y FAQ (fuera del alcance mínimo actual)
- [CANCELADO] Mantener opción Ubicaciones de productores deshabilitada (funcionalidad de alcance previo)
- [CANCELADO] Implementar ABM de usuarios y auditoría de su gestión (post-pasantía, fuera del alcance activo)

## HECHOS
- [HECHO] Estructura base 4 bloques creada
- [HECHO] Autocontención implementada
- [HECHO] Enfoque híbrido Firebase+Sheets documentado (Prop1)
- [HECHO] PWA offline-first documentado (Prop1)
- [HECHO] Instrucciones generales/proyecto creadas
- [HECHO] Auth Firebase Email+Pass + seguridad documentada
- [HECHO] UI/Layout completo (Prop1)
- [HECHO] Diseño visual + capturas preparados (Prop1 base)
- [HECHO] Prop2 adaptada (estructura + mapa + filtros + cercanía + estados)
- [HECHO] Prop3 adaptada (estructura mínima autocontenida)
- [HECHO] Informe TP3 corregido según devolución (FODA, refs unificadas, 3 propuestas + matriz, ajuste frase) → Informe_TP3_..._CORREGIDO.docx (2026-10-20)
- [HECHO] Estructura TP4 creada en TP4_Formulacion_Analisis_Propuestas.md (2026-10-20)
- [HECHO] 01_idea_general Propuesta 2 completada y equilibrada (2026-10-20)
- [HECHO] 01_idea_general Propuesta 3 completada y equilibrada (2026-10-20)
- [HECHO] VISION_SISTEMA.md creado en las 3 propuestas: 3 propuestas = 1 sistema integral; pasantía entrega solo un MVP bien implementado (2026-10-20)
- [HECHO] 02_componentes_detallados Propuesta 2 completado (README, tipos, servicios, flujos, hooks + 7 specs de componente) (2026-10-20)
- [HECHO] 02_componentes_detallados Propuesta 3 completado (README, tipos, servicios, flujos, hooks + 9 specs de componente) (2026-10-20)
- [HECHO] 03_pasantia Propuesta 2 completado (README, bitácora, manual, informe final, evidencias, propuestas + tecnologias y diagnostico) (2026-10-20)
- [HECHO] 04_seminario Propuesta 2 completado (etapas 1-8 adaptadas) (2026-10-20)
- [HECHO] 03_pasantia Propuesta 3 completado (README, bitácora, manual, informe final, evidencias, propuestas + tecnologias y diagnostico) (2026-10-20)
- [HECHO] 04_seminario Propuesta 3 completado (etapas 1-8 adaptadas) (2026-10-20)
- [HECHO] TP4 rellenado por completo (Momentos 1-5 + reflexión + bibliografía) con el diagnóstico real y las 3 propuestas (2026-10-20)
- [HECHO] Carpeta herramientas/ creada: motor de estilo (estilo.py), plantilla de cátedra (plantilla_catedra.docx), conversor md→docx (md_a_docx.py) y README. PDF vía Pandoc+Typst (2026-10-20)
- [HECHO] Agregado docx_a_pdf.py: DOCX → PDF con Word (docx2pdf), maquetación exacta. Flujo MD→DOCX→PDF probado (2026-10-20)
- [HECHO] Propuesta 1 nivelada con P2/P3: ETAPAS 1, 2, 4 completadas; ETAPAS 5-8 (pruebas, mantenimiento, documentación) rellenadas (2026-10-20)
- [HECHO] Diagnóstico de las 3 propuestas (03_pasantia/diagnostico) reescrito con enfoque observación + análisis documental: sin entrevistas, sin marcas [PENDIENTE]/[CORREGIR], sin códigos R1/R2/R3 (2026-10-20)
- [NOTA] El informe TP3 entregado (Informe_TP3_..._CORREGIDO.docx) NO se tocó: quedó cerrado y aceptado. Los cambios de diagnóstico se aplicaron solo a las copias dentro de cada propuesta (2026-10-20)
