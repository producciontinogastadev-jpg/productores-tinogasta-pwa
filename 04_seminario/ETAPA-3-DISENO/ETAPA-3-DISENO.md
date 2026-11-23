# ETAPA 3 - DISEÑO DEL SISTEMA

## Estado

Diseño preliminar del piloto. Los campos del formulario, el modelo persistente y el mapeo de la planilla no se cierran hasta relevar el Excel y validar la interfaz.

## Plataforma e interfaz

- PWA responsive para uso desde teléfono y computadora.
- Recorrido mínimo previsto: inicio de sesión, formulario de un rubro, revisión/confirmación y estado de guardado/sincronización.
- La interfaz inicial se construirá con datos ficticios; no se conectará a servicios reales durante esa validación.
- El diseño se ajustará a los nombres, formatos, opciones y reglas que se observen en el Excel.

## Arquitectura lógica prevista

1. La PWA captura el registro.
2. Sin conexión, conserva el registro localmente en el dispositivo.
3. Al recuperar conectividad, sincroniza el registro con Firebase.
4. El registro queda pendiente hasta su revisión y confirmación.
5. Un servicio seguro del lado servidor escribe los registros confirmados en la ubicación acordada de Google Sheets.

La integración y el mapeo de columnas se definirán tras revisar el archivo. No exponer credenciales o secretos de Google en el código cliente.

## Tecnologías previstas

- React, TypeScript y Vite para la aplicación.
- Tailwind CSS para estilos, si se mantiene la decisión al iniciar el código.
- Almacenamiento local persistente del navegador para el modo sin conexión; evaluar la alternativa concreta durante el desarrollo.
- Firebase para autenticación y almacenamiento en la nube, a configurar una vez validados interfaz y datos.
- Google Sheets como destino previsto para registros confirmados; confirmar hoja y columnas durante el relevamiento.
- Netlify para despliegue únicamente después de implementar y probar la web.

## Decisiones de diseño pendientes

- Campos, validaciones y orden del formulario.
- Estados de registro y permisos de carga/revisión/confirmación.
- Identificación de duplicados y correcciones.
- Esquema de Firebase y reglas de acceso.
- Persistencia local y política de reintentos.
- Hoja, columnas y mecanismo seguro para escribir en Sheets.
- Criterios formales de diseño requeridos por la cátedra.
