# ETAPA 2 - METODOLOGÍA

## Metodología de trabajo

Se trabajará de forma iterativa e incremental, con ciclos individuales de planificación, implementación, revisión y documentación. Se prioriza validar cada parte del piloto antes de avanzar a la siguiente. La persona en pasantía asume las tareas de planificación, desarrollo y seguimiento; el usuario del sistema y el tutor aportan validación funcional según disponibilidad.

## Iteraciones del piloto

1. **Relevamiento:** observar el flujo de un rubro en el Excel y registrar campos, reglas, revisión y destino.
2. **Prototipo visual:** implementar el recorrido de pantalla con datos ficticios y validar el formulario antes de decidir el modelo de base de datos.
3. **Modo sin conexión:** implementar y probar el guardado local y el estado de sincronización.
4. **Persistencia y autenticación:** definir el esquema aprobado e integrar Firebase.
5. **Revisión e integración:** implementar confirmación y escritura segura en la hoja acordada.
6. **Pruebas y cierre:** verificar el recorrido completo, corregir fallos y preparar el despliegue solo después de validar la web.

Las iteraciones pueden ajustarse si el relevamiento o las pruebas muestran dependencias nuevas. No iniciar una etapa de servicio externo antes de cumplir sus condiciones en `05_plan_piloto/ROADMAP.md`.

## Seguimiento y artefactos

- Mantener una lista priorizada de tareas vinculada a `PENDIENTES.md`.
- Registrar cada sesión de trabajo en la bitácora de Pasantía.
- Actualizar la etapa de Seminario correspondiente con decisiones y avances comprobables.
- Guardar criterios de aceptación y resultados de pruebas conforme se definan; no inventar campos mientras no se revise el Excel.
- Usar `05_plan_piloto/PREPARACION_ANTES_DESARROLLO.md` como checklist de preparación antes del prototipo y de las integraciones reales.

## Criterio de finalización de una iteración

- El objetivo de la iteración fue implementado o queda registrado como bloqueado.
- Los cambios se verificaron con la prueba o revisión apropiada.
- Se anotaron decisiones, archivos y resultados en la documentación activa.
- Los pendientes de la siguiente iteración están identificados.

## Pendiente

Confirmar con la documentación de la cátedra los requisitos formales de esta etapa y completar los detalles de planificación cuando se realice el relevamiento del rubro.
