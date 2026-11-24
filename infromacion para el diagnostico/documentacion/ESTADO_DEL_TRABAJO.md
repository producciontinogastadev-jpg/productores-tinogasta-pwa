# Pasantía · estado del trabajo y pendientes

> Fecha de última actualización: 30 de septiembre de 2026
> Todo vive en esta carpeta (`documentacion/`). La raíz no tiene archivos sueltos.

---

## 1. Qué se hizo

### 1.1 Conversión de los apuntes en PDF a Word

| Origen | Destino | Resultado |
|---|---|---|
| `Apunte_Recoleccion_Datos_Pasantia (2).pdf` | `Apunte_Recoleccion_Datos_Pasantia.docx` | Relación de palabras 1.000 — sin pérdida de texto |
| `TP 3 DIAGNOSTICO ORGANIZACIONAL Y TECNOLOGICO 2026.pdf` | `TP3_Diagnostico_Organizacional_y_Tecnologico.docx` | Relación de palabras 1.000 — sin pérdida de texto |

El apunte de cátedra es la base conceptual: define las características de las
organizaciones, los tipos de estructura organizacional, los organigramas, la
dinámica organizacional y los paradigmas de cultura organizacional. También fija
las reglas de entrevista, el consentimiento y la aplicación de triangulación
para el análisis de la información.

El TP3 define la estructura obligatoria del informe final y exige seleccionar
**tres problemáticas concretas**, explicando para cada una: cuál es el problema,
cómo afecta el funcionamiento, qué sectores involucra y qué consecuencias
genera. También evalúa la **coherencia entre el problema detectado y la
solución propuesta** — ese es el punto que más conviene cuidar.

### 1.2 Guía de entrevistas

`Guia_de_Entrevistas_Pasantia.docx` — 30 tablas, instrumento de relevamiento.

- 15 bloques que cubren TP3 Parte I (1 a 5) y Parte II (1 a 5), más los bloques
  de datos, campo, conectividad y datos sensibles.
- Hoja de registro después de cada bloque, para separar lo observado de lo
  referido.
- 5 módulos específicos por proyecto: Cocina Comunitaria, Vivero Anillaco,
  Pequeñas industrias dulceras, CEMA e higos, Curtiembre.
- Mapa de los 7 proyectos de la Secretaría.
- Tabla de 15 supuestos de la propuesta tecnológica a verificar en campo.
- Matriz de entidades y campos, matriz de triangulación, extracción de las tres
  problemáticas, preguntas de cierre y reglas éticas.

### 1.3 Informe del TP3

`Informe_TP3_Diagnostico_Organizacional_y_Tecnologico.docx` — 8.372 palabras,
19 tablas, A4 / Arial 11 / interlineado 1.5 / justificado, con índice automático
y paginación.

Estructura: portada · nota metodológica · índice · introducción · I. Diagnóstico
organizacional · II. Diagnóstico tecnológico · III. Tres problemáticas ·
IV. Propuesta de mejora · conclusiones · referencias · anexos A a G.

> **Advertencia importante.** El contenido de campo de este informe
> (**respuestas, observaciones, triangulación y matriz de supuestos**) fue
> **deducido de los perfiles de proyecto, no relevado en entrevistas**. Está
> marcado como tal en la portada y en el Anexo C. Sirve como modelo con la
> estructura resuelta, no como entrega. Hay que reemplazarlo por datos reales.

---

## 2. Qué se encontró en los documentos

Relevamiento de los perfiles de proyecto de la Secretaría de Producción:

- **No hay organigrama documentado.** Existe un listado público de proyectos en
  el sitio web del municipio, pero no un organigrama con jerarquías ni
  responsabilidades.
- **5 de los 7 proyectos declaran al mismo responsable técnico** (Tec. Agr.
  Dardo T. Morales). ⚠️ Dato documental, no necesariamente la línea jerárquica
  real de la oficina.
- **Ningún proyecto declara cronograma de ejecución ni mecanismo de control de
  avance.** En el vivero, los cronogramas están vacíos.
- **Presupuestos incompletos.** En Curtiembre, 8 de 10 insumos no tienen precio
  unitario, y la capacidad declarada (1.300 cueros/año) no coincide con la
  compra presupuestada (500).
- **Ubicaciones casi siempre sin declarar.** Solo 3 de 7 las tienen.
- **El subproyecto de dulceras ya existe como documento** y calcula sobre ¼ ha
  con rendimientos de 10.000, 5.000 y 12.000 kg/ha. Usa datos del Registro de
  Productores.
- **Ya existe el "Registro de Productores Tinogasteños"**, en Google Sheets,
  desde 2019, y provee los gráficos de los proyectos. → La solución tecnológica
  debe **ampliarlo**, no crear un registro paralelo.
