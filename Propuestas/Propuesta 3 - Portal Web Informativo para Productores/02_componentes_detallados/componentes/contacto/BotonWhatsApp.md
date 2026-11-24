# Componente: BotonWhatsApp

## Identificación
- Nombre: `BotonWhatsApp.tsx`
- Ruta sugerida: `src/components/contacto/BotonWhatsApp.tsx`
- Tipo: Control

## Propósito
Botón destacado de Click-to-WhatsApp que abre el chat con un mensaje preformateado según el caso.

## Props
```typescript
interface Props {
  numero: string
  mensaje: string
  texto?: string          // texto visible ("Contactar por WhatsApp")
  tamanio?: 'normal' | 'grande'
}
```

## Estado interno
- Sin estado propio.

## Comportamiento
- Construye el enlace con `whatsappService.buildLink`.
- Abre en nueva pestaña (`target="_blank"`, `rel="noopener"`).
- Ícono oficial de WhatsApp.

## Estilos (Tailwind)
- Fondo verde WhatsApp, `rounded-full`, tamaño táctil grande.

## Dependencias
- `whatsappService`

## Integración
- Sección Contacto, Hero y al final de la guía de trámites.

## Criterios de aceptación
- [ ] Abre WhatsApp con el mensaje correcto
- [ ] Nueva pestaña segura
- [ ] Tamaño táctil adecuado
- [ ] Mensaje URL-encoded correctamente

## Pruebas mínimas
- Mensaje con acentos y espacios → enlace válido.

## Notas
- Número en formato internacional sin `+`.
