# Componente: Header

## Identificación
- Nombre: `Header.tsx`
- Ruta sugerida: `src/components/layout/Header.tsx`
- Tipo: Container

## Propósito
Encabezado del portal con logo de la Municipalidad, nombre del portal y navegación (hamburguesa en móvil).

## Props
```typescript
interface Props {
  titulo: string
  secciones: { slug: string; titulo: string }[]
}
```

## Estado interno
- `menuAbierto: boolean`

## Comportamiento
- En desktop: navegación horizontal con las secciones.
- En móvil: botón hamburguesa que abre/cierra el menú.
- Logo enlaza a Inicio.

## Estilos (Tailwind)
- Sticky top, `bg-white/95 dark:bg-*`, sombra sutil.
- Menú móvil desplegable full-width.

## Dependencias
- Ninguna.

## Integración
- Envuelve todas las páginas del portal.

## Criterios de aceptación
- [ ] Muestra logo y nombre del portal
- [ ] Navegación funcional a cada sección
- [ ] Hamburguesa funciona en móvil
- [ ] Accesible por teclado

## Pruebas mínimas
- Menú móvil abre/cierra.
- Enlace activo resaltado.

## Notas
- Coherente con el encabezado de las Propuestas 1 y 2.
