# Componente: PasoTramite

## Identificación
- Nombre: `PasoTramite.tsx`
- Ruta sugerida: `src/components/tramites/PasoTramite.tsx`
- Tipo: Presentacional

## Propósito
Mostrar un paso numerado de un trámite, con su detalle, para armar la guía paso a paso.

## Props
```typescript
interface Props {
  paso: PasoTramite
  ultimo?: boolean
}
```

## Estado interno
- Sin estado propio.

## Comportamiento
- Muestra el número de orden, título y detalle.
- Línea conectora entre pasos (si no es el último).

## Estilos (Tailwind)
- Círculo con número, línea vertical, texto a la derecha.

## Dependencias
- Ninguna.

## Integración
- Página Trámites, iterando los pasos de cada `Tramite`.

## Criterios de aceptación
- [ ] Muestra número, título y detalle
- [ ] Conector visual entre pasos
- [ ] Responsive

## Pruebas mínimas
- Último paso → sin línea conectora.

## Notas
- Numeración clara para lectura rápida.
