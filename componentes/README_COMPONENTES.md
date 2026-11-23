# Componentes – Propuesta 1

Este directorio contiene la especificación de cada componente a crear para el módulo "Alta y Actualización Controlada del Registro de Productores".

## Objetivo

Definir, para cada componente: propósito, props, estado interno, comportamiento, estilos, validaciones, eventos, dependencias, estructura de archivos, criterios de aceptación y pruebas mínimas.

## Convenciones generales

- **Nombre:** PascalCase (ej. `FormProductor.tsx`, `BuscadorDni.tsx`)
- **Ubicación:** `src/components/`
- **Tipado:** Siempre con TypeScript (`types/` cuando comparta interfaces)
- **Estilos:** Tailwind CSS (clases utilitarias). Evitar CSS global innecesario.
- **Accesibilidad mínima:** labels asociados, inputs con name/id.
- **Feedback:** Mostrar errores/éxitos claros al usuario.
- **Separación:** Lógica de API va en `src/services/`. Estado compartido ligero con hooks.
- **Componentes puros:** Preferir presentacionales + contenedores vía hooks.

## Componentes mínimos requeridos

| Componente | Prioridad | Descripción |
|---|---|---|
| `Buscador.tsx` | Alta | Busca por DNI/CUIT para decidir alta/modificación |
| `FormProductor.tsx` | Alta | Formulario de alta/modificación con validaciones |
| `Input.tsx` | Alta | Input reutilizable con label/error |
| `Boton.tsx` | Alta | Botón reutilizable con variantes |
| `Alerta.tsx` | Alta | Mensaje de éxito/error/aviso |
| `Loader.tsx` | Media | Indicador de carga |
| `CampoControl.tsx` | Media | Muestra metadatos (ID/Fechas/Usuario) solo lectura |

## Cómo usar cada archivo .md de componente

Cada componente tendrá su propio `.md` con esta estructura obligatoria:

1. **Identificación** – Nombre, ruta, tipo (pres/pure/container)
2. **Propósito** – Qué resuelve
3. **Props** – Interfaz con tipos + opcionalidad + descripción
4. **Estado interno** – useState/useEffect si aplica
5. **Eventos** – onChange/onSubmit/onClick
6. **Comportamiento** – Reglas, validaciones, condiciones
7. **Estilos** – Clases Tailwind sugeridas
8. **Estructura JSX** – Esqueleto
9. **Dependencias** – Imports
10. **Integración** – Dónde se usa (App.tsx / otros)
11. **Criterios de aceptación** – Lista verificable
12. **Pruebas mínimas** – Casos rápidos
13. **Notas** – Precauciones/recomendaciones

## Checklist al crear componente

- [ ] Sigue naming PascalCase
- [ ] Props tipadas explícitas
- [ ] Sin `any` innecesario
- [ ] Clases Tailwind coherentes
- [ ] Manejo de loading/errores
- [ ] Accesible (label + id)
- [ ] Export default o named según convención
- [ ] Probado con datos mínimos
