# Plan de trabajo vigente - Propuesta 1, Pasantía y Seminario

## Objetivo
Desarrollar únicamente la Propuesta 1: un piloto PWA para digitalizar el registro de un rubro que actualmente se gestiona en Excel. Los campos y reglas se relevarán de esa planilla y del proceso observado. Las Propuestas 2 y 3 se conservan como antecedentes, pero quedan fuera del alcance.

## Principio clave
Mantener el contexto vigente del piloto en `Propuestas/Propuesta 1 - Alta y Actualizacion Controlada/05_plan_piloto/`. No extraer requisitos de diagnósticos, propuestas anteriores ni de las carpetas de Propuestas 2 y 3.

## Entregas y trabajo en paralelo
- **Pasantía:** la única entrega activa es la bitácora, guardada en `03_pasantia/bitacora/`.
- **Seminario:** desarrollar y actualizar la documentación etapa por etapa en `04_seminario/`, en paralelo con el proyecto.
- En cada sesión de implementación, registrar el avance real en la bitácora y actualizar la etapa de Seminario que corresponda. No inventar resultados ni marcar una etapa como terminada sin revisar sus requisitos.
- Seguir el procedimiento repetible en `.github/skills/seguimiento-pasantia-seminario/SKILL.md`.

## Reglas importantes
- Alcance activo: Propuesta 1, inicialmente un solo rubro.
- Relevar campos y reglas del Excel; no asumir que es Google Sheets ni decidir integración antes de revisar el archivo.
- Diseñar y validar la interfaz con datos ficticios antes de crear Firebase.
- Los registros solo se envían a la planilla después de revisión y confirmación.
- Nunca incluir credenciales, secretos o datos personales en documentos o bitácora.

## Stack tecnológico acordado
- React + TypeScript + Vite
- Tailwind CSS
- Firebase (Auth, Firestore, Storage según necesidad)
- Despliegue del piloto: Netlify, solo después de implementar y probar la web
- Propuesta 1: Firebase como etapa intermedia; enviar a Sheets solo registros confirmados. Elegir Apps Script u otra integración segura tras revisar la planilla.

## Flujo previsto para el piloto
- La PWA guarda registros sin conexión y los sincroniza con Firebase al recuperar conectividad.
- Los registros permanecen pendientes hasta ser revisados y confirmados; luego se envían a la planilla de destino.
- Definir el esquema de Firebase después de relevar el rubro y elegir la integración con la planilla después de revisar el Excel.
