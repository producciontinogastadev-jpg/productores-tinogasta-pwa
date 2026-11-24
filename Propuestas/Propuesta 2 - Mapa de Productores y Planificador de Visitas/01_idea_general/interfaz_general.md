# INTERFAZ GENERAL

## Tras autenticación
Layout coherente con la Propuesta 1:
- **Topbar:** hamburguesa + logo muni + título + estado online/offline + indicador de última lectura del Registro.
- **Drawer hamburguesa:** info usuario, Modificar mi perfil, Modo nocturno, Cerrar sesión.
- **Menú estático:** Inicio, Mapa, Filtros, Listado por cercanía, Información importante, Preguntas frecuentes, Ubicaciones de productores (esta propuesta), Modo nocturno.
- **Contenido:** bienvenida inicial; al elegir opción → cambia la vista.

## Menú estático
- Inicio (bienvenida + resumen: productores relevados / sin georreferenciar)
- Mapa (vista principal con marcadores y clusters)
- Filtros (panel de rubro/proyecto/tipo)
- Listado por cercanía (armar rutas)
- Información importante
- Preguntas frecuentes (FAQ)
- Ubicaciones de productores (módulo de esta propuesta)
- Modo nocturno

## Pantalla principal (Mapa)
- Mapa a pantalla completa, centrado en Tinogasta.
- Panel flotante lateral: filtros + listado por cercanía.
- Marcadores coloreados por estado de visita.
- Clusters cuando hay muchos puntos agrupados.
- Ficha rápida (popup) al tocar un marcador.

## Drawer
Modificar perfil + cerrar sesión.

## Modo nocturno
Toggle genérico (claro/oscuro) con Tailwind `dark`. El mapa debe mantener contraste legible en ambos modos.
