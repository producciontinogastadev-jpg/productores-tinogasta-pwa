# INSTITUTO DE ESTUDIOS SUPERIORES DE TINOGASTA

## TRABAJO PRÁCTICO 4: Formulación y Análisis de Propuestas Técnicas

- **Carrera:** Tecnicatura en Desarrollo de Software
- **Unidad Curricular:** Pasantía
- **Formato:** Práctica profesionalizante
- **Modalidad de cursado:** Presencial con instancias en campo laboral
- **Curso:** 3° — **Régimen de cursado:** Anual
- **Profesora:** Lic. Eugenia Roger
- **Periodo lectivo:** 2026

---

# GUÍA DE TRABAJO — FORMULACIÓN Y ANÁLISIS DE PROPUESTAS TÉCNICAS

**Duración:** 1 semana (8 horas estimadas)
**Docente responsable:** Lic. Eugenia Roger
**Fecha de entrega:** ____

## Objetivos de la etapa

1. Proponer tres posibles soluciones técnicas a problemáticas detectadas en el diagnóstico institucional.
2. Evaluar la viabilidad de cada propuesta (en términos técnicos, institucionales y de recursos).
3. Identificar qué saberes, habilidades o herramientas les faltan para poder concretarlas.
4. Seleccionar una de las propuestas como Proyecto Final de Pasantía, justificando la elección.

---

## Momento 1 — Recuperar el diagnóstico

**Objetivo:** Reconstruir lo esencial de lo observado.

El diagnóstico se realizó sobre la **Secretaría de Producción de la Municipalidad Autónoma de Tinogasta**, en la Dirección de Proyectos y Alianzas (donde se desarrolla la pasantía, a cargo del tutor Walter Quiroga). La Secretaría concentra siete proyectos de desarrollo productivo y su gestión de la información se apoya casi por completo en registros manuales.

### Problemas recurrentes o ineficiencias detectadas

**Problemática 1 — El dato de campo se registra dos veces y no existe un cierre de jornada que lo consolide.**
El dato se anota a mano en un cuaderno y luego se transcribe a una planilla. No hay un estado único de la información ni un resumen conjunto al cierre del día.

**Problemática 2 — Concentración de la validación de datos y de las aprobaciones en pocas personas.**
Cinco de los siete proyectos declaran al mismo responsable técnico; a ese cargo se suman la validación de datos, la firma de cronogramas y la actualización del Registro. Si esa persona se ausenta, la información queda congelada.

**Problemática 3 — Fragmentación de la información entre proyectos y rubros, sin fuente única de verdad.**
Cada proyecto lleva su propia planilla y carpeta en Drive. El Registro de Productores (fuente oficial) no está vinculado a los lotes ni a los trabajos de campo, por lo que no pueden hacerse análisis que crucen proyectos.

**Enunciado del problema tecnológico:**
> La Secretaría de Producción no dispone de un mecanismo único, trazable y disponible en el punto de captura para registrar los datos de campo de sus siete proyectos, por lo que la información se produce en papel, se duplica al transcribirla, se fragmenta en planillas paralelas y se pierde o queda desactualizada sin que exista un proceso de consolidación que lo detecte.

### Necesidades de automatización, comunicación o gestión de datos

- **Eliminar la doble carga:** el dato debe registrarse una sola vez, en el punto donde se genera (el lote).
- **Cierre de jornada consolidado:** un estado único de la información por rubro y responsable, generado automáticamente.
- **Un canal de comunicación registrable:** hoy todo pasa por WhatsApp y no queda registro de consultas ni avisos.
- **Trazabilidad:** saber quién cargó cada dato, cuándo y con qué autoridad, para respaldar decisiones.
- **Fuente única de verdad:** unificar criterios de nomenclatura entre proyectos (mismo cultivo, mismo nombre).
- **Reducir consultas repetidas:** canal unificado de orientación al productor para descargar al equipo.

### Procesos que podrían mejorarse con herramientas digitales

