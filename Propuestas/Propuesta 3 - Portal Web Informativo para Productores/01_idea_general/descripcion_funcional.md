# DESCRIPCIÓN FUNCIONAL DETALLADA

## Idea real
Hoy las consultas de los productores se resuelven de forma repetida por WhatsApp, papel o verbalmente.
Nuevo flujo: un **portal web público** donde el productor encuentra la información por su cuenta y, si necesita avanzar, contacta por WhatsApp con un mensaje preformateado.

Este portal no gestiona datos de productores: **orienta y deriva**. La carga real sigue siendo de la Propuesta 1.

## Escenario de uso
Un productor (o alguien que quiere inscribirse):
1. Entra al portal desde el celular.
2. Lee "¿Qué es el Registro de Productores?" y los requisitos.
3. Sigue la guía de trámites según su caso.
4. Si le queda una duda, revisa el FAQ.
5. Si necesita contactar, toca el botón de WhatsApp con el mensaje ya escrito.

Del lado del equipo: llegan menos consultas repetidas y mejor orientadas.

## Secciones del sitio
- **Inicio:** presentación del portal y accesos a las secciones principales.
- **Registro de Productores:** qué es, para qué sirve, quién puede inscribirse.
- **Requisitos:** documentos y condiciones para inscribirse.
- **Trámites:** guía paso a paso (consulta, inscripción, actualización de datos).
- **FAQ:** preguntas frecuentes con respuestas breves.
- **Contacto:** WhatsApp con mensaje preformateado + datos de la Secretaría.
- **Formulario de solicitud ligero (opcional):** datos básicos que se envían por WhatsApp o a Google Sheets.

## Requerimientos funcionales ampliados
- Botón Click-to-WhatsApp con **mensaje preformateado** según el caso (inscripción, consulta, actualización).
- Formulario ligero opcional (nombre, contacto, motivo) que no requiera backend.
- Navegación simple y siempre accesible (menú móvil).
- Contenido pensado para lectura rápida en celular (párrafos cortos, íconos, listas).
- Posibilidad de actualizar textos fácilmente.

## Enfoque informativo (no ABM)
- No hay login de productores ni edición de datos en el portal.
- No hay base de datos propia de productores.
- Todo derivación: WhatsApp para contacto; formulario a Sheets si se habilita.

## MVP vs post-MVP
**MVP:** secciones informativas + FAQ + WhatsApp + formulario ligero opcional + responsive + publicación online.

**Post-MVP:** integración como portal central de los módulos 1 y 2, buscador de contenido, panel para editar textos sin tocar código, versión multiidioma (si hiciera falta), analítica de visitas.

## Notas
- Todo el contenido debe validarse con la Secretaría (requisitos y pasos reales de trámite).
- Mantener coherencia de marca con las Propuestas 1 y 2 (logo, colores, tono).
