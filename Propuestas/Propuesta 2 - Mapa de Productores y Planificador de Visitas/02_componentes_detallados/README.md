# 02 - COMPONENTES DETALLADOS (Propuesta 2)

Orientado a bycoding. Cada componente se define con: Propósito, Props, Estado interno, Eventos, Comportamiento, Validaciones, Estilos (Tailwind), Estructura JSX, Dependencias, Integración, Criterios de aceptación, Pruebas mínimas, Notas.

## Convenciones
- PascalCase (MapaInteractivo.tsx, FiltrosMapa.tsx, ListadoCercania.tsx, EstadosVisita.tsx, FichaProductor.tsx, Layout.tsx)
- Ubicación `src/components`
- TypeScript obligatorio
- Tailwind CSS
- Accesibilidad mínima (labels, roles, foco visible)
- Lógica de datos en `src/services`
- Componentes puros + hooks

## Alcance (MVP de pasantía)
Este módulo se desarrolla completo y autocontenido, pero pensado para integrarse después con la Propuesta 1 (fuente de datos) y la Propuesta 3 (portal). Ver `VISION_SISTEMA.md`.

## Índice de componentes
| Archivo | Componente | Rol |
|---|---|---|
| `componentes/mapa/MapaInteractivo.md` | MapaInteractivo | Mapa Leaflet + marcadores/clusters |
| `componentes/filtros/FiltrosMapa.md` | FiltrosMapa | Filtros por rubro/proyecto/tipo |
| `componentes/listado/ListadoCercania.md` | ListadoCercania | Listado ordenado por distancia |
| `componentes/visitas/EstadosVisita.md` | EstadosVisita | Gestión de estado de visita |
| `componentes/ficha/FichaProductor.md` | FichaProductor | Popup con datos del productor |
| `componentes/layout/Layout.md` | Layout | Topbar + drawer + modo nocturno |
| `componentes/sync/BannerOffline.md` | BannerOffline | Estado online/offline |
