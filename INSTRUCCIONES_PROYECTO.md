# INSTRUCCIONES DEL PROYECTO

## Propuesta: Propuesta 1 - Alta y Actualizacion Controlada

## Leer DESPUÉS de INSTRUCCIONES_GENERALES.md
Este archivo es ESPECÍFICO de esta propuesta. Contiene: enfoque, arquitectura, limitaciones, cómo conecta todo.

## Enfoque
La propuesta amplia contempla una PWA offline-first y un flujo Firebase + Google Sheets. Para el piloto, seguir el alcance vigente de abajo: un rubro, revisión antes de enviar a Sheets y una integración que se decidirá después de relevar la planilla.

## Alcance vigente del piloto
Para el producto de pasantía, seguir primero `05_plan_piloto/CONTEXTO_PROYECTO.md` y `05_plan_piloto/ROADMAP.md`: se valida un solo rubro, se diseña la interfaz antes de cerrar el modelo de datos y solo los registros revisados/confirmados se envían a Sheets. Las definiciones técnicas anteriores de varios rubros y del puente Apps Script son contexto de la propuesta amplia, no decisiones cerradas para el piloto. No crear Firebase ni desplegar antes de las etapas indicadas en el roadmap.

## Límite del repositorio
La raíz del repositorio GitHub será esta carpeta de Propuesta 1. La PWA, sus dependencias, recursos y todo archivo requerido para compilar o desplegar deben quedar dentro de ella. No depender en tiempo de ejecución de archivos de la carpeta superior ni incluir las otras propuestas. Consultar `REPOSITORIO_Y_DESPLIEGUE.md`.

## Arquitectura / Stack
Ver 01_idea_general/tecnologias.md

## Componentes / Flujos
Ver 02_componentes_detallados/

## Limitaciones conocidas
- Confirmar si el destino es una planilla existente, el Excel actual convertido a Sheets o una nueva hoja; no asumirlo antes del relevamiento.
- MVP acotado
- Offline primero para carga en campo (Prop1)

## Autocontenido
Todo necesario está dentro de esta carpeta. NO depender de rutas externas.

## Cómo conectar todo
- 01_idea_general: QUÉ
- 02_componentes_detallados: CÓMO (bycoding)
- 03_pasantia: entregables
- 04_seminario: etapas 1-8
- 05_plan_piloto: contexto vigente y orden de implementación del producto piloto
- REPOSITORIO_Y_DESPLIEGUE.md: límite y contenido permitido del repositorio
