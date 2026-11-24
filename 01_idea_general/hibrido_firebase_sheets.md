# ENFOQUE HÍBRIDO: FIREBASE + GOOGLE SHEETS

## Razón
- Firebase como base de datos "activa" (PWA offline-first, consultas rápidas, validaciones, roles)
- Google Sheets como "reporte/plantilla" familiar al equipo (ya usan Excel/Sheets, columnas con fórmulas/cálculos)
- Reutilizar lógica de cálculo ya existente en Sheets
- Ahorro tiempo + comodidad para quienes siguen usando Sheets

## Arquitectura híbrida
1. PWA (campo) guarda datos en Firebase (Firestore) + cola offline
2. Al sincronizar/sincronizar cambios → replicar/actualizar hacia Google Sheets vía Apps Script
3. Sheets sigue teniendo fórmulas, totales, resúmenes, gráficos (para comodidad)
4. Firebase mantiene integridad, auditoría, permisos
5. Sheets se mantiene como "vista consolidada" con cálculos automáticos

## ¿Qué va dónde?
- Datos operativos en campo: Firebase (tiempo real + offline)
- Maestro Productores: puede existir en ambos sincronizados
- Fichas por rubro: Firebase (CRUD) → exportado a hojas por rubro en Sheets
- Cálculos/totales: se dejan en Sheets (fórmulas existentes) → NO reescribir lógica en código

## Flujo sincrónico
PWA → Firebase (offline OK) → Trigger/Apps Script → escribe a Sheets (formateado para conservar fórmulas/rangos)

## Ventajas
- Evita doble carga
- No reprogramar cálculos
- Transición suave (siguen viendo Sheets)
- Firebase da robustez (PWA offline, auth, reglas)

## Consideraciones
- Sincronización unidireccional o bidireccional? Mejor Firebase → Sheets (maestro de verdad Firebase)
- Evitar que se rompan fórmulas
- Apps Script escribir en rangos específicos (no borrar hoja completa)
- Marcar último sync
