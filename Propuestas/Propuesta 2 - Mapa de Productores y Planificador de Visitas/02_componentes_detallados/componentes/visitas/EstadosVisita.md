# Componente: EstadosVisita

## Identificación
- Nombre: `EstadosVisita.tsx`
- Ruta sugerida: `src/components/visitas/EstadosVisita.tsx`
- Tipo: Control

## Propósito
Permitir consultar y cambiar el estado de visita de un productor (Pendiente / Visitado / Actualizado), con fecha de última visita.

## Props
```typescript
interface Props {
  productorId: string
  estado: EstadoVisita
  fechaUltimaVisita?: string
  onChange: (estado: EstadoVisita) => void
}
```

## Estado interno
- Sin estado propio (controlado), salvo confirmación local de guardado.

## Comportamiento
- Muestra el estado actual como badge.
- Botones/segmento para cambiar estado.
- Al cambiar → `onChange(nuevoEstado)`; la fecha se sella en el servicio.
- Feedback visual breve ("Guardado" / "Se enviará al reconectar").

## Validaciones
- Transiciones válidas: pendiente→visitado→actualizado (y reversos permitidos).
- No permite cambiar si el productor no tiene `id`.

## Estilos (Tailwind)
- Badges de color coherentes con los marcadores del mapa.
- Segmento de botones accesible.

## Dependencias
- `useVisitas`

## Integración
- Se muestra dentro de `FichaProductor`.
- Su cambio impacta el color del marcador en `MapaInteractivo`.

## Criterios de aceptación
- [ ] Muestra el estado actual
- [ ] Permite cambiar de estado
- [ ] Registra la fecha de la visita
- [ ] Notifica si queda pendiente de sincronizar
- [ ] Refleja el cambio en el mapa

## Pruebas mínimas
- Cambio de estado persiste (o encola).
- Sin conexión → queda en `pendientes`.

## Notas
- Decisión de persistencia (Firestore vs hoja anexa) a validar con el tutor.
