# ETAPA 6 - PRUEBAS

## Objetivo
Verificar que el módulo cumple los criterios de aceptación y es estable para demostración.

## Tipos de prueba
- **Unitarias:** `geoService.calcularDistancia` (haversine), formateo de distancia.
- **Componentes:** MapaInteractivo (lista vacía, sin coordenadas), FiltrosMapa (combinación), ListadoCercania (con/sin referencia).
- **Integración:** lectura del Registro → render del mapa; cambio de estado de visita → color del marcador.
- **Manual/UX:** uso en móvil, contraste en modo nocturno, gestos de mapa.

## Casos clave
- [ ] Productor sin coordenadas → aparece en "Sin georreferenciar", no en el mapa.
- [ ] Filtro sin resultados → empty state.
- [ ] Distancia de un productor con referencia idéntica → ~0 km.
- [ ] Sin conexión → modo lectura con cache.
- [ ] Cambio de estado offline → queda pendiente y se sincroniza al reconectar.