1. **Registro de datos de campo** (cuaderno → planilla): candidato central a digitalización en el punto de captura.
2. **Carga del Registro de Productores:** hoy una sola computadora y transcripción manual; candidata a formulario digital.
3. **Planificación de visitas a campo:** hoy sin vista geográfica; candidata a mapa interactivo.
4. **Orientación al productor:** hoy por WhatsApp/papel/verbal; candidata a portal informativo.
5. **Seguimiento presupuestario y de proyectos:** hoy por planillas aisladas; candidato a vista consolidada.

### Áreas donde la tecnología podría facilitar tareas rutinarias

- La **transcripción diaria** cuaderno-planilla (unos 20 minutos por persona por día).
- La **verificación en campo** de lo que el productor declaró en el formulario (control de calidad de datos).
- El **armado de rutas de visita**, hoy por memoria y sin criterio de cercanía.
- La **búsqueda de productores** por rubro, localidad o proyecto, hoy dispersa en planillas.
- La **respuesta a consultas repetidas** de trámites y requisitos.

---

## Momento 2 — Proponer tres ideas técnicas

**Objetivo:** Generar opciones concretas y diversas de intervención.

### Propuesta 1

| Campo | Contenido |
|---|---|
| **N°** | 1 |
| **Título de la Propuesta** | Registro de campo unificado con cierre de jornada |
| **Descripción breve** (qué haría, para quién, con qué recursos) | Aplicación web (PWA) con formularios por rubro para capturar el dato en el lugar donde se genera, incluso sin conexión; persistencia en Firebase Firestore con historial de cambios y control de acceso por usuario; cierre de jornada automático por rubro y responsable; lectura del estado consolidado en el Google Sheets existente, ampliado con los campos lote, tarea, fecha y responsable, sin crear una planilla paralela. Recursos: React + TypeScript + Vite, Tailwind, Firebase (Firestore gratis), Google Apps Script como puente hacia Sheets. |
| **Problema que resuelve** | Problemática 1 de forma directa (doble registro y falta de consolidación); Problemática 3 al sustentar todo en una base única; Problemática 2 de forma mitigada, mediante cuentas individuales y trazabilidad. |
| **Área o sector** | Dirección de Proyectos y Alianzas — gestión de la información de los proyectos de producción de la Secretaría. |
| **Beneficiarios** | Personal administrativo y de campo de la Secretaría; referentes de proyectos; posteriormente los productores, con datos más confiables y actualizados. |

### Propuesta 2

| Campo | Contenido |
|---|---|
| **N°** | 2 |
| **Título de la Propuesta** | Mapa de productores y planificador de visitas |
| **Descripción breve** (qué haría, para quién, con qué recursos) | Módulo de geolocalización sobre el Registro de Productores existente: mapa interactivo (OpenStreetMap/Leaflet) con marcadores por productor, filtros por rubro y proyecto, estado de visita (pendiente, visitado, actualizado) y listado por cercanía para armar rutas. Las coordenadas se completan de forma incremental durante las visitas reales. Recursos: React + TypeScript + Vite, Tailwind, Leaflet + OpenStreetMap (sin claves ni costo), lectura del Registro vía Sheets/Apps Script. |
| **Problema que resuelve** | La imposibilidad actual de visualizar la distribución geográfica de los productores y de planificar las salidas al campo; complementa la Problemática 3 al ofrecer una vista única y ordenada sobre la información del Registro. |
| **Área o sector** | Misma dirección; uso interno del equipo de la Secretaría y de la Municipalidad. |
| **Beneficiarios** | El equipo que realiza visitas de campo y la planificación institucional de relevamientos. |

### Propuesta 3

