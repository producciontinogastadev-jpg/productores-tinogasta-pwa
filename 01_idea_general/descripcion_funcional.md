# DESCRIPCIÓN FUNCIONAL DETALLADA

## Idea real
Convertir el flujo actual: formulario/papel → transcripción a Excel/Sheets → 2 veces carga.

Nuevo flujo: carga directa desde PWA en campo → sincroniza con Google Sheets (única fuente). Ampliar Sheets existente (NO duplicar).

## Escenario campo
Persona de Municipalidad va al lugar del productor:
- Finca / Casa donde desarrolla actividad
- Invernadero
- Criadero / lugar de animales
- Lugar de producción (dulcería, curtiembre, vivero, etc.)
- Otro lugar relevante

En lugar de papel → cargar directo en PWA (móvil).

## Requerimientos funcionales ampliados
- PWA: instalable en Android (campo). Debe permitir carga offline con sincronización cuando haya conexión (importante por zonas con señal intermitente)
- Formulario dinámico por rubro: fichas diferentes según rubro (plantaciones, animales, dulceras, curtiembre, etc.)
- CRUD completo: Agregar, Ver, Modificar, Actualizar, Eliminar? (con cuidado por trazabilidad). Mejor "Editar controlado" + "Dar de alta" + historial
- Búsqueda por productor (DNI/CUIT/Apellido)
- Georreferencia opcional (lat/lon) para saber ubicación visitada
- Foto opcional (evidencia visita/carga)
- Fecha/hora automática + usuario que carga
- Validaciones mínimas + prevención duplicados
- Sincronización bidireccional con hoja Productores (o nuevas hojas por rubro) manteniendo estructura existente
- Estado sync: pendiente/enviado (offline)
- Solo permitir editar registros propios? o según rol

## Integridad datos
- ID único por registro/ficha
- Audit: creado_por, fecha_creacion, modificado_por, fecha_modificacion, dispositivo
- Nunca borrar físico? marcar baja lógica
- Validar coherencia entre fichas
- Mantener relación Productor <-> Fichas por rubro

## Visualización
- En PWA: listar fichas del día, pendientes sync, buscador
- En Sheets: mantener legible (hojas separadas por rubro o todo en Productores ampliado)
- Posible mejora futura: ver datos desde PWA (listar, filtrar)

## MVP vs post-MVP
MVP: carga directa + sync online/offline básico + formularios por rubro principales + búsqueda + edición controlada + mantener Sheets existente.
Post: reportes, mapa, fotos masivas, roles avanzados.

## Notas
- Usar Google Sheets como "backend ligero" (ya existe) pero PWA prioriza móvil
- Offline-first: cola de envíos
- Apps Script debe aceptar lotes (batch) para sync
