# REQUISITOS

## Funcionales (RF)
| Código | Descripción |
|---|---|
| RF01 | Leer los productores desde el Registro de Productores Tinogasteños (Google Sheets) |
| RF02 | Mostrar un mapa interactivo (Leaflet + OpenStreetMap) centrado en Tinogasta |
| RF03 | Dibujar un marcador por productor con coordenadas |
| RF04 | Agrupar marcadores en clusters cuando hay muchos en una zona |
| RF05 | Permitir completar lat/lon de forma incremental (georreferenciación) |
| RF06 | Filtrar por rubro, proyecto o tipo de producción |
| RF07 | Mostrar y cambiar el estado de visita (Pendiente / Visitado / Actualizado) |
| RF08 | Registrar la fecha de última visita al cambiar el estado |
| RF09 | Generar un listado ordenado por cercanía (haversine) desde un punto de referencia |
| RF10 | Listar los productores sin coordenadas ("sin georreferenciar") |
| RF11 | Guardar en caché los marcadores para consulta offline (solo lectura) |
| RF12 | Mostrar ficha rápida del productor al tocar un marcador |
| RF13 | Mostrar estado online/offline y última lectura del Registro |

## No Funcionales (RNF)
| Código | Descripción |
|---|---|
| RNF01 | Simplicidad: código claro y minimalista |
| RNF02 | Modularidad: separar componentes, servicios, hooks, utils, tipos |
| RNF03 | Tipado obligatorio (TypeScript) |
| RNF04 | Mantenibilidad |
| RNF05 | Compatible Chrome/Edge, responsive PC + móvil/tablet |
| RNF06 | Bajo acoplamiento: no crear un registro paralelo de productores |
| RNF07 | Rendimiento: el mapa debe responder fluido con muchos puntos (clusters) |
| RNF08 | Sin costos: usar OpenStreetMap, no APIs de mapas pagas |
| RNF09 | Respeto a lo existente: amplía/complementa, no duplica |
| RNF10 | MVP, sin sobreingeniería |

## Escritura de metadatos de visita (a validar con tutor)
| Código | Descripción |
|---|---|
| RF14 | Persistir el estado de visita y lat/lon (Firestore o hoja anexa) |
| RF15 | Sincronizar el estado de visita cuando vuelve la conexión |

## Autenticación
| Código | Descripción |
|---|---|
| RF16 | Login con email + contraseña (Firebase Auth) |
| RF17 | Control de acceso por rol (admin/operador/visor) |
