# FLUJOS DEL MÓDULO (detallado)

## Flujo "Visualizar productores en el mapa"
1. Abrir el módulo (acceso interno autenticado).
2. Se lee el Registro de Productores (Google Sheets) al iniciar.
3. El mapa centra la vista en Tinogasta y dibuja los marcadores con coordenadas.
4. Los productores sin coordenadas quedan en el panel "Sin georreferenciar".
5. Tocar un marcador → ficha rápida con datos y estado.

## Flujo "Filtrar por rubro/proyecto"
1. Elegir filtro (rubro, proyecto o tipo de producción).
2. El mapa y el listado se actualizan mostrando solo los coincidentes.
3. Se puede combinar más de un filtro; los activos se muestran como chips removibles.

## Flujo "Planificar la visita (listado por cercanía)"
1. Definir un punto de referencia (ubicación actual o un punto elegido en el mapa).
2. El módulo calcula la distancia a cada productor (haversine).
3. Se muestra el listado ordenado de menor a mayor distancia.
4. El equipo arma la ruta del día con ese orden.

## Flujo "Marcar estado de visita"
1. Durante o después de la visita, abrir la ficha del productor.
2. Cambiar el estado: Pendiente → Visitado → Actualizado.
3. (Opcional) Completar lat/lon si se relevó la ubicación en el predio.
4. Si hay conexión, se sincroniza; si no, queda en cola local y se envía al reconectar.

## Sincronización y lectura
- **Lectura:** del Registro existente (Sheets) por lectura directa o Apps Script en modo lectura.
- **Escritura de metadatos de visita:** pequeña; puede ir a Firestore o a una hoja anexa (decisión a validar).
- Cache de marcadores para consulta offline (solo lectura).

## Estados de la UI
- Modo offline/online.
- Pendientes de sincronizar (si se escribe estado de visita offline).
- Última lectura del Registro (fecha/hora).
- Contador de productores visibles / sin georreferenciar.