- **El higo aparece en dos proyectos** (CEMA y dulceras) y la ganadería en
  varios. Mismos conceptos con nombres distintos.
- Error de copiado en el proyecto de mermelada de damasco: una columna rotulada
  "cantidad para ¼ ha de **higo**". No citar esa tabla sin corregirlo.
- `PRODUCCION.docx` tiene **0 bloques de texto**: abre, pero parece estar vacío o
  tener todo en imágenes. Pendiente de revisar.

---

## 3. Contexto real de la organización

Aprendido los primeros días de la pasantía. **Es provisional**: la pasantía
recién arranca y hay que ir completándolo.

```
Encargado general o jefe
        │
        ├── Responsable de la rama: WALTER QUIROGA  (guía de la pasantía)
        │        + 2 personas más
        │
        └── Productores
```

**Walter Quiroga** es el responsable de la rama del **Registro de Productores** y
el tutor de la pasantía. Su trabajo no es solo cargar datos:

1. Pide a los productores que completen un **formulario** con todos sus datos.
2. Carga ese formulario en una **planilla de Excel**.
3. Entrega el **carné** al productor.
4. Sale al **campo a comprobar** que lo que escribieron en el formulario sea
   correcto.
5. **Coordina** con las áreas de dulceras, vivero y el resto de los proyectos.
6. También participa de las **ventas**.

Es decir: es el **nodo por donde pasan los productores, sus datos y el contacto
con cada proyecto**. Ese es el proceso central a relevar.

### 3.1 Consecuencias para el diagnóstico

**El paso de verificación en campo es hoy el único control de calidad de datos
del Registro.** Es buena práctica, pero es manual y no está documentado. Si se
digitaliza el Registro sin reproducir ese control, se gana rapidez y se pierde
confiabilidad. Hay que preguntarle a Walter qué hace hoy cuando en campo
encuentra que lo que puso el productor no coincide con la realidad, y si eso
queda anotado en algún lado.

**El dato tiene tres versiones, no dos:** lo que el productor escribió en el
formulario, lo que Walter ve en campo, y lo que queda cargado en el Excel. La
planilla no es una copia del formulario, es una reescritura manual. Formulario y
Excel pueden divergir sin que nadie lo note.

**La Problemática 2 del informe se cae.** Estaba construida sobre "no hay nadie
arriba de la persona que carga los datos". Si hay un encargado general o jefe,
esa tesis tiene que reformularse o eliminarse.

**La Problemática 3 también se cae.** El informe afirmaba que había siete
planillas paralelas sin cruces. Si la rama coordina con dulceras y vivero, el
Registro **sí** es el punto de integración. Lo fragmentado son los datos de
trabajo de campo de cada proyecto, no los datos de productor.

**Las ventas abren un vacío desconocido.** Si Walter vende, hay datos de precio,
volumen y destino de venta que probablemente no se registran en ningún lado.
Vale la pena preguntar.

### 3.2 Advertencia metodológica

Walter es **a la vez el tutor y el entrevistado central, y el responsable de la
rama que se está diagnosticando**. Dos riesgos concretos:

- Va a tender a mostrar lo que funciona, no lo que falla.
- Si el problema resulta estar en cómo se carga el Excel, el diagnóstico se hizo
  sobre el propio tutor.

Mitigaciones ya incorporadas en la guía: no proponer nada durante la entrevista,
y usar a los **productores como contrapeso** — lo que ellos digan del trámite no
depende de la imagen que quiera mantener la Secretaría.

---

## 4. Qué falta

### 4.1 Pendiente prioritario — las entrevistas

Orden sugerido, según la guía:

| # | Perfil | Por qué |
|---|---|---|
| 1 | Walter Quiroga | Sostiene el proceso completo |
| 2 | Encargado general o jefe | Qué decide, qué autoriza, de dónde sale el presupuesto de la rama |
| 3 | Los 2 compañeros de la rama | Reparto real del trabajo, casos que a Walter le llegan después |
| 4 | Al menos 2 productores | Fuente del dato. Únicos que pueden decir si el formulario se entiende |
| 5 | Técnico agrónomo | Y preguntarle cómo le pasa los datos a Walter, cuándo y en qué formato |
| 6 | Operador de campo | Tareas, tiempos, esfuerzo real |

### 4.2 Preguntas que hay que hacer sí o sí

- ¿Qué hace Walter cuando en campo descubre que lo que puso el productor no
  coincide con la realidad? ¿Lo anota? ¿Dónde?
- ¿Cómo coordina con dulceras y vivero? ¿Cada cuánto? ¿En qué formato les pasa
  los datos?
- ¿Los datos de las ventas (precio, volumen, destino) se registran en algún lado?
- ¿Cuántos productores tiene cargados? ¿El formulario es el mismo desde cuándo?
- ¿El Excel es un archivo o varios? ¿Cuántas columnas tiene? ¿Quiénes pueden
  abrirlo?
