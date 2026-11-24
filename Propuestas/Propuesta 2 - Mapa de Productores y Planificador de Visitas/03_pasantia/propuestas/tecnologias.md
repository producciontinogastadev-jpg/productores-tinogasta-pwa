# TECNOLOGÍAS A UTILIZAR — Propuesta 2

## Stack base (acordado)
- React + TypeScript + Vite
- Tailwind CSS
- Firebase (Auth y, si se valida, Firestore para el estado de visita)
- Despliegue: Vercel/Netlify

## Específico Propuesta 2
- Leaflet + React-Leaflet (mapas)
- OpenStreetMap (tiles, sin clave ni costo)
- Google Sheets: lectura del Registro de Productores existente (NO lo modifica)
- Google Apps Script (opcional) como puente de lectura
- Cálculo de distancias en runtime (haversine)

## Justificación
- React+TS+Vite: rápido, tipado, modular.
- Tailwind: ágil para UI.
- Leaflet + OSM: mapas sin costos de API y con control total.
- Firebase: solo si se necesita persistir el estado de visita.
- El módulo lee el Registro; no crea uno paralelo.
