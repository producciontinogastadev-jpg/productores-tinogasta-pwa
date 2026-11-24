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
dinámica organizacional y los paradigmas de cultura organizacional. También aporta los criterios
metodológicos para el análisis de la información: las reglas de recolección,
el consentimiento y la aplicación de la triangulación de fuentes.

El TP3 define la estructura obligatoria del informe final y exige seleccionar
**tres problemáticas concretas**, explicando para cada una: cuál es el problema,
cómo afecta el funcionamiento, qué sectores involucra y qué consecuencias
genera. También evalúa la **coherencia entre el problema detectado y la
solución propuesta** — ese es el punto que más conviene cuidar.

### 1.2 Informe del TP3

`Informe_TP3_Diagnostico_Organizacional_y_Tecnologico.docx` — 8.372 palabras,
19 tablas, A4 / Arial 11 / interlineado 1.5 / justificado, con índice automático
y paginación.

Estructura: portada · nota metodológica · índice · introducción · I. Diagnóstico
organizacional · II. Diagnóstico tecnológico · III. Tres problemáticas ·
IV. Propuesta de mejora · conclusiones · referencias · anexos A a G.

La metodología del informe es **observación directa de las oficinas y análisis
documental** de los siete perfiles de proyecto y del Registro de Productores.
Los hallazgos se sostienen con evidencia de al menos dos fuentes independientes
(documentos, observación de oficina y observación de campo), según se detalla en
el Anexo E.

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

### 3.2 Enfoque metodológico

El diagnóstico se construyó sobre **observación directa de las dos oficinas**,
**análisis documental** de los siete perfiles de proyecto y del Registro de
Productores, y **observación de campo** en las visitas realizadas. Este enfoque
permite sostener cada hallazgo con dos fuentes independientes sin depender del
relato de una sola persona, y evita que el diagnóstico quede condicionado por la
imagen que la propia área quiera proyectar.

---

## 4. Qué falta

### 4.1 Verificaciones documentales pendientes

El diagnóstico documental está cerrado. Quedan verificaciones menores que no
afectan el resultado del informe y se completarán durante el desarrollo:

- Confirmar la lista definitiva de rubros a cargar (¿cueros y ganadería entran?).
- Calibrar los campos por rubro durante la implementación.
- Frecuencia real de uso del reporte de cierre de jornada (hoy referida como
  mensual).
- Confirmar que no hay licencias ni costos ocultos en la solución propuesta.
- **Diseñar el control de calidad de datos** que complementa la verificación en
  campo manual. Es el requisito que la propuesta original ignoraba.

### 4.2 Criterios ya resueltos en el informe

- La descripción del Registro es la correcta: Registro de Productores en Google
  Sheets, desde 2019, que provee los gráficos de los proyectos.
- El organigrama refleja la cadena observada (jefe → responsable de rama + 2
  personas → productores).
- El Anexo E (triangulación) sostiene cada hallazgo con documento y observación.
- La matriz de entidades y campos se completará junto al desarrollo del MVP.

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
análisis:

1. **No crear un registro paralelo.** El Registro de Productores ya existe. La
   aplicación debe ampliarlo agregándole lote, tarea, fecha y responsable.
2. **Incorporar el control de calidad.** Hoy ese control es la visita al campo
   que hace Walter. Un sistema que solo registre datos sin verificar es peor que
   el proceso actual.

Las propuestas 2 (vitrina web) y 3 (dashboard) siguen sin evaluar en detalle.
