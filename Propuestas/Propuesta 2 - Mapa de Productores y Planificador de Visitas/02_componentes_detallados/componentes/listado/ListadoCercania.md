# Componente: ListadoCercania

## Identificación
- Nombre: `ListadoCercania.tsx`
- Ruta sugerida: `src/components/listado/ListadoCercania.tsx`
- Tipo: Container

## Propósito
Mostrar los productores ordenados por distancia a un punto de referencia, para armar rutas de visita.

## Props
```typescript
interface Props {
  productores: ProductorMapa[]
  referencia: PuntoReferencia | null
  onSelect: (p: ProductorMapa) => void
  onUsarUbicacionActual: () => void
}
```

## Estado interno
- Sin estado propio; ordena derivado de props.

## Comportamiento
- Si hay `referencia` → ordena con `geoService.ordenarPorCercania`.
- Si no hay → ordena alfabéticamente y muestra aviso "Definí un punto de referencia".
- Cada ítem muestra nombre, rubro y `distanciaKm` (si aplica).
- Botón "Usar mi ubicación actual" → `onUsarUbicacionActual`.

## Validaciones
- Distancias con 1 decimal (`km`); si < 1 km, mostrar en metros.

## Estilos (Tailwind)
- Lista scrolleable; ítems `hover:bg-*`.
- Badge de distancia a la derecha.

## Dependencias
- `geoService`

## Integración
- Junto a `MapaInteractivo` en la página Mapa; la selección se sincroniza.

## Criterios de aceptación
- [ ] Ordena por cercanía con referencia
- [ ] Ordena alfabéticamente sin referencia (con aviso)
- [ ] Muestra distancia formateada
- [ ] Emite `onSelect`
- [ ] Botón de ubicación actual funciona

## Pruebas mínimas
- Referencia igual a un productor → distancia 0.
- Sin referencia → no muestra distancias.

## Notas
- La fórmula de haversine debe estar testeada por separado.