- Si Walter falta un día, ¿otro puede actualizar el Registro sin consultarle?
- ¿Quién decide qué se compra y qué se reparte a los productores?

### 4.3 Correcciones al informe (hacer DESPUÉS de las entrevistas)

- [ ] Rehacer la Problemática 1 con las **tres versiones** del dato
      (formulario / campo / Excel) en lugar de la doble carga.
- [ ] Eliminar o reformular la Problemática 2.
- [ ] Eliminar o reformular la Problemática 3.
- [ ] Reescribir la descripción del Registro: es Excel + carné + verificación en
      campo, no "Google Sheets actualizado cada 6 meses desde imágenes
      satelitales". Confirmar si además sigue usando Sheets.
- [ ] Rehacer el organigrama con la cadena real (jefe → Walter + 2 → productores).
- [ ] Reasignar R1 / R2 / R3 a las personas reales, o dejarlos como códigos y
      asociarlos aparte. **Hoy R1 está definido como "técnico agrónomo
      responsable de los 7 proyectos", lo que ya no coincide con Walter.**
- [ ] Reemplazar el Anexo C (respuestas) por lo que digan los entrevistas.
- [ ] Revisar la afirmación de la Problemática 2 sobre "no hay un segundo
      referente de datos".
- [ ] Cumplimentar la matriz de entidades y campos junto a quien carga.
- [ ] Revisar `PRODUCCION.docx` (0 bloques de texto).

### 4.4 Verificar de la propuesta tecnológica

- [ ] Confirmar la lista real de rubros (¿cueros y ganadería entran?).
- [ ] Contar los campos reales por rubro (se relevaron 24 en total, no 100 por registro).
- [ ] Confirmar si el reporte de cierre de jornada se mira a diario o mensual.
- [ ] Relevar marca, modelo y versión de Android de los equipos de campo.
- [ ] Confirmar que no hay licencias ni costos ocultos.
- [ ] **Diseñar el control de calidad de datos** que reemplaza la verificación
      en campo manual. Es el requisito que la propuesta original ignoraba.

---

## 5. Inventario de archivos

### Fuentes originales
| Archivo | Qué es |
|---|---|
| `Apunte_Recoleccion_Datos_Pasantia (2).pdf` | Apunte de cátedra. Herramientas de recolección de datos |
| `TP 3 DIAGNOSTICO ORGANIZACIONAL Y TECNOLOGICO 2026.pdf` | Consigna del trabajo |
| `CEMA.docx` | Centro Experimental, parcelas demostrativas, higos |
| `CURTIEMBRE.docx` | Industrialización de cueros |
| `COCINA COMUNITARIA.docx` | Museo del Sabor |
| `VIVERO ANILLACO.docx` | Vivero provincial, distrito Anillaco |
| `ESTERILIZACION DE ANIMALES DOMESTICOS.docx` | Canino y felino |
| `PRODUCCION.docx` | Producción intensiva bajo cubierta — **vacío, revisar** |
| `subproyecto pequeñas industrias dulceras.docx` | Registro de Productores, Copacabana y Los Palacios |
| `primer proyecto o propuesta.docx` | PWA + Firebase Firestore + Google Sheets |
| `primera propuesta.docx` | Versión extendida de la primera |
| `segunda propuesta.docx` | Vitrina web con WhatsApp |
| `tercer Propuesta.docx` | Dashboard de indicadores — dejarla de reserva |

### Convertidos
- `Apunte_Recoleccion_Datos_Pasantia.docx`
- `TP3_Diagnostico_Organizacional_y_Tecnologico.docx`

### Trabajos propios
- `Guia_de_Entrevistas_Pasantia.docx`
- `Informe_TP3_Diagnostico_Organizacional_y_Tecnologico.docx`

### Generadores del informe
- `_informe.py` — datos, tablas de referencia y funciones de formato
- `_build.py` — arma el documento

Para regenerar el informe:

```
cd "D:/Escritorio/infromacion para el diagnostico/documentacion" && python _build.py
```

Se sobrescribe el `.docx` existente. Si vas a corregir el informe a mano sobre el
Word, no lo ejecutes o perdés los cambios.

---

## 6. Estado de la primera propuesta

La PWA con Firestore y Google Sheets para captura de datos en campo **sigue en
pie como solución**, pero con dos correcciones de diseño que surgieron del
relevamiento:

1. **No crear un registro paralelo.** El Registro de Productores ya existe. La
   aplicación debe ampliarlo agregándole lote, tarea, fecha y responsable.
2. **Incorporar el control de calidad.** Hoy ese control es la visita al campo
   que hace Walter. Un sistema que solo registre datos sin verificar es peor que
   el proceso actual.

Las propuestas 2 (vitrina web) y 3 (dashboard) siguen sin evaluar en detalle.
