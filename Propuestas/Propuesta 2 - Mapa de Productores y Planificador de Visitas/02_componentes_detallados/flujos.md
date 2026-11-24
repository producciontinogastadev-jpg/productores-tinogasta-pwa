# FLUJOS

## Flujo principal
1. Usuario accede autenticado → estado inicial: mapa con todos los productores georreferenciados.
2. Los productores sin coordenadas quedan en el panel "Sin georreferenciar".
3. Aplica filtros (rubro/proyecto/tipo) → mapa y listado se actualizan.
4. Define punto de referencia → ve el listado ordenado por cercanía.
5. Selecciona un productor → FichaProductor (popup).
6. Marca estado de visita → `marcarVisita()` (online o en cola).
7. El color del marcador cambia según el estado.

## Reglas
- Nunca se modifica el Registro de Productores desde este módulo.
- Si falta conexión → modo lectura con cache; la marca de visita se encola.
- El listado por cercanía requiere un punto de referencia; si no hay, se ordena alfabéticamente.
- Los filtros se combinan (AND).

## Estados de la UI
- online / offline
- pendientes de sincronizar (badge)
- última lectura del Registro (fecha/hora)
- contador: productores visibles / sin georreferenciar
