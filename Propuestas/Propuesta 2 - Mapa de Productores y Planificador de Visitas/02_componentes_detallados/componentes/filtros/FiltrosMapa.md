# Componente: FiltrosMapa

## Identificación
- Nombre: `FiltrosMapa.tsx`
- Ruta sugerida: `src/components/filtros/FiltrosMapa.tsx`
- Tipo: Control

## Propósito
Permitir filtrar los productores visibles por rubro, proyecto y tipo de producción, mostrando los filtros activos como chips removibles.

## Props
```typescript
interface Props {
  rubros: string[]
  proyectos: string[]
  tipos: string[]
  filtro: FiltroMapa
  onChange: (filtro: FiltroMapa) => void
}
```

## Estado interno
- Sin estado propio (controlado por `onChange`).

## Comportamiento
- Selects/dropdowns por dimensión (rubro, proyecto, tipo).
- Al cambiar un valor → `onChange({ ...filtro, campo: valor })`.
- Muestra chips de los filtros activos; cada chip tiene una "x" para quitarlo.
- Botón "Limpiar filtros".

## Validaciones
- Opciones vacías → deshabilita el select correspondiente.

## Estilos (Tailwind)
- Panel flotante (`absolute`, `bg-white/95`, `rounded-lg`, `shadow`).
- Chips con `rounded-full` y color institucional.

## Dependencias
- `useFiltros`

## Integración
- Consumido por la página Mapa; su salida alimenta a `MapaInteractivo` y `ListadoCercania`.

## Criterios de aceptación
- [ ] Filtra por cada dimensión
- [ ] Combina filtros (AND)
- [ ] Muestra chips de filtros activos
- [ ] Permite quitar un filtro individual
- [ ] Botón "Limpiar filtros" funciona

## Pruebas mínimas
- Sin filtros → devuelve todos.
- Filtro inexistente → lista vacía + empty state.

## Notas
- Accesible por teclado; labels asociados.
