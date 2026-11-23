# TECNOLOGÍAS A UTILIZAR

## Stack base (acordado)
- React + TypeScript + Vite
- Tailwind CSS
- Firebase (Auth, Firestore, Storage según corresponda a cada propuesta)
- Despliegue: Vercel/Netlify

## Específico Propuesta 1
- Google Apps Script (Web App) como puente para leer/escribir DIRECTAMENTE en Google Sheets existente
- Google Sheets: fuente única (ampliada, NO duplicada)
- Sin backend propio

## Justificación
- React+TS+Vite: rápido, tipado, modular
- Tailwind: ágil para UI
- Firebase: escalable, gratuito
- Apps Script: evita backend completo, respeta planilla existente

## Enfoque híbrido (actualizado)
- Firebase Firestore: base de datos operativa (offline-first, auth, auditoría)
- Google Sheets: vista/reporte con fórmulas y cálculos existentes (replicado desde Firebase vía Apps Script)
- Google Apps Script (Web App): puente Firebase→Sheets (mantiene fórmulas, rangos)