| Campo | Contenido |
|---|---|
| **N°** | 3 |
| **Título de la Propuesta** | Portal web informativo para productores |
| **Descripción breve** (qué haría, para quién, con qué recursos) | Sitio estático responsive (mobile-first) con información sobre el Registro de Productores, requisitos de inscripción, guía de trámites, preguntas frecuentes y contacto directo por WhatsApp con mensaje preformateado. Recursos: Astro + Vite + TypeScript (o React + Vite), Tailwind, contenido en archivos, despliegue gratuito en Netlify/Vercel. Sin login ni base de datos propia. |
| **Problema que resuelve** | Las consultas repetidas de los productores por WhatsApp, papel o vía verbal, que consumen tiempo del equipo y no dejan un canal unificado de orientación. No aborda directamente las tres problemáticas tecnológicas del informe: interviene sobre la comunicación con el productor. |
| **Área o sector** | Atención al productor y extensión agraria. |
| **Beneficiarios** | Productores inscriptos y potenciales; el equipo de la Secretaría, que reduce consultas repetidas. |

> **Nota de coherencia:** las tres propuestas son módulos de un **mismo sistema integral** de gestión de la información (captura → organización territorial → comunicación). Aun así, cada una puede implementarse de forma aislada, y la pasantía solo desarrollará **una** de ellas como MVP.

---

## Momento 3 — Evaluar la viabilidad de cada propuesta

**Objetivo:** Analizar qué tan posible es concretar cada idea.

Calificación en **Alta / Media / Baja** para viabilidad técnica, institucional y de recursos.

### Matriz de Viabilidad

| Propuesta | Viabilidad Técnica | Viabilidad Institucional | Viabilidad de Recursos | Justificación |
|---|---|---|---|---|
| Propuesta 1 | Alta | Media | Alta | Se apoya en herramientas ya conocidas (Google Sheets) y en servicios gratuitos suficientes para el volumen actual. Requiere cambio de hábitos y definición de roles previos, que son decisiones institucionales, no técnicas. |
| Propuesta 2 | Alta | Alta | Alta | Lee el Registro existente sin duplicar datos; no genera costos (OpenStreetMap); responde a una necesidad sentida del equipo (planificar visitas). |
| Propuesta 3 | Alta | Alta | Alta | Sitio estático sin backend ni base de datos; aporta valor inmediato al productor; por sí sola no resuelve las problemáticas internas del registro de datos. |

### Orientaciones para el análisis

- **Viabilidad técnica:** ¿Poseen los conocimientos y herramientas necesarias para desarrollarla? ¿Existen modelos similares?
- **Viabilidad institucional:** ¿La propuesta respeta la estructura, cultura y dinámica de la institución? ¿Hay interés o resistencia?
- **Viabilidad de recursos:** ¿Requiere equipamiento, licencias o tiempo fuera del alcance del grupo?

**Desarrollo del análisis:**

- **Técnica (Alta en las tres):** el stack acordado (React + TypeScript + Vite + Tailwind + Firebase) y las librerías de mapas o sitios estáticos son de uso extendido y cuentan con abundante documentación y modelos similares. No se requiere infraestructura especial.
- **Institucional (Media en P1, Alta en P2 y P3):** la Propuesta 1 implica cambiar el proceso cotidiano de carga y definir roles/permisos por escrito; eso exige una decisión de la Secretaría, y ya existe evidencia de resistencia al cambio. Las Propuestas 2 y 3 se suman a prácticas existentes (visitas de campo y uso de WhatsApp) sin alterar el proceso de carga, por lo que generan menos fricción.
- **De recursos (Alta en las tres):** las tres pueden desarrollarse con servicios gratuitos (Firebase Spark, OpenStreetMap, Netlify/Vercel) y con el equipamiento ya disponible. El único costo es tiempo del pasante y del tutor. El riesgo a monitorear es el límite de 1 GB del plan gratuito de Firestore en la Propuesta 1.

---

## Momento 4 — Identificación de saberes y recursos faltantes

**Objetivo:** Fomentar la autoconciencia profesional y la planificación de aprendizaje.

### Tabla de autoevaluación de saberes

