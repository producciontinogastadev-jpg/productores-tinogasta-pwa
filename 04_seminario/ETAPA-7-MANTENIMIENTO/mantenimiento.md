# ETAPA 7 - MANTENIMIENTO

## Enfoque
MVP simple y de bajo mantenimiento, apoyado en servicios gratuitos y en el Registro existente.

## Puntos de mantenimiento
- **Google Sheets:** sigue siendo la fuente de datos; el módulo la amplía y no la reemplaza. Mantener coherencia de columnas.
- **Apps Script:** monitorear el Web App y su URL; actualizar si cambian permisos o cuota.
- **Firebase:** cuidar el límite del plan gratuito (Firestore Spark, 1 GB) y las reglas de seguridad.
- **PWA:** actualizar el service worker al publicar cambios de caché.
- **Dependencias:** actualizar React/Vite/Tailwind de forma esporádica.

## Roles y usuarios
- MVP: usuarios creados manualmente en Firebase Console.
- Post-pasantía: panel de gestión de usuarios (alta/baja/deshabilitar) + auditoría.

## Riesgos
- Adopción sin seguir el procedimiento (mitigado con capacitación y cuentas por rol).
- Dependencia de personas clave para validar datos (fuera del alcance técnico).
- Migración de datos existentes sin perder información (hacer respaldo previo).
