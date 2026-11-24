# PROPUESTA 3: Portal Web Informativo para Productores (Trámites y Orientación)

## 1. Problema identificado

Actualmente, muchas consultas de los productores (cómo inscribirse, qué requisitos necesitan, dónde o cómo hacer trámites, etc.) se resuelven de manera repetida vía WhatsApp, en papel o verbalmente. Esto consume tiempo del equipo, dificulta que nuevos productores accedan a la información y no deja un canal claro y unificado de orientación.

## 2. Objetivo

Desarrollar un portal web informativo, claro y responsive, para que los productores puedan consultar información sobre trámites, requisitos y contacto con la Secretaría de Producción. Este portal funcionará como punto de entrada unificado, dejando abierta la posibilidad de integrar los otros módulos más adelante.

## 3. Alcance (MVP - Lograble en la pasantía)

- **Sección "¿Qué es el Registro de Productores?"**: Explica brevemente su finalidad y utilidad.
- **Requisitos para inscribirse:** Listado claro y conciso de lo que necesita un productor para formar parte del registro.
- **Trámites:** Guía paso a paso para realizar consultas, inscripción o actualización de datos.
- **Preguntas Frecuentes (FAQ):** Responde a las dudas más comunes, reduciendo consultas repetidas.
- **Contacto directo por WhatsApp:** Botón de Click-to-WhatsApp con mensaje preformateado (ideal para solicitar inscripción, consulta o actualización de datos).
- **Formulario de solicitud ligero (opcional):** Permite enviar datos básicos por WhatsApp o hacia Google Sheets. Se propone de forma opcional para no aumentar el alcance innecesariamente.
- **Diseño Mobile-First (Responsive):** Pensado principalmente para ser visto desde celulares, ya que es el dispositivo más utilizado por los productores.
- **Enfoque informativo:** No busca replicar el ABM completo, sino orientar y derivar correctamente a quien lo necesite.

## 4. Tecnologías a utilizar

| Tecnología | Justificación |
|---|---|
| **Astro + Vite + TypeScript** | Generación estática, muy ligera, rápida y fácil de desplegar. Reduce complejidad y tiempo de desarrollo. |
| **Tailwind CSS** | Permite crear un diseño limpio, responsive y moderno con poco código. |
| **HTML/CSS/TS puro (alternativa)** | También válido si se quiere minimizar dependencias. Astro es óptimo para este tipo de sitio informativo. |
| **Deploy gratuito (Netlify/Vercel)** | Permite publicar el sitio online de manera gratuita, ideal para mostrarlo en la demo y para uso real. |

## 5. Beneficios esperados

- **Reduce consultas repetidas:** El FAQ y las guías permiten a los productores resolver dudas por su cuenta.
- **Canal de ingreso claro:** Orienta a los productores sobre cómo realizar trámites, evitando confusiones.
- **Mejora la comunicación:** El botón de WhatsApp agiliza el contacto con el equipo, manteniendo el canal actual que ya utilizan.
- **Accesible desde cualquier dispositivo:** Diseño responsive pensado para zonas rurales y uso móvil.
- **Base para integrar módulos:** Sirve como "portal central" para, en un futuro, enlazar el Módulo 1 (Altas/Actualizaciones) y el Módulo 2 (Mapa de Visitas), unificando todo en un solo sitio sin rehacer lo desarrollado.
- **Rápido de entregar:** Es el más ágil de implementar dentro del tiempo disponible.

## 6. Entregables

- Sitio web estático, responsive y funcional.
- Secciones: Inicio, Registro de Productores, Requisitos, Trámites, FAQ y Contacto (WhatsApp).
- Botón Click-to-WhatsApp configurado con mensaje preformateado.
- Versión publicada (demo online) en Netlify/Vercel (opcional pero recomendable).
- Código fuente documentado.

## 7. Justificación

Esta propuesta cumple con la idea planteada de "hacer de relleno una página web que junte varios sistemas en uno y se pueda lograr todo eso". Se mantiene acotada y lograble para la pasantía, aporta valor real para productores y Municipalidad, y deja la arquitectura preparada para integrar los demás módulos post-pasantía, tal como fue pensado.