| Área de conocimiento | Conocimientos actuales del alumno | Conocimientos que faltan / se deben reforzar | Estrategias para adquirirlos (clases, tutoriales, tutoría, práctica) |
|---|---|---|---|
| Frontend (React + TypeScript + Vite) | Componentes, props, estado y hooks básicos; tipado con TypeScript. | Patrones avanzados (contextos, composición), organización de un proyecto real y buenas prácticas de accesibilidad. | Práctica guiada con el tutor, documentación oficial de React/TS, tutoriales y desarrollo del propio proyecto. |
| Estilos (Tailwind CSS) | Uso de clases utilitarias y layout responsive básico. | Diseño mobile-first sistemático, temas (modo claro/oscuro) y componentes reutilizables. | Documentación de Tailwind, replicar mockups propios, revisión del diseño junto al tutor. |
| Backend como servicio (Firebase) | Nociones de Auth y Firestore; conceptos de base NoSQL. | Reglas de seguridad, modelo de datos normalizado, modo offline y cuotas del plan gratuito. | Documentación de Firebase, tutoriales específicos y una prueba piloto con datos reales de ejemplo. |
| Persistencia offline (PWA / IndexedDB) | Concepto de PWA y service worker a nivel teórico. | Implementación real de cola de sincronización, manejo de conflictos y caché. | Tutoriales de PWA, ejemplos de IndexedDB y una prueba en el lugar con conexión inestable. |
| Mapas (Leaflet / OpenStreetMap) | Conocimiento básico de mapas web y marcadores por concepto. | Clusters, capas, geocodificación y cálculo de distancias (haversine). | Documentación de React-Leaflet, ejemplos y experimentación con datos ficticios de Tinogasta. |
| Google Apps Script / Sheets como puente | Uso de Google Sheets como usuario; nociones de fórmulas. | Uso como API (doGet/doPost), publicación como Web App y manejo de permisos. | Tutoriales de Apps Script, ejemplos de Web App y prueba de lectura/escritura sobre una planilla de prueba. |
| Metodología (Scrum) y gestión del proyecto | Conceptos de Scrum y roles; elaboración de backlog. | Planificación de sprints individuales, estimación y documentación de avance (bitácora). | Clases de la unidad curricular, plantilla de bitácora y práctica con el propio proyecto. |
| Documentación técnica y comunicación escrita | Redacción de informes y uso de Markdown. | Documentar decisiones técnicas de forma clara y mantener el material autocontenido. | Plantillas propias de la propuesta, revisión con la profesora y relectura antes de cada entrega. |

---

## Momento 5 — Selección y desarrollo preliminar

**Objetivo:** Elegir una sola propuesta para desarrollar durante la siguiente fase (planificación e implementación).

### Criterios de elección

- [x] Es factible de desarrollar en 8–10 semanas.
- [x] Impacta positivamente en la institución.
- [x] Puede probarse o implementarse parcialmente (MVP).
- [x] Permite aplicar y ampliar los saberes de la carrera.

### Ficha de Propuesta Técnica Seleccionada

