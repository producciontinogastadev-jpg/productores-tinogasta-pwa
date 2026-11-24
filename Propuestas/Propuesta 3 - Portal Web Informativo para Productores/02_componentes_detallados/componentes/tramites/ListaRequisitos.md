# Componente: ListaRequisitos

## Identificación
- Nombre: `ListaRequisitos.tsx`
- Ruta sugerida: `src/components/tramites/ListaRequisitos.tsx`
- Tipo: Presentacional

## Propósito
Mostrar el checklist de requisitos para inscribirse en el Registro de Productores.

## Props
```typescript
interface Props {
  requisitos: Requisito[]
}
```

## Estado interno
- Sin estado propio.

## Comportamiento
- Lista con ícono de check por ítem.
- Distingue obligatorio vs opcional (badge).

## Estilos (Tailwind)
- Ítems espaciosos, íconos verdes, texto legible.

## Dependencias
- Ninguna.

## Integración
- Página Requisitos.

## Criterios de aceptación
- [ ] Muestra todos los requisitos
- [ ] Marca claramente los obligatorios
- [ ] Responsive

## Pruebas mínimas
- Lista vacía → mensaje "sin requisitos".

## Notas
- Contenido validado con la Secretaría.
