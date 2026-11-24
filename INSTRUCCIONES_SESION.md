# INSTRUCCIONES PARA PRÓXIMAS SESIONES

## Lectura obligatoria al inicio
Leer `INSTRUCCIONES_GENERALES.md`, `PENDIENTES.md`, este archivo y la documentación de la Propuesta 1 indicada allí. No preguntar con cuál propuesta trabajar: solo la Propuesta 1 está activa.

## Objetivo permanente
Desarrollar únicamente el piloto de la Propuesta 1: digitalizar el flujo de un rubro a partir de la información observada en Excel. Los documentos de las Propuestas 2 y 3 quedan fuera de alcance y no deben guiar el desarrollo.

## Regla de oro
- Tomar los campos y reglas concretas del Excel y del relevamiento, no de documentos de diagnóstico o de las otras propuestas.
- No inventar estructura de datos antes de observar la planilla y validar el formulario.
- Registrar cada sesión de trabajo del proyecto en `03_pasantia/bitacora/`.
- Actualizar en paralelo la etapa correspondiente de `04_seminario/` con el avance real y sus evidencias, sin declarar una etapa entregada hasta revisar sus requisitos.
- No documentar contraseñas, códigos de recuperación, claves privadas ni datos personales de productores.

## Entregables vigentes

- **Pasantía:** mantener solo la bitácora como entrega activa, según lo indicado por el usuario. No producir diagnóstico, propuestas, manual, informe final ni evidencias adicionales salvo que se soliciten expresamente.
- **Seminario:** desarrollar y actualizar la documentación etapa por etapa, en paralelo con el producto. Consultar los criterios de la documentación de la etapa antes de editarla.

## Orden vigente del piloto
Seguir `Propuestas/Propuesta 1 - Alta y Actualizacion Controlada/05_plan_piloto/ROADMAP.md`. En especial: relevar Excel/rubro, diseñar la interfaz con datos ficticios y validar el formulario antes de crear Firebase; desplegar solo cuando la web esté terminada y probada.

## Stack tecnológico acordado
- React + TypeScript + Vite
- Tailwind CSS
- Firebase (Auth, Firestore, Storage según necesidad)
- Despliegue del piloto: Netlify, después de implementar y probar la web
- Propuesta 1: el piloto usa Firebase como etapa intermedia y envía a Sheets solo registros revisados y confirmados; confirmar cómo se utilizará el Excel/planilla y elegir la integración segura tras el relevamiento.

## Enfoque híbrido (Propuesta 1)
- PWA con guardado local sin conexión → Firebase al recuperar conexión → revisión y confirmación → Google Sheets
- Definir el esquema de Firebase después de conocer los campos; decidir integración y preservación de fórmulas después de revisar la planilla

## UI de Propuesta 1
Priorizar inicio de sesión, formulario del rubro, revisión/confirmación y estado de sincronización. Agregar otros elementos solo si son necesarios para cumplir el flujo mínimo.
