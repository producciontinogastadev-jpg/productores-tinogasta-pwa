# Relevamiento y decisiones pendientes

Completar con información del lugar. No inventar datos para avanzar más rápido. Cuando una respuesta cambie el alcance o la arquitectura, actualizar también el contexto y el roadmap.

## Rubro y proceso

- Rubro seleccionado para el piloto: Producción Agrícola - VID (Vitivinicultura), el rubro más numeroso y representativo del departamento Tinogasta (501 productores registrados).
- Quién recolecta los datos: agentes de campo de la Secretaría de Producción que visitan a los productores en sus fincas con su teléfono celular (PWA offline-first).
- Quién transcribe y revisa actualmente: una persona en la oficina de la Secretaría, desde una computadora de escritorio.
- Cómo se transfieren actualmente los datos del agente a la oficina: planillas físicas de papel transcritas manualmente al Excel. Con la PWA, se sincronizan automáticamente a Firebase cuando el dispositivo tiene conexión.
- Dónde y cuándo se recolectan/cargan: en fincas, parajes y distritos de Tinogasta, frecuentemente en zonas rurales sin señal celular.
- Quién revisará y confirmará en la PWA: el usuario administrador de la Secretaría, desde la vista de escritorio en una computadora.
- Qué ocurre actualmente si un dato está mal o incompleto: un campo no disponible queda vacío; la falta de un dato no bloquea el registro del productor ni interrumpe la carga.
- Qué información debe quedar fuera del piloto: los demás rubros productivos (Ganadería, Industria, Gastronómicos/Regionales y Artesanías), que quedan para fases posteriores manteniendo la misma base arquitectónica.
- Para qué se utiliza posteriormente la información: estadísticas municipales, balances anuales y gestión de programas provinciales/nacionales (fuera del alcance del sistema).

## Formulario (Piloto VID)

Campos relevados directamente de las columnas A a AV de la hoja maestra `REGISTRO` del archivo real de la Secretaría de Producción de Tinogasta:

| Sección | Campo | Columna Excel | Tipo en PWA | Opciones / Valores válidos | Observaciones / Validación |
|---|---|---|---|---|---|
| **Identificación** | Nº de Registro | A | Texto / Auto | Numérico o asignado por Secretaría | Opcional en carga inicial |
| **Identificación** | Apellido y Nombre | B | Texto | Libre | Obligatorio para identificar productor |
| **Identificación** | DNI | C | Número | 7 u 8 dígitos | Sin puntos |
| **Identificación** | Fecha de Nacimiento | D | Fecha | YYYY-MM-DD | Selector de fecha |
| **Identificación** | Teléfono | I | Teléfono | Numérico libre | Opcional |
| **Identificación** | Distrito / Localidad | H | Selector (Dropdown) | ANILLACO, BANDA DE LUCERO, CERRO NEGRO, COPACABANA, COSTA DE REYES, EL DURAZNO, EL PUEBLITO, EL PUESTO, EL RETIRO, EL SALADO, LA PUNTILLA, LAS HIGUERITAS, MEDANITOS, SAN JOSE, SANTA ROSA, TATON, TINOGASTA, VILLA LUJAN, VILLA SAN ROQUE | Tomado de los 20 distritos reales |
| **Identificación** | Género | J (FEM) / K (MASC) | Selector (Radio) | Femenino / Masculino | En Excel marca 'X' en col J o K |
| **Finca y Tenencia** | Nombre Emprendimiento | E | Texto | Libre | Nombre de la finca o viñedo |
| **Finca y Tenencia** | Domicilio Emprendimiento | F | Texto | Libre | Ubicación / calle del predio |
| **Finca y Tenencia** | Domicilio Particular | G | Texto | Libre | Domicilio de residencia |
| **Finca y Tenencia** | Reside en la Propiedad | Q (SI) / R (NO) | Selector (Radio) | Sí / No | En Excel marca 'X' en Q o R |
| **Finca y Tenencia** | Situación de Tenencia | S, T, U, V | Selector (Radio) | Título (S) / Préstamo (T) / Alquiler (U) / Sucesión (V) | En Excel marca 'X' en la col correspondiente |
| **Finca y Tenencia** | Sup. Total Terreno | AC | Decimal (Número) | Número $\ge 0$ | Superficie total de la propiedad |
| **Cultivo (VID)** | Cultivo | AE | Fijo / Selector | `VID` | Valor fijo predeterminado para el piloto |
| **Cultivo (VID)** | Tipo / Variedad | AF | Selector + Opción Otro | CEREZA, 102 TINOGASTEÑA, DATILERA, SYRAH, BONARDA, MALBEC, TORRONTES RIOJANO, CABERNET SAUVIGNON, MOSCATEL, PEDRO GIMENEZ, OTRO | Cepas reales registradas en Tinogasta |
| **Cultivo (VID)** | Superficie Cultivada ($\text{m}^2$) | AG | Número entero/decimal | Número $\ge 0$ | Columna AG |
| **Cultivo (VID)** | Superficie en Hectáreas (Ha) | AH | Calculado automático | Fórmula $\text{m}^2 / 10.000$ | Calculado por la PWA y preservado como fórmula en Sheets |
| **Cultivo (VID)** | Destino de la Producción | AI (Venta) / AJ (Autocons.) | Selector (Radio/Check) | Venta / Autoconsumo | En Excel marca 'X' |
| **Cultivo (VID)** | Sistema de Riego | AK, AL, AM, AN | Selector (Radio) | Manto (AK) / Goteo (AL) / Aspersión (AM) / Complementario (AN) | En Excel marca 'X' |
| **Cultivo (VID)** | Maquinarias | AO (Propia) / AP (Alquilada) | Selector (Radio) | Propia / Alquilada / Sin maquinaria | En Excel marca 'X' |
| **Factores Climáticos** | Afectación Climática | AQ, AR, AS, AT, AU | Checkboxes múltiples | Heladas tardías (AQ), Lluvia (AR), Granizo (AS), Viento Zonda (AT), Zonda tardío (AU) | En Excel marca 'X' en cada fenómeno sufrido |
| **Factores Climáticos** | Nivel de Daño | AV (Bajo) / AW (Medio) / AX (Alto) | Selector (Radio) | Sin daño / Bajo / Medio / Alto | En Excel marca 'X' |
| **General** | Observaciones | AD | Texto multilínea | Libre | Notas sobre terreno, huerta o detalles |

