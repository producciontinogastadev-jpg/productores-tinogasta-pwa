# Componente: Layout

## Identificación
- Nombre: `Layout.tsx`
- Ruta sugerida: `src/components/layout/Layout.tsx`
- Tipo: Container

## Propósito
Estructura visual común del módulo: topbar + drawer hamburguesa + contenido, coherente con la Propuesta 1.

## Props
```typescript
interface Props {
  children: React.ReactNode
  titulo?: string
  estadoSync?: 'online' | 'offline'
  pendientes?: number
}
```

## Estado interno
- `drawerAbierto: boolean`
- `modoNocturno: boolean` (o vía contexto)

## Comportamiento
- Topbar: hamburguesa + logo muni + título + indicador online/offline + pendientes.
- Drawer: info usuario, Modificar perfil, Modo nocturno, Cerrar sesión.
- Menú estático: Inicio, Mapa, Filtros, Listado por cercanía, Información, FAQ, Ubicaciones (esta propuesta), Modo nocturno.
- Modo nocturno aplica `dark` a la raíz.

## Validaciones
- No aplica (componente de estructura).

## Estilos (Tailwind)
- `flex flex-col h-screen`; topbar fija; drawer deslizante.
- Clases `dark:` coherentes.

## Dependencias
- Contexto de tema y sesión (AuthContext de la Propuesta 1, si se integra).

## Integración
- Envuelve todas las páginas del módulo.

## Criterios de aceptación
- [ ] Topbar con logo y estado
- [ ] Drawer abre/cierra
- [ ] Menú navega entre vistas
- [ ] Modo nocturno funciona
- [ ] Responsive (móvil primero)

## Pruebas mínimas
- Sin sesión → redirige a login (si aplica).
- Toggle de tema persiste en la sesión.

## Notas
- Mantener idéntico el layout base a la Propuesta 1 para futura unificación.
