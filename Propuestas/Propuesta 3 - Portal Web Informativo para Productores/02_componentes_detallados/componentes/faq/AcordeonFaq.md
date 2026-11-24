# Componente: AcordeonFaq

## Identificación
- Nombre: `AcordeonFaq.tsx`
- Ruta sugerida: `src/components/faq/AcordeonFaq.tsx`
- Tipo: Container/Control

## Propósito
Mostrar las preguntas frecuentes en formato acordeón, una respuesta abierta por vez.

## Props
```typescript
interface Props {
  items: Faq[]
}
```

## Estado interno
- `abiertoId: string | null` (o delegado en `useAcordeon`)

## Comportamiento
- Al tocar una pregunta → abre su respuesta y cierra la anterior.
- Ícono de chevron que rota.

## Estilos (Tailwind)
- Ítems con borde divisorio; respuesta con `py` cómodo.

## Dependencias
- `useAcordeon`

## Integración
- Página FAQ (y accesos desde Inicio/Trámites).

## Criterios de aceptación
- [ ] Abre/cierra respuestas
- [ ] Solo una abierta a la vez
- [ ] Accesible por teclado (`aria-expanded`)

## Pruebas mínimas
- Tocar dos veces la misma → cierra.

## Notas
- Buen objetivo para SEO (contenido textual indexable).
