# FLUJOS EN CAMPO (detallado)

## Flujo "Cargar datos en lugar de productor"
1. Abrir PWA (instalable)
2. Buscar productor (DNI/CUIT/Apellido)
3. Seleccionar productor
4. Elegir rubro / tipo ficha
5. Completar formulario dinámico según rubro
6. Guardar local (offline OK)
7. Si online → sync inmediato. Si offline → queda en cola 'pending'
8. Al reconectar → enviar cola

## Sincronización
- Apps Script debe aceptar batch JSON con array de fichas
- Responder con ok/errores por ítem
- Actualizar sync_status local
- Mostrar "Pendientes X" en UI

## Integridad
- Ampliar Sheets: mantener hoja "Productores". Agregar hojas "Fichas_RubroX" o columna/fichas
- Nunca sobrescribir datos existentes sin auditoría
- Baja lógica si aplica

## Estados UI
- Modo offline/online
- Cola pendientes
- Última sync