| Campo | Contenido |
|---|---|
| **Campo** | Gestión de la información — registro de datos de campo. |
| **Nombre del proyecto** | Registro de campo unificado con cierre de jornada (Propuesta 1). |
| **Problema que aborda** | Problemática 1 (doble registro y falta de consolidación), con aporte a la Problemática 3 (fragmentación) y mitigación de la Problemática 2 mediante cuentas individuales y trazabilidad. |
| **Objetivo general** | Permitir que los datos de campo se registren una sola vez, en el lugar donde se generan, y que consoliden automáticamente en un estado único de la organización, sin depender de una persona determinada para volcar, validar o recuperar información. |
| **Beneficiarios directos** | El personal administrativo y de campo de la Dirección de Proyectos y Alianzas, los referentes de proyecto y, de forma indirecta, los productores que reciben servicios sobre datos más confiables. |
| **Alcance (qué incluye y qué no)** | **Incluye:** formularios por rubro con los 24 campos relevados, captura en el lote y sin conexión, persistencia con historial y control de acceso, cierre de jornada por rubro y responsable, y lectura del estado consolidado en el Google Sheets existente (ampliado). **No incluye:** reemplazar el Registro de Productores (lo extiende), resolver la dependencia de pocas personas, suplir la falta de procedimientos escritos, ni cubrir los proyectos sin responsable declarado. |
| **Tecnologías a utilizar** | React + TypeScript + Vite; Tailwind CSS; Firebase (Auth y Firestore); Google Apps Script como puente de lectura/escritura hacia Google Sheets; despliegue en Vercel/Netlify. |
| **Saberes que necesitan reforzar** | Persistencia offline (IndexedDB/cola de sync), reglas de seguridad de Firestore, uso de Google Apps Script como Web App y patrones de frontend avanzados. |
| **Recursos requeridos** | Plan gratuito de Firebase (Spark), Google Sheets ya existente, cuenta de Google del municipio, equipamiento ya disponible y el tiempo del pasante con acompañamiento del tutor. |
| **Tutor institucional / referente** | Walter Quiroga (Dirección de Proyectos y Alianzas, responsable del Registro de Productores). |
| **Justificación de la elección** | Es la propuesta que ataca de forma directa el problema tecnológico central del diagnóstico (la doble carga y la ausencia de consolidación), es la más demandada por el propio personal («que las cosas se anoten una sola vez y que pueda verlas sin preguntar») y permite un MVP claro y verificable. Aunque su viabilidad institucional es Media por exigir un cambio de hábito, es la de mayor impacto sobre las problemáticas detectadas. Se implementará como **una parte funcional simple (MVP)** dentro de la visión de sistema integral, dejando preparada la arquitectura para integrar luego las Propuestas 2 y 3. |

---

## Reflexión final a incorporar en el informe

> "Un técnico reflexivo no solo desarrolla software, sino que diagnostica, evalúa y aprende en cada proyecto. La viabilidad de una idea no depende solo del código, sino de las personas, los contextos y las capacidades de quienes la ejecutan."

El proceso de este trabajo confirma esa idea. La propuesta técnicamente más sencilla no es necesariamente la más valiosa: las tres propuestas son técnicamente viables, pero se diferencian por su impacto y por la resistencia institucional que generan. Elegir la Propuesta 1 implica asumir que su éxito no depende solo del código, sino de que la Secretaría defina responsables, permisos y procedimientos de uso. También implicó reconocer honestamente lo que el software **no** puede resolver: la concentración de responsabilidades (Problemática 2) es de naturaleza organizacional y ninguna aplicación la corrige por sí sola. Encarar un MVP acotado y bien hecho —en lugar de prometer una solución total— es la decisión profesionalmente más responsable.

---

## Bibliografía sugerida

- Pacienzia, J. (2015). *Metodologías de desarrollo de software*. Universidad Católica Argentina.
- Pressman, R. S. (2010). *Ingeniería del Software. Un enfoque práctico*. McGraw-Hill.
- Mena Méndez, D. (2019). *La cultura organizacional, elementos generales, mediaciones e impacto en el desarrollo integral de las instituciones*.
- UNAM — Escuela Nacional de Trabajo Social. (s.f.). *Análisis Institucional*.
- Sommerville, I. (2011). *Ingeniería del Software*. Pearson Educación.
- Chiavenato, I. (2006). *Introducción a la teoría general de la administración* (7.ª ed.). McGraw-Hill.
- Kendall, K. E., & Kendall, J. E. (2011). *Análisis y diseño de sistemas* (8.ª ed.). Pearson Educación.
- Laudon, K. C., & Laudon, J. P. (2016). *Sistemas de información gerencial* (14.ª ed.). Pearson Educación.
- Material de cátedra. (s.f.). *Las organizaciones, sus características y tipos*. Tecnicatura en Desarrollo de Software.

---

## Evaluación de esta etapa — Criterios

- **Pertinencia de las propuestas:** Las ideas responden a necesidades reales de la institución.
- **Análisis de viabilidad:** Evaluación clara, argumentada y realista.
- **Autoevaluación de saberes:** Identificación de brechas formativas y estrategias de aprendizaje.
- **Comunicación escrita y presentación:** Claridad, ortografía, estructura formal.
- **Justificación de la propuesta elegida:** Fundamentación sólida y coherente.
