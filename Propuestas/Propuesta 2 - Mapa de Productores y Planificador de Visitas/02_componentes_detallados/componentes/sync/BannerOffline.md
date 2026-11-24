# Componente: BannerOffline

## Identificación
- Nombre: `BannerOffline.tsx`
- Ruta sugerida: `src/components/sync/BannerOffline.tsx`
- Tipo: Presentacional

## Propósito
Avisar al usuario cuando no hay conexión y que trabaja en modo lectura con datos en caché.

## Props
```typescript
interface Props {
  online: boolean
  pendientes?: number
}
```

## Estado interno
- Sin estado propio.

## Comportamiento
- Si `online === false` → muestra banner "Sin conexión. Viendo datos guardados."
- Si hay `pendientes > 0` → muestra "X cambios pendientes de sincronizar".
- Si `online === true` y no hay pendientes → no se renderiza.

## Estilos (Tailwind)
- Barra `bg-amber-100 text-amber-800` (o similar), texto pequeño, sticky bajo la topbar.

## Dependencias
- Ninguna.

## Integración
- Se muestra en `Layout`, alimentado por el estado de conexión y la cola de visitas.

## Criterios de aceptación
- [ ] Aparece al perder conexión
- [ ] Desaparece al reconectar
- [ ] Muestra pendientes si los hay

## Pruebas mínimas
- Toggle online/offline → aparece/desaparece.

## Notas
- Mensajes claros; no alarmar al usuario.
