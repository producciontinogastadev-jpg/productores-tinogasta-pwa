# TECNOLOGÍAS A UTILIZAR — Propuesta 3

## Stack base (acordado)
- Astro + Vite + TypeScript (recomendado) o React + Vite
- Tailwind CSS
- Despliegue: Netlify/Vercel (publicación gratuita)

## Específico Propuesta 3
- Contenido en `src/content` (secciones, requisitos, trámites, FAQ)
- Click-to-WhatsApp (`wa.me`) con mensaje preformateado
- Formulario ligero: derivación a WhatsApp o Google Sheets (sin backend propio)
- SEO básico (metadatos, sitemap)

## Justificación
- Astro: sitio mayormente estático, rápido y liviano para el productor con datos móviles.
- Alternativa React+Vite: mantiene el stack del resto de los módulos si el equipo prefiere uniformidad.
- Tailwind: ágil, mobile-first.
- Sin login ni base de datos propia: es un portal informativo, no de gestión.
