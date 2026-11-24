# TECNOLOGÍAS A UTILIZAR

## Stack base (acordado)
- React + TypeScript + Vite
- Tailwind CSS
- Firebase (Auth; Firestore opcional para estado de visita)
- Despliegue: Vercel/Netlify

## Específicas de esta propuesta
| Tecnología | Para qué | Justificación |
|---|---|---|
| **Leaflet.js + React-Leaflet** | Mapa interactivo y marcadores | Gratuito, estable, sin claves de API pagas |
| **OpenStreetMap** | Tiles del mapa | Sin costo, ideal para recursos limitados |
| **Google Sheets (lectura)** | Fuente de productores | Reutiliza el Registro existente, sin duplicar |
| **Google Apps Script (Web App)** | Puente de lectura | Permite leer la planilla sin backend propio |
| **PWA (cache lectura)** | Consulta offline | Útil en zonas con señal inestable |

## Justificación general
- **React + TS + Vite:** rápido, tipado y modular; se integra sin acoplamiento con la Propuesta 1.
- **Leaflet + OSM:** la alternativa gratuita y suficiente para el alcance.
- **Firebase (opcional):** autenticación y persistencia del estado de visita, sin montar backend.
- **PWA ligera:** permite consultar el mapa sin conexión, que es un riesgo real en el campo.

## Integración con otras propuestas
- Comparte la fuente de datos (Registro de Productores) con la **Propuesta 1**.
- Puede embeberse como módulo dentro del **Portal (Propuesta 3)** post-pasantía.
