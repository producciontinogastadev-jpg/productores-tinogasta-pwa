# REQUISITOS

## Funcionales (RF)
| Código | Descripción |
|---|---|
| RF01 | Permitir buscar productor por DNI y/o CUIT |
| RF02 | Si existe, mostrar datos y permitir modificarlo (modo edición controlado) |
| RF03 | Si no existe, habilitar formulario de alta |
| RF04 | Validar campos obligatorios antes de enviar |
| RF05 | Prevenir duplicados por DNI. Advertir si coincide CUIT |
| RF06 | Registrar Fecha_Alta al crear nuevo productor |
| RF07 | Registrar Fecha_Actualizacion y Actualizado_Por al modificar |
| RF08 | Generar ID_Productor único al alta (PROD-YYYYMMDDHHmmss-XXXXXX) |
| RF09 | Escribir/actualizar únicamente en hoja Productores del Google Sheets existente |

## No Funcionales (RNF)
| Código | Descripción |
|---|---|
| RNF01 | Simplicidad: código claro y minimalista |
| RNF02 | Modularidad: separar componentes, servicios, hooks, utils, tipos |
| RNF03 | Tipado obligatorio (TypeScript) |
| RNF04 | Mantenibilidad |
| RNF05 | Compatible Chrome/Edge, responsive PC+Móvil |
| RNF06 | Bajo acoplamiento: frontend NO accede directo a Sheets API (usa Apps Script) |
| RNF07 | Trazabilidad: toda modificación con metadatos |
| RNF08 | Respeto a lo existente: amplía planilla, no crea registro paralelo |
| RNF09 | MVP, sin sobreingeniería |

## Funcionales ampliados (campo)
| Código | Descripción |
|---|---|
| RF10 | PWA instalable en dispositivos móviles |
| RF11 | Soportar carga offline con cola de sincronización |
| RF12 | Formularios dinámicos por rubro |
| RF13 | Vincular ficha a productor existente |
| RF14 | Guardar fecha/hora, usuario, lugar de visita, coords opcionales |
| RF15 | Sincronización batch a Google Sheets/Apps Script |
| RF16 | Mostrar estado online/offline + pendientes sync |

## Autenticación
| Código | Descripción |
|---|---|
| RF17 | Login con email + contraseña (Firebase Auth) |
| RF18 | Recuperar contraseña vía email |
| RF19 | Control acceso por rol (admin/operador/visor) |
| RF20 | MVP: usuarios creados en Firebase Console (no ABM UI) |
