# PROPUESTA 1: Módulo de Alta y Actualización Controlada del Registro de Productores

**Versión General – Para Presentación**

## 1. Título de la Propuesta

"Módulo de Alta y Actualización Controlada del Registro de Productores Tinogasteños"

## 2. Problema Identificado

Actualmente, la Secretaría de Producción utiliza Excel para llevar el Registro de Productores Tinogasteños. Cuando se registra un nuevo productor desde la oficina, o cuando una visita de campo detecta cambios o correcciones en sus datos, estos deben volcarse manualmente a la planilla.

Esta forma de trabajo genera múltiples versiones del archivo, riesgo de duplicados, falta de trazabilidad sobre quién y cuándo se modificaron los datos, y dificulta mantener un único registro actualizado, tal como se detectó en el diagnóstico realizado.

## 3. Objetivo General

Desarrollar un módulo web que permita dar de alta, buscar y actualizar los datos de los productores, **ampliando el Registro de Productores Tinogasteños ya existente en Google Sheets**, sin crear un registro paralelo.

## 4. Objetivos Específicos

- Unificar el canal de altas y actualizaciones en un único formulario controlado.
- Prevenir la carga duplicada de productores mediante validación por DNI y/o CUIT.
- Garantizar trazabilidad, registrando quién realizó la carga/modificación y fecha/hora.
- Aprovechar la planilla de Google Sheets existente, manteniendo su estructura y formato actual.
- Facilitar su uso desde la oficina y, cuando exista conexión, desde dispositivos móviles en el campo.
- Mantener el proceso lo más simple posible, priorizando un MVP funcional y demostrable.

## 5. Alcance MVP

### Incluye

- Formulario web para **Alta** de nuevo productor.
- **Búsqueda** por DNI/CUIT para detectar duplicados o para cargar datos a modificar.
- Formulario para **Modificación** controlada de un productor existente.
- Validaciones básicas de campos obligatorios.
- Escritura directa sobre el archivo de Google Sheets ya existente.
- Metadatos de auditoría (`ID_Productor`, `Fecha_Alta`, `Actualizado_Por`, `Fecha_Actualizacion`).
- Diseño **responsive** (apto para PC y móvil).
- Conexión mediante puente controlado entre frontend y Google Sheets.

### No incluye

- Desarrollo de un sistema integral para todos los proyectos.
- Módulo completo de reportes gerenciales o cuadros de mando.
- Gestión avanzada de roles y permisos con múltiples niveles.
- Sincronización **offline completa** con resolución automática de conflictos.
- Migración masiva automática de todo el histórico con reglas complejas.
- Integración con otros sistemas municipales.

## 6. Justificación

El enfoque elegido es **incremental y pragmático**. Dado el tiempo disponible para la pasantía, resulta más acertado resolver el núcleo del problema (altas y actualizaciones controladas) que intentar desarrollar un sistema integral desde cero.

Además, se aprovecha el **Registro de Productores Tinogasteños** existente en Google Sheets desde 2019, respetando el trabajo ya realizado por el equipo. Esto evita duplicar información, reduce la curva de aprendizaje y permite mantener el flujo de trabajo actual con una mejora concreta.

## 7. Beneficiarios

- **Equipo de la Secretaría de Producción:** Agiliza la carga, reduce errores y mejora la organización.
- **Tutor y pasantes:** Permite entregar un módulo claro, funcional y demostrable.
- **Productores:** Se evita confusiones, duplicados y demoras en actualizaciones.
- **Municipalidad:** Obtiene mayor orden, trazabilidad y fiabilidad del registro.

## 8. Solución Propuesta

Se propone desarrollar un **módulo web acotado** con la siguiente lógica:

1. El usuario ingresa al formulario para dar de alta o buscar un productor.
2. Antes de crear un nuevo registro, el sistema verifica si ya existe por **DNI/CUIT**.
3. Si existe, se precargan sus datos para permitir una **modificación controlada**.
4. Si no existe, se habilita el alta con validaciones mínimas.
5. Todas las operaciones se envían a través de un **Google Apps Script (Web App)** que escribe directamente sobre la hoja `Productores` del archivo de Google Sheets existente.
6. Se registran automáticamente los metadatos de control para mantener trazabilidad.

## 9. Tecnologías (Resumen)

| Tecnología | Uso | Justificación |
|---|---|---|
| **Vite + React + TypeScript** | Frontend | Ligero, moderno, tipado seguro, fácil de mantener y demostrar. |
| **Google Apps Script (Web App)** | Puente entre frontend y Google Sheets | Gratis, sin necesidad de un backend completo. Permite leer/validar/escribir sobre la planilla existente. |
| **Google Sheets** | Base de datos (fuente única) | Ya se utiliza, conocido por el equipo, sin costo y sin romper el proceso actual. |
| **Tailwind CSS** | Estilos | Rápido, responsive y minimalista para este MVP. |

## 10. Entregables para la Presentación

- **01_Propuesta_General.md** – Versión resumida para exposición.
- **02_Especificacion_Tecnica.md** – Especificación completa para desarrollo.
- **Módulo funcional** – Demo del formulario (Alta / Búsqueda / Modificación).
- **Código fuente** – Estructurado, comentado y organizado.
- **Presentación** – Con problemática, solución, alcance y demostración.

## 11. Alcance Futuro

- **Integración con Propuesta 2:** Vincular con el Mapa de Productores y Planificador de Visitas.
- **Integración con Propuesta 3:** Incluir acceso desde el Portal Web Informativo.
- **Autenticación con roles:** Diferenciar acceso entre oficina y equipo.
- **Mejoras de validación:** Ampliar reglas según necesidades reales.
- **Reportes simples:** Listados filtrados directamente desde el módulo.
