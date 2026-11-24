# ETAPA 3 - DISEÑO DEL SISTEMA
## Propuesta 3: Portal Web Informativo para Productores

### Plataforma
Sitio web público responsive, mobile-first. Navegadores modernos.

### Stack Tecnológico
- Framework: Astro + Vite + TypeScript (recomendado) o React + Vite
- Estilos: Tailwind CSS
- Contenido: `src/content` (secciones, requisitos, trámites, FAQ)
- Contacto: Click-to-WhatsApp (link `wa.me`)
- Formulario ligero: WhatsApp o Google Sheets (sin backend propio)
- Despliegue: Netlify/Vercel

### Arquitectura
Contenido (archivos) → render del sitio → contacto (WhatsApp / formulario ligero).
Sin login, sin base de datos propia. Contenido estático por ser informativo.

### Datos
- Secciones informativas, requisitos, trámites y FAQ viven en el contenido del proyecto.
- Único dato capturado (formulario) se deriva a WhatsApp/Sheets.

### Frontend/Backend
- Frontend: Header, Footer, Hero, SeccionInformativa, ListaRequisitos, PasoTramite, AcordeonFaq, BotonWhatsApp, FormularioSolicitud.
- Backend: no hay (estático) salvo el destino externo del formulario.

### Seguridad
Sitio público; no maneja datos sensibles; no hay credenciales.

### Backup
Git/GitHub, código fuente.

### Criterio de diseño
Mobile-first, accesibilidad (contraste, tamaños táctiles), lenguaje simple para el productor.
