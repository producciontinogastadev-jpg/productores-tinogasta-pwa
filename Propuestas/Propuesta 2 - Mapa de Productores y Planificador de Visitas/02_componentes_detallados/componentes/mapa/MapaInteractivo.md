# Componente: MapaInteractivo

## Identificación
- Nombre: `MapaInteractivo.tsx`
- Ruta sugerida: `src/components/mapa/MapaInteractivo.tsx`
- Tipo: Container / Control

## Propósito
Mostrar el mapa con los productores georreferenciados, con marcadores coloreados por estado de visita y agrupables en clusters.

## Props
```typescript
interface Props {
  productores: ProductorMapa[]
  estados: Record<string, EstadoVisita>
  onSelect: (p: ProductorMapa) => void
  centrarEn?: PuntoReferencia
}
```

## Estado interno
- zoom / bounds actuales (gestionados por Leaflet)
- Popup activo (productor seleccionado)

## Comportamiento
- Centra en Tinogasta por defecto; si llega `centrarEn`, centra ahí.
- Dibuja un marcador por productor con `lat`/`lng`.
- Color según estado: pendiente (gris/amarillo), visitado (azul), actualizado (verde).
- Usa clusters cuando hay muchos puntos próximos.
- Al tocar un marcador → `onSelect(productor)`.

## Validaciones
- Ignora productores sin coordenadas (no se dibujan aquí).
- Coordenadas fuera de rango → descarta el marcador y loguea.

## Estilos (Tailwind)
- Contenedor a pantalla completa (`h-full w-full`).
- Controles de zoom con estilo propio (`rounded shadow`).
- Popup con card limpia.

## Dependencias
- `react-leaflet`, `leaflet`
- `FichaProductor.tsx`
- `geoService` (para bounds/cercanía)

## Integración
- Recibe productores filtrados desde la página Mapa.
- Emite selección hacia el contenedor que abre la ficha.

## Criterios de aceptación
- [ ] Renderiza el mapa centrado en Tinogasta
- [ ] Dibuja los productores con coordenadas
- [ ] Colorea los marcadores por estado
- [ ] Agrupa marcadores en clusters
- [ ] Emite `onSelect` al tocar un marcador
- [ ] No crashea con lista vacía

## Pruebas mínimas
- Lista vacía → mapa sin marcadores.
- Productor sin coords → no se dibuja.
- Cambio de estado → el marcador cambia de color.

## Notas
- No renderizar el mapa de a muchos cientos de puntos sin clusters.
- En móvil, priorizar gestos táctiles y buen contraste.
