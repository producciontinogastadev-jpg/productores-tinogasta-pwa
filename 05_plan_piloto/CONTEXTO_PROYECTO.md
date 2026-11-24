# Contexto del proyecto para retomar sesiones

## Objetivo

Desarrollar un producto piloto pequeño para digitalizar y automatizar la carga de **un solo rubro** que actualmente se transcribe a Excel. Si funciona, se adaptará a los demás rubros; no se espera que compartan campos o formularios.

## Proceso actual y problema

Los agentes son las personas que van al lugar, recolectan los datos que deben agregarse o actualizarse y se los entregan a una persona en la oficina. Esa persona, desde una computadora, los transcribe al Excel y los revisa. El sistema busca reemplazar esa transcripción manual y conservar los elementos de trabajo actuales.

No es necesario modelar para qué se utiliza posteriormente la información. El alcance es capturar lo recolectado, conservarlo de forma segura y ordenada, facilitar su revisión y llevarlo correctamente a la planilla.

## Flujo esperado

1. El agente abre la PWA desde su celular e inicia sesión cuando tiene conexión.
2. La sesión se mantiene iniciada durante el uso normal. El agente solo ve los formularios del rubro piloto y carga/envía los datos recolectados; no gestiona registros.
3. Si no hay internet, el registro queda guardado en el dispositivo para sincronizarse más tarde.
4. Cuando vuelve la conexión, el registro se sincroniza con Firebase.
5. La persona de la oficina abre los registros desde una computadora, los revisa y puede corregirlos, actualizarlos o eliminarlos.
6. Cuando confirma un registro revisado, este se acomoda en la ubicación correspondiente de la planilla de destino.

## Decisiones tomadas

- Comenzar con **un rubro** como piloto.
- El agente recolecta y carga datos desde un celular; la persona de oficina revisa y administra registros desde una computadora.
- El agente solo carga/envía datos. La revisión, aceptación, administración, edición, eliminación lógica y restauración corresponden al administrador autorizado.
- La sesión del agente permanece iniciada durante el uso normal para que pueda acceder a los formularios sin volver a iniciar sesión cada vez.
- Debe permitirse la carga sin conexión y sincronizar al recuperar internet.
- Firebase será el espacio intermedio para los registros recibidos y aún no confirmados.
- La persona de oficina podrá revisar, corregir, actualizar y eliminar registros antes de confirmarlos.
- Un dato que el agente no tenga puede quedar en blanco. La falta de datos no debe bloquear el registro ni interrumpir la carga.
- La ausencia de un campo no debe afectar a los otros datos cargados. Al actualizar, un campo vacío conserva el valor existente; borrar un dato requiere una acción explícita.
- La persona de oficina podrá modificar o eliminar desde la PWA registros incluso después de que se hayan enviado a la planilla; esos cambios deben reflejarse también en la planilla.
- Eliminar un registro significa hacer una **baja lógica**: marcarlo como eliminado/inactivo en la PWA y en la planilla, conservando la fila y el historial en lugar de borrar físicamente los datos.
- El usuario que maneja la computadora será el único usuario con permisos administrativos completos para consultar/restaurar registros inactivos y gestionar registros.
- Las opciones disponibles en la interfaz dependerán del usuario autenticado y sus permisos.
- Para el MVP, el historial mínimo registra quién realizó el cambio, cuándo, la acción y los campos afectados; no se guardan copias de valores anteriores/nuevos.
- Se prioriza usar servicios y planes gratuitos. No se puede garantizar costo cero bajo cualquier uso ni ausencia absoluta de errores; se revisarán límites gratuitos y se diseñarán controles y pruebas para reducir y detectar errores.
- Se usará una cuenta de correo dedicada al proyecto. No guardar contraseñas, códigos de recuperación ni secretos en el repositorio o la bitácora.
- No desplegar hasta que la web del piloto esté implementada y probada.
- No agregar funciones fuera del flujo mínimo acordado para el piloto.
- La estructura concreta de la base de datos se definirá después de conocer los campos y reglas reales.
- Base tecnológica prevista: React, TypeScript, Vite y Tailwind CSS, sujeta a validar el estado del repositorio al comenzar el código.

## Pendiente de confirmar

- Rubro y campos, formatos, opciones y reglas derivados del Excel.
- Cómo se implementarán técnicamente los permisos, manteniendo al agente limitado a cargar/enviar y reservando revisión/aceptación y gestión al administrador; los roles funcionales ya están acordados.
- Mejoras posteriores a la pasantía, como guardar valores anteriores/nuevos en el historial o implementar una auditoría más detallada.
- Cómo identificar registros y duplicados, tratar correcciones, conflictos y reintentos.
- Archivo/hoja de destino, columnas y mecanismo seguro para escribir en la planilla.
- Cómo se comporta el inicio de sesión si una persona abre la aplicación sin conexión. Como mínimo, comprobar una primera apertura y autenticación con internet antes del trabajo de campo.

No anticipar estas respuestas en el código ni inventar campos. Completar [DECISIONES_PENDIENTES.md](./DECISIONES_PENDIENTES.md) durante el relevamiento.

## Restricciones prácticas

- Priorizar el recorrido mínimo funcional por encima de funcionalidades accesorias.
- Implementar solo lo indispensable para demostrar el flujo del MVP. Postergar mejoras que no sean necesarias para que funcione.
- No desarrollar por ahora todos los rubros ni funciones ajenas al proceso acordado.
- Usar datos ficticios o anonimizados en pruebas y documentación; no registrar datos personales en la bitácora.
- No exponer claves de Firebase con privilegios ni credenciales de Google en la PWA.
- Evitar que reintentar una sincronización duplique un registro.
- No prometer "cero errores": verificar los datos contra el Excel, preservar los campos no modificados, registrar fallos y probar reintentos y casos de actualización.
- Revisar cuotas y condiciones de cada nivel gratuito; no activar servicios con costo sin aprobación.

## Cómo retomar

1. Leer este archivo y [ROADMAP.md](./ROADMAP.md).
2. Revisar [DECISIONES_PENDIENTES.md](./DECISIONES_PENDIENTES.md) y el [registro maestro de sesiones](../03_pasantia/bitacora/REGISTRO_SESIONES.md).
3. Confirmar con el usuario qué información nueva obtuvo y revisar el Excel cuando esté disponible.
4. Actualizar los documentos antes de implementar cambios que dependan de esos datos.
5. Registrar cada sesión en `03_pasantia/bitacora/`.
