
Idea: evitar doble carga (papel→Excel). 
La persona carga directo desde celular en el lugar (finca/casa/invernadero/criadero/etc).
Debe funcionar offline con sincronización. 
Mantener integridad (auditoría) y ampliar Sheets existente.

## 5. Enfoque carga en campo (clave)

- Evitar doble carga: papel → Excel pasa a directo en PWA
- Funcionar offline: cola IndexedDB + sync batch al volver conexión
- Formularios dinámicos por rubro
- Auditoría completa + trazabilidad
- Ampliar Google Sheets existente (hojas por rubro + Productores)
- PWA instalable en Android

## 6. Híbrido Firebase + Sheets (decisión práctica)

- Firebase: operativa, offline-first, auth, reglas, auditoría
- Sheets: vista familiar, fórmulas/cálculos ya hechos (no reprogramar)
- Apps Script replica Firebase→Sheets por rangos (preserva fórmulas)
- Firebase = maestro operativo. Sheets = reporte con cálculos automáticos

## 7. Autenticación y seguridad

- Firebase Auth (Email+Password)
- Login directo (no genérico). Primero Login, luego acceso app
- Recuperar contraseña vía email
- Roles desde Firestore
- MVP: crear usuarios en Firebase Console (5 aprox) → ahorra tiempo pasantía
- Post-pasantía: ABM usuarios + disable + logs auditoría (riesgo: cuenta activa tras salida)

## 8. Interfaz y navegación (tras login)

- Login primero (email+pass). Tras autenticado: Layout base
- Topbar: menú hamburguesa + logo muni (PWA) + título + estado online/offline + pendientes sync
- Drawer hamburguesa: info usuario, Modificar mi perfil, Modo nocturno, Cerrar sesión
- Menú estático: Inicio (bienvenida corta), Productores, Crear ficha (rubro), Fichas del día, Pendientes sync, Consultar/Búsqueda, Modo nocturno
- Contenido: bienvenida inicial. Al seleccionar opción, reemplaza por vista
- Modo nocturno genérico (Tailwind dark)
- Perfil: editar displayName/teléfono. Email/rol/uid no editables

## 9. Menú estático ampliado
Se agregan: Información importante, Preguntas frecuentes (FAQ). 
Ubicaciones de productores marcado "(próximamente)" y NO habilitado (para desarrollo posterior a pasantía).

## 10. Diseño visual (promoción + presentación)
Enfoque visual atractivo: logo muni, dark/light, iconografía, animaciones sutiles, skeletons, empty states, badges, toasts. Capturas para manual/promoción. Recursos en 04_seminario/recursos/.
