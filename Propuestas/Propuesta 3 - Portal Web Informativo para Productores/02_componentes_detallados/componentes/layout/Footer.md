# Componente: Footer

## Identificación
- Nombre: `Footer.tsx`
- Ruta sugerida: `src/components/layout/Footer.tsx`
- Tipo: Presentacional

## Propósito
Pie del portal con datos de contacto de la Secretaría y enlaces rápidos.

## Props
```typescript
interface Props {
  contacto: Contacto
  enlaces?: { slug: string; titulo: string }[]
}
```

## Estado interno
- Sin estado propio.

## Comportamiento
- Muestra dirección, email y WhatsApp (si están definidos).
- Enlaces rápidos a secciones.

## Estilos (Tailwind)
- Fondo institucional, texto claro, `text-sm`.

## Dependencias
- `whatsappService` (para el enlace de contacto).

## Integración
- En todas las páginas del portal.

## Criterios de aceptación
- [ ] Muestra datos de contacto existentes
- [ ] No muestra campos vacíos
- [ ] Responsive

## Pruebas mínimas
- Sin email → no muestra la fila.

## Notas
- Mantener tono institucional.
