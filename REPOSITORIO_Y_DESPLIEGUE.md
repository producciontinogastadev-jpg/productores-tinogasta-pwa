# Límite del repositorio y despliegue

## Raíz de GitHub

La carpeta `Propuesta 1 - Alta y Actualizacion Controlada/` será la raíz del repositorio de GitHub. Se subirá únicamente su contenido; no se subirá la carpeta superior `pasantia 2/` ni las otras propuestas.

## Qué debe permanecer dentro de esta carpeta

- Todo el código fuente de la PWA.
- Archivos de configuración y dependencias requeridos para instalar, probar y compilarla.
- Recursos que utilice la aplicación.
- Configuración y archivos necesarios para desplegarla en Netlify, cuando se llegue a esa etapa.
- Documentación activa del piloto, la bitácora de Pasantía y las etapas de Seminario que correspondan.

Mantener la aplicación y sus archivos de despliegue en esta carpeta o en subcarpetas suyas. No crear dependencias de ejecución hacia archivos ubicados en la carpeta superior.

## Qué queda fuera del repositorio

- Documentos generales de la pasantía que están en la raíz del workspace, como instrucciones globales y pendientes.
- Carpetas de las Propuestas 2 y 3 y otros antecedentes.
- Herramientas, informes y materiales que no sean necesarios para desarrollar, probar o desplegar este piloto.
- Credenciales, claves privadas, tokens, códigos de recuperación y datos personales reales.

Los archivos de la carpeta superior pueden seguir usándose como contexto durante el trabajo local, pero no deben ser necesarios para instalar, compilar o desplegar la PWA.

## Reglas para herramientas de desarrollo

- Antes de crear o mover configuración de GitHub Actions, instrucciones, skills o archivos de despliegue, comprobar que el archivo quede dentro de esta raíz de repositorio y que sea realmente necesario.
- Las instrucciones del workspace que viven en la carpeta superior ayudan durante el trabajo local; no se asume que estarán en GitHub. La guía esencial del producto debe mantenerse también en los documentos de esta carpeta.
- Mantener fuera del repositorio los secretos locales mediante variables de entorno y las exclusiones apropiadas. Un archivo de ejemplo puede documentar nombres de variables sin incluir valores reales.
- No crear ni publicar el repositorio ni desplegar el sitio antes de que el producto esté implementado y probado, según `05_plan_piloto/ROADMAP.md`.
