# Gestión de Usuarios (Admin)

## Decisión MVP vs Post-Pasantía

### Opción elegida para MVP (ahorrar tiempo)
Crear usuarios manualmente en Firebase Console (5 usuarios máximo aprox). NO implementar interfaz completa ABM usuarios para evitar complicar pasantía.

### Funcionalidades mínimas necesarias
- Login funcionando (obligatorio)
- Recuperar contraseña: sendPasswordResetEmail (envía a Gmail/email registrado) → OK, simple

### Problema identificado (seguridad)
- Si persona con cuenta deja Municipalidad → puede actuar maliciosamente (agregar/cambiar/borrar)
- Usuarios no rotados fácilmente sin interfaz

### Solución propuesta (documentada para post-pasantía)
**Post-pasantía (si contratan):**
1. Implementar `crearUsuario(email, pass, rol)` y `eliminarUsuario(uid)` SOLO para rol admin
2. Panel Admin > Usuarios (ABM simple)
3. Deshabilitar/bloquear usuario (disable account) en lugar de borrar datos históricos
4. Logs auditoría (quién creó/eliminó usuarios)
5. Política: baja lógica + revocar acceso inmediato
6. Listado usuarios con estado (activo/inactivo)

### Estado actual documentado
- [DOCUMENTADO] Riesgo y mitigación
- [PENDIENTE] Implementar ABM usuarios (post-pasantía) - ver PENDIENTES.md