## Planilla de destino

- ¿La fuente actual es un archivo Excel, una hoja de Google Sheets u otro formato?: Archivo Excel 97-2003 / OpenXML de 102 columnas y ~9.500 filas (`2022  REGISTRO DE PRODUCTORES TINOGASTA NV`).
- ¿Se convertirá/trasladará la planilla actual o se usará una nueva hoja de Google Sheets?: Se subió y convirtió a Google Sheets en la cuenta de Google dedicada del proyecto.
- Nombre/ubicación de la planilla de destino (sin copiar información sensible aquí): Google Drive de la pasantía, archivo convertido a Google Sheets.
- Hoja de destino: `REGISTRO` (pestaña principal de datos).
- Encabezados y orden de columnas: Filas 1 a 5 definen encabezados y subencabezados. Los registros de datos se ubican a partir de la fila 6 (o última fila disponible).
- Columnas calculadas o fórmulas que no deben modificarse, si las hay: 
  - Columna `AH` (`SUP/HA`): fórmula `=AG.../10000`.
  - Pestañas `PROD.AGRICOLA` y `PRODUCCION GANADERA`: contienen fórmulas `SUMIFS` que leen de la hoja `REGISTRO`. Al insertar o actualizar registros en `REGISTRO`, estas pestañas se actualizan solas.
- Cómo se determina el lugar correcto para cada registro: nuevos registros confirmados se agregan al final de la hoja `REGISTRO` (`appendRow`). Si es una edición de un registro preexistente, se localiza por identificador/fila y se actualizan solo los campos editados.
- Requiere actualizar una fila existente o solo agregar registros: admite ambos casos; inserción de nuevos productores y actualización parcial de filas existentes.
- Persona responsable de autorizar el acceso: encargado / administrador de la Secretaría de Producción.

## Usuarios y permisos

- Quiénes pueden iniciar sesión:
- Agente: carga y sincroniza datos recolectados desde un celular.
- Administrador: revisa y acepta registros antes de enviarlos a la planilla, y gestiona los registros desde una computadora.
- Decisión: el agente solo carga/envía; no revisa ni administra registros.
- Quién administra accesos durante el piloto:
- Autenticación inicial: iniciar sesión con internet antes del trabajo de campo.
- Decisión: durante el uso normal, la sesión del agente permanece activa y la PWA muestra sus formularios sin pedir un nuevo inicio de sesión.

## Reglas y excepciones

