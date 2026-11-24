# Componente: Hero

## Identificación
- Nombre: `Hero.tsx`
- Ruta sugerida: `src/components/secciones/Hero.tsx`
- Tipo: Presentacional

## Propósito
Encabezado principal del inicio: mensaje claro + llamados a la acción (accesos a secciones clave y WhatsApp).

## Props
```typescript
interface Props {
  titulo: string
  subtitulo: string
  ctaPrincipal: { texto: string; href: string }
  ctaSecundario?: { texto: string; href: string }
}
```

## Estado interno
- Sin estado propio.

## Comportamiento
- Muestra título grande, subtítulo y botones de acción.
- Responsive: apilado en móvil.

## Estilos (Tailwind)
- Fondo con color institucional o imagen de campo con overlay.
- Tipografía grande y legible.

## Dependencias
- Ninguna.

## Integración
- Primera sección de la página Inicio.

## Criterios de aceptación
- [ ] Muestra título y subtítulo
- [ ] CTA principal funciona (navega o WhatsApp)
- [ ] Responsive móvil/desktop

## Pruebas mínimas
- Render sin CTA secundario.

## Notas
- Debe comunicar rápido "qué es y qué puedo hacer".
