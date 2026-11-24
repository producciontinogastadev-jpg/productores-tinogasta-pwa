# Componente: SeccionInformativa

## Identificación
- Nombre: `SeccionInformativa.tsx`
- Ruta sugerida: `src/components/secciones/SeccionInformativa.tsx`
- Tipo: Presentacional

## Propósito
Mostrar un bloque de contenido informativo (título + texto/HTML simple), reutilizable para "¿Qué es el Registro?", descripción de trámites, etc.

## Props
```typescript
interface Props {
  titulo: string
  contenido: string      // texto o Markdown/HTML simple
  icono?: string
}
```

## Estado interno
- Sin estado propio.

## Comportamiento
- Renderiza el contenido respetando párrafos cortos.
- Ícono opcional a la izquierda.

## Estilos (Tailwind)
- `prose` controlado; buen interlineado; ancho de lectura cómodo.

## Dependencias
- Renderer de Markdown (si el contenido lo requiere).

## Integración
- Usado en las páginas Registro, Requisitos y otras.

## Criterios de aceptación
- [ ] Renderiza título y contenido
- [ ] Párrafos legibles en móvil
- [ ] Ícono opcional

## Pruebas mínimas
- Contenido con saltos de línea → párrafos separados.

## Notas
- Evitar texto denso; usar listas cuando convenga.
