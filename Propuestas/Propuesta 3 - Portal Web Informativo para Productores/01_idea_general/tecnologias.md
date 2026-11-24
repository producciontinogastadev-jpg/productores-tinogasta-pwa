# TECNOLOGÍAS A UTILIZAR

## Stack base (acordado)
- React + TypeScript + Vite (o Astro, ver abajo)
- Tailwind CSS
- Despliegue: Vercel/Netlify

## Específicas de esta propuesta
| Tecnología | Para qué | Justificación |
|---|---|---|
| **Astro + Vite + TypeScript** | Sitio estático informativo | Generación estática, muy ligero y rápido |
| **Tailwind CSS** | Diseño responsive y limpio | Poco código, buen resultado |
| **HTML/CSS/TS puro (alternativa)** | Sitio mínimo | Válido si se quiere minimizar dependencias |
| **Netlify/Vercel** | Publicación gratuita | Demo online y uso real sin costo |
| **WhatsApp Click-to-Chat** | Contacto directo | Canal que los productores ya usan |

## Decisión de framework (a definir)
- **Astro (recomendado):** ideal para sitios informativos; carga rápida, poco JS.
- **React + Vite:** coherente con las Propuestas 1 y 2 si se busca unificar el stack para la futura integración en un portal común.

## Por qué sin Firebase obligatorio
El sitio es informativo y estático; no necesita base de datos. Si el formulario ligero se conecta a Google Sheets, se puede usar un endpoint simple (Google Forms o Apps Script), sin backend propio.

## Integración con otras propuestas
- El portal puede, post-pasantía, enlazar o embeber los módulos de las Propuestas 1 y 2 como "portal central".
