# Componente: FichaProductor

## Identificación
- Nombre: `FichaProductor.tsx`
- Ruta sugerida: `src/components/ficha/FichaProductor.tsx`
- Tipo: Presentacional

## Propósito
Mostrar los datos rápidos de un productor seleccionado (popup del mapa o ítem del listado) y permitir cambiar su estado de visita.

## Props
```typescript
interface Props {
  productor: ProductorMapa
  estado: EstadoVisita
  distanciaKm?: number
  onClose: () => void
  onCambiarEstado: (estado: EstadoVisita) => void
}
```

## Estado interno
- Sin estado propio.

## Comportamiento
- Muestra nombre, rubro, proyecto, localidad, distancia (si aplica).
- Incluye `EstadosVisita` para cambiar estado.
- Botón de cierre → `onClose`.
- Si no tiene coordenadas, indica "Sin georreferenciar".

## Validaciones
- Campos opcionales ausentes → ocultar la fila, no mostrar "undefined".

## Estilos (Tailwind)
- Card compacta, `rounded-lg shadow`, buena legibilidad en móvil.

## Dependencias
- `EstadosVisita`

## Integración
- Abierto por `MapaInteractivo` (popup) y `ListadoCercania` (panel).

## Criterios de aceptación
- [ ] Muestra los datos básicos del productor
- [ ] Permite cambiar estado
- [ ] Muestra distancia si se provee
- [ ] Se cierra con `onClose`
- [ ] No muestra campos vacíos

## Pruebas mínimas
- Productor mínimo (solo nombre) → no muestra filas vacías.

## Notas
- Reutilizable tanto en popup como en panel lateral.
