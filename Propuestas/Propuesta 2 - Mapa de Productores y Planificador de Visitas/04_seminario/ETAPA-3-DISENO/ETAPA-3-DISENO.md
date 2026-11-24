# ETAPA 3 - DISEÑO DEL SISTEMA
## Propuesta 2: Mapa de Productores y Planificador de Visitas

### Plataforma
SPA Responsive (PC + Móvil/Tablet). Navegadores modernos.

### Stack Tecnológico
- Frontend: React + TypeScript + Vite
- Estilos: Tailwind CSS
- Mapas: Leaflet + React-Leaflet + OpenStreetMap
- Datos: Google Sheets (lectura) vía lectura directa o Apps Script
- Persistencia de visitas: Firebase/Firestore o hoja anexa (a validar)
- Despliegue: Vercel/Netlify

### Arquitectura
Frontend (React+TS+Vite) → lectura del Registro de Productores (Sheets) + metadatos de visita → Mapa interactivo.

### Base de Datos
El Registro de Productores existente es la fuente (solo lectura). No se crea registro paralelo.
Los metadatos de visita (estado, fecha, lat/lon) son el único dato propio del módulo.

### Frontend/Backend
- Frontend: MapaInteractivo, FiltrosMapa, ListadoCercania, EstadosVisita, FichaProductor, Layout, BannerOffline.
- Backend lógico: mínimo (lectura de datos + persistencia de visitas).

### Seguridad
Acceso interno autenticado; sin escritura sobre el Registro de Productores.

### Backup
Google Sheets, Git/GitHub, código fuente.

### Diseño de datos del módulo
- Productor (leído) + MetadatoVisita (propio) → ProductorMapa en runtime.
- Distancias calculadas en runtime (haversine), no persistidas.