- Cómo reconocer un posible duplicado:
- Cómo corregir un registro ya sincronizado:
- Qué sucede cuando el revisor rechaza un registro:
- Qué ocurre si una misma persona modifica un registro en dos dispositivos:
- Cuánto tiempo puede permanecer un registro solo en el dispositivo:
- Mensaje/acción esperada ante errores de sincronización:
- Campo vacío durante una actualización: conserva el valor existente; borrar un dato requiere una acción explícita.
- ¿Qué acción/permiso permite borrar un valor de campo o eliminar un registro?:
- ¿Cómo se conserva y audita la información no modificada durante una actualización parcial?:
- Decisión: la persona de oficina puede modificar/eliminar desde la PWA registros ya confirmados y enviados; los cambios deben reflejarse en la planilla.
- Eliminación de registro enviado: baja lógica; marcar como eliminado/inactivo y conservar fila e historial.
- Decisión: el usuario que maneja la computadora es el único con permisos administrativos completos; puede consultar y restaurar registros inactivos.
- Decisión: mostrar las acciones disponibles según el usuario que inició sesión.
- Decisión: registrar quién realiza cada modificación, baja lógica y restauración.
- Agente: solo puede cargar/enviar datos desde el formulario; no puede revisar, aceptar, editar/eliminar registros sincronizados ni restaurar bajas.
- Historial mínimo acordado: usuario responsable, fecha/hora, acción y campos modificados.
- Historial mínimo del MVP: usuario responsable, fecha/hora, acción y campos modificados; no guardar valores anteriores/nuevos.
- Auditoría ampliada con valores anteriores/nuevos: fuera del MVP; posible mejora posterior a la pasantía.

### Regla ya acordada sobre datos faltantes

- Un dato que el agente no tenga puede quedar en blanco.
- La PWA no debe bloquear la carga ni pedir al agente que complete ese dato.
- La falta de un campo no debe afectar los demás campos recibidos.
- En una actualización, el campo vacío conserva el valor existente.
- Para borrar el valor de un campo se requiere una acción explícita.

## Criterios de aceptación

Escribir condiciones verificables antes de considerar terminado el piloto. Como mínimo:

- Un registro cargado con internet aparece en Firebase y queda pendiente de revisión.
- Un registro creado sin internet permanece guardado al cerrar y volver a abrir la PWA.
- Al volver la conexión, el registro llega a Firebase sin duplicarse.
- Un registro no aparece en Sheets antes de confirmarse.
- Un registro confirmado se agrega a la hoja y columnas correctas, preservando las fórmulas si las hubiera.
- La interfaz muestra el estado o error de cada registro de forma entendible.
- Un agente puede guardar un registro con campos sin información, sin que estos bloqueen el resto de la carga.
- Una actualización parcial no modifica los campos que no fueron objeto del cambio; los campos vacíos conservan el valor previo y borrar requiere una acción explícita.
- La persona de oficina puede corregir, actualizar y eliminar registros de acuerdo con permisos y reglas definidos.
- Los cambios hechos desde la PWA a registros ya enviados se reflejan en la fila correspondiente de la planilla.
- Eliminar un registro ya enviado lo marca como inactivo/eliminado sin borrar físicamente la fila ni el historial.
- Solo el usuario administrativo autorizado puede consultar y restaurar registros inactivos.
- Cada modificación, eliminación lógica y restauración queda asociada al usuario autenticado que la realizó.
- El historial registra usuario responsable, fecha/hora, acción y campos modificados.
- El MVP no conserva valores anteriores/nuevos en el historial.
- El agente solo tiene acciones de carga/envío y la sesión permanece activa durante el uso normal.
- El flujo se mantiene dentro del nivel gratuito aprobado o informa claramente antes de habilitar un servicio con costo.
- La suite acordada de pruebas detecta los errores críticos conocidos; el objetivo es reducir el riesgo, no prometer ausencia absoluta de errores.

## Estado

- [x] Relevamiento del proceso (Completado con el archivo real de la Secretaría de Producción)
- [x] Campos y reglas del formulario (Mapeo completo de columnas A a AV para el rubro VID)
- [x] Hoja y columnas de destino (Hoja maestra `REGISTRO` en Google Sheets)
- [x] Definir roles funcionales: agente solo carga/envía; administrador revisa y acepta
- [x] Decisión de integración con Google Sheets (Google Apps Script Webhook / Sheets API gratuito)
- [x] Criterios de aceptación del MVP redactados en `PRUEBAS_ACEPTACION.md` (pendientes de ejecución)
- [EN_PROCESO] Política de duplicados y correcciones (DNI + año/fecha para identificación de registros)
