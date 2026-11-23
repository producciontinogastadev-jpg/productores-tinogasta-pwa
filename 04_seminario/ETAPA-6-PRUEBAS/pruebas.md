# ETAPA 6 - PRUEBAS

## Alcance

Probar únicamente el MVP de un rubro definido desde el Excel. Los casos verificables están centralizados en `05_plan_piloto/PRUEBAS_ACEPTACION.md`; este documento registrará cuándo y cómo se ejecutan y sus resultados reales.

## Perfiles y dispositivos

- **Agente:** celular; inicia sesión con conexión y carga/envía únicamente el formulario del rubro piloto. La sesión debe permanecer activa durante el uso normal, y las cargas offline deben persistir en el dispositivo.
- **Administrador:** computadora; revisa y acepta registros, puede corregirlos, actualizarlos, darlos de baja lógicamente o restaurarlos.
- Probar con cuentas separadas y registros ficticios. El control de permisos debe estar aplicado en las operaciones de datos, no solo en los botones visibles.

## Escenarios mínimos a ejecutar

1. Carga online, revisión administrativa y aceptación hacia la planilla.
2. Campos faltantes en blanco sin bloqueo de carga.
3. Carga offline, cierre/reapertura, reconexión y sincronización sin duplicados.
4. Error de red y reintento sin pérdida ni duplicación.
5. Restricción de funciones administrativas para el agente.
6. Actualización parcial: campo vacío conserva el valor y borrado explícito afecta solo al campo elegido.
7. Edición posterior al envío, baja lógica y restauración en la planilla.
8. Historial mínimo: usuario, fecha/hora, acción y campos modificados.
9. Revisión de límites de costo antes de habilitar servicios o publicar.

## Registro de ejecución

Completar con evidencia del entorno de prueba, sin incluir datos personales ni secretos:

| Fecha | Casos ejecutados | Resultado | Defectos/bloqueos | Responsable |
|---|---|---|---|---|
| Pendiente | Pendiente | Pendiente | Requiere formulario y planilla definidos | Pendiente |

## Criterio de cierre

La etapa se cierra cuando los casos aplicables de `PRUEBAS_ACEPTACION.md` pasan con datos ficticios, no quedan defectos críticos de pérdida/duplicación/escritura/permisos, y la persona responsable valida el formulario y su destino. Registrar fallos no críticos conocidos; no afirmar que el sistema está libre de todo error.
