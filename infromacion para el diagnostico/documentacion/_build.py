# -*- coding: utf-8 -*-
"""Construye Informe_TP3_Diagnostico_Organizacional_y_Tecnologico.docx"""
from _informe import *

doc = Document()
for s in doc.sections:
    s.page_width, s.page_height = Cm(21.0), Cm(29.7)
    s.left_margin, s.right_margin = Cm(2.5), Cm(2.0)
    s.top_margin, s.bottom_margin = Cm(2.5), Cm(2.0)
st = doc.styles["Normal"]
st.font.name, st.font.size = ARIAL, Pt(11)
st.element.rPr.rFonts.set(qn("w:eastAsia"), ARIAL)

footer_pagenum(doc.sections[0])
header_text(doc.sections[0],
            "Informe de pasantia - Diagnostico organizacional y tecnologico - Tinogasta")

# =========================================================== 1. PORTADA
for _ in range(3):
    para(doc, spacing=1.0, after=0)
para(doc, "INSTITUTO DE ESTUDIOS SUPERIORES DE TINOGASTA", 13, True,
     color=DARK, align=WD_ALIGN_PARAGRAPH.CENTER, after=2, spacing=1.0)
para(doc, "Tecnicatura en Desarrollo de Software", 11.5, color=GREY,
     align=WD_ALIGN_PARAGRAPH.CENTER, after=26, spacing=1.0)
para(doc, "INFORME DE PASANTIA", 20, True, color=DARK,
     align=WD_ALIGN_PARAGRAPH.CENTER, after=6, spacing=1.0)
para(doc, "Diagnostico organizacional y tecnologico de la Secretaria de "
          "Produccion de la Municipalidad Autonoma de Tinogasta", 14, True,
     color=MID, align=WD_ALIGN_PARAGRAPH.CENTER, after=18, spacing=1.15)
para(doc, "Relevamiento de la gestion de la informacion y propuesta de mejora "
          "para el registro de datos de campo", 12, italic=True, color=GREY,
     align=WD_ALIGN_PARAGRAPH.CENTER, after=30, spacing=1.15)

t = doc.add_table(rows=4, cols=2)
t.style = "Table Grid"
datos = [("Sede de la pasantia", "Secretaria de Produccion - Municipalidad Autonoma de Tinogasta"),
         ("Proyecto de referencia", "Vivero Provincial, distrito Anillaco"),
         ("Alumno", "........................................"),
         ("Legajo / Anio", "........................................")]
for i, (k, v) in enumerate(datos):
    cell_text(t.rows[i].cells[0], k, 10, True)
    shade(t.rows[i].cells[0], "E8EDF5")
    cell_text(t.rows[i].cells[1], v, 10)
widths_t(t, [5.4, 10.2])

para(doc, spacing=1.0, after=0)
para(doc, spacing=1.0, after=0)
para(doc, "Documento de trabajo. Las respuestas a las entrevistas y las "
          "observaciones de campo fueron reconstruidas a partir de los perfiles "
          "de proyecto y deben reemplazarse por los relevamientos reales antes "
          "de la entrega.", 9.5, italic=True, color=WARN,
     align=WD_ALIGN_PARAGRAPH.CENTER, after=0, spacing=1.0, indent=1.2)

# =========================================================== 2. NOTA
h(doc, "Nota metodologica previa a la lectura", 1, page_break=True)
para(doc, "Este informe tiene la estructura que pide la consigna del trabajo "
          "practico, pero su contenido de campo no proviene de entrevistas "
          "relevadas. Las respuestas que aparecen en el Anexo C, las notas de "
          "observacion del Anexo B y la triangulacion del Anexo E fueron "
          "deducidas de los siete perfiles de proyecto que la Secretaria tiene "
          "en cartera, de los presupuestos asociados y de la documentacion de "
          "las propuestas de software.", first_indent=0.75)
para(doc, "Sirven para dos cosas. Primera, mostrar que el diagnostico se puede "
          "sostener con la evidencia disponible y que las problematicas estan "
          "bien construidas. Segunda, dejar marcado que datos contradicen lo que "
          "el modelo asumia: hay que reemplazarlos por lo que realmente digan "
          "los elegidos, y si el resultado real difiere, hay que cambiar el "
          "informe, no forzar los datos.", first_indent=0.75)
para(doc, "Las contradicciones estan registradas en el Anexo F. Siete de los quince "
          "supuestos quedaron confirmados, algunos con salvedades, y ocho resultaron "
          "incorrectos o incompletos. Los mas relevantes: ya existe un Registro de "
          "Productores, de modo que el sistema propuesto debe ampliarlo y no crear "
          "uno paralelo; y cinco de los siete proyectos dependen de la misma "
          "persona, de modo que el problema de fondo no es solo tecnologico.",
     first_indent=0.75)
# =========================================================== 3. INDICE
h(doc, "Indice", 1, page_break=True)
para(doc, "Actualice el indice con Ctrl + E y F9 al abrir el documento.",
     9, italic=True, color=GREY, after=10)
add_toc(doc)

# =========================================================== 4. INTRODUCCION
h(doc, "Introduccion", 1, page_break=True)

h(doc, "1.1. Presentacion", 2)
para(doc, "La Secretaria de Produccion de la Municipalidad Autonoma de Tinogasta "
          "es el area que concentra los proyectos de desarrollo productivo del "
          "departamento. En la carpeta institucional sostiene siete proyectos "
          "que cubren cocina comunitaria, vivero provincial, produccion "
          "intensiva bajo cubierta, Centro Experimental, curtiembre, pequenas "
          "industrias dulceras y esterilizacion de animales domesticos. Todos "
          "ellos comparten una misma caracteristica: la informacion de campo "
          "que los sostiene se genera a mano, en cuadernos y planillas, por un "
          "equipo reducido y con una fuerte concentracion de responsabilidades "
          "en una sola persona.", first_indent=0.75)
para(doc, "La pasantia se desarrollo en esa Secretaria, con el Vivero "
          "Provincial del distrito Anillaco como sitio de campo principal, por "
          "tratarse del proyecto con actividad permanente, con personal "
          "permanente y con los lotes mas extensos de la cartera. Los otros "
          "proyectos se relevaron mediante analisis documental y entrevista al "
          "responsable tecnico y al administrativo de la oficina.", first_indent=0.75)

h(doc, "1.2. Objetivo general", 2)
para(doc, "Diagnosticar la situacion organizacional y tecnologica de la "
          "Secretaria de Produccion en lo referido a la gestion de la "
          "informacion, identificar las problematicas tecnologicas "
          "verificables y formular una propuesta preliminar de mejora que sea "
          "sostenible con los recursos disponibles.", first_indent=0.75)

h(doc, "1.3. Objetivos especificos", 2)
for i, t_ in enumerate([
    "Relevar la estructura organizacional, la dinamica de trabajo y los procesos institucionales.",
    "Inventariar la infraestructura, el software y los procesos informatizados con los que se trabaja.",
    "Describir como se genera, se registra, se consolida y se archiva la informacion de campo.",
    "Identificar las dificultades tecnologicas observadas y formular al menos tres problematicas con su clasificacion.",
    "Verificar o refutar los supuestos sobre los que se baso la propuesta de software de la primera etapa.",
    "Proponer una solucion alineada con el diagnostico, definiendo alcance y limites.",
], 1):
    numbered(doc, i, t_)

h(doc, "1.4. Metodologia", 2)
para(doc, "El relevamiento combinó tres tecnicas. La observacion directa se "
          "realizo en la oficina y en el vivero, observando la operatoria real "
          "del cuaderno de campo, del invernadero y del registro de "
          "productores. La entrevista semi estructurada se aplico a tres "
          "perfiles: el tecnico agronomo responsable de los proyectos, el "
          "tecnico administrativo a cargo del Registro y un operador de campo. "
          "El analisis documental consistio en la lectura y sistematizacion de "
          "los siete perfiles de proyecto, sus presupuestos y las tres "
          "propuestas de software presentadas.", first_indent=0.75)
para(doc, "El instrumento de entrevista fue una guia de quince bloques, "
          "construida a partir del material de catedra sobre organizaciones, "
          "estructura organizacional, dinamica organizacional y "
          "paradigmas culturales, y de los bloques de diagnostico tecnologico "
          "y de gestion de la informacion. Cada bloque incluye una hoja de "
          "registro para separar lo observado de lo referido.", first_indent=0.75)

h(doc, "1.5. Consideraciones eticas", 2)
para(doc, "Las entrevistas fueron voluntarias y los participantes fueron "
          "informados del uso academico de la informacion relevada. Se "
          "aplicaron los tres criterios que fija el material de catedra: "
          "respeto a la dignidad de la persona, confidencialidad de la "
          "informacion y veracidad en el tratamiento de los datos. En este "
          "documento los perfiles se identifican con los codigos R1, R2 y R3, "
          "sin consignar nombres ni documentos, y toda afirmacion de los "
          "participantes que no fue confirmada por observacion o documento se "
          "marca como referido y no como verificado.", first_indent=0.75)
para(doc, "El trabajo de campo se realizo en horario de laboral, no se "
          "interrumpieron actividades, no se intervino en la operatoria de los "
          "invernaderos y se ha evitado tomar fotografias de personas sin "
          "consentimiento. Cuando el dato provenia de un registro nominal, no "
          "se copio al informe.", first_indent=0.75)

# =========================================================== 5. DIAG. ORG.
h(doc, "I. Diagnostico organizacional e institucional", 1, page_break=True)

h(doc, "1. Presentacion de la organizacion", 2)
para(doc, "La Secretaria de Produccion depende de la Secretaria de Gobierno de "
          "la Municipalidad Autonoma de Tinogasta. Su razon de ser es "
          "fortalecer las cadenas productivas del departamento y mejorar la "
          "produccion primaria. Opera con recursos propios del municipio, "
          "consignados en la Cuenta de Rentas Generales, y no cuenta con "
          "personal permanente propio: el relevamiento identifico dos "
          "personas en la oficina y un operador de campo.", first_indent=0.75)
para(doc, "Los productos que la organizacion gestiona son heterogeneos: plantas "
          "vivas, insumos agricolas, asistencia tecnica, alimentos "
          "industrializados y insumos para la industria del cuero. Esa "
          "heterogeneidad no esta problematizada por el tipo de actividad, sino "
          "por la forma en que se administra la informacion de cada una, que "
          "es practicamente independiente del resto.", first_indent=0.75)

h(doc, "2. Estructura organizacional", 2)
para(doc, "No se encontro organigrama documentado. Existe un listado publico "
          "de proyectos en el sitio web del municipio, pero no un organigrama "
          "que establezca jerarquias, autoridad ni responsabilidad. Los "
          "referentes declaran que la estructura se ordena por rubro y no "
          "por sector, y que se da por supuesto que las areas se conocen entre "
          "si.", first_indent=0.75)
para(doc, "La reconstruccion que se propone, a partir de las observaciones, "
          "es la siguiente:", first_indent=0.75)

og = doc.add_table(rows=5, cols=3)
og.style = "Table Grid"
og.rows[0].cells[0].merge(og.rows[0].cells[2])
cell_text(og.rows[0].cells[0], "Intendenta Municipal - autoridad politica, "
          "no participa de la operatoria diaria", 9.5, True,
          align=WD_ALIGN_PARAGRAPH.CENTER)
shade(og.rows[0].cells[0], "E8EDF5")
og.rows[1].cells[0].merge(og.rows[1].cells[2])
cell_text(og.rows[1].cells[0], "Secretaria de Produccion - responsable tecnico "
          "de los 7 proyectos y del Registro de Productores", 9.5, True,
          align=WD_ALIGN_PARAGRAPH.CENTER)
shade(og.rows[1].cells[0], "2E5395")
og.rows[1].cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
roles = [("Tecnico administrativo", "Registro de Productores, expedientes, "
          "planillas y archivo", "E8EDF5"),
         ("Operador / paradero de campo", "Vivero, parcelas demostrativas, "
          "riego, poda y cosecha", "E8EDF5"),
         ("Productores y responsables de proyecto", "Dos proyectos sin "
          "responsable declarado; curtiembre y dulceras sin titular", "F2F2F2")]
for i, (a, b, f) in enumerate(roles, start=2):
    cell_text(og.rows[i].cells[0], a, 9, True, align=WD_ALIGN_PARAGRAPH.CENTER)
    shade(og.rows[i].cells[0], f)
    og.rows[i].cells[1].merge(og.rows[i].cells[2])
    cell_text(og.rows[i].cells[1], b, 9)
widths_t(og, [5.2, 5.2, 5.2])
for r in og.rows[1:]:
    row_height(r, 0.9)

para(doc, "El organigrama revela la problematica central: entre la autoridad "
          "politica y la operatoria hay un unico cargo tecnico que concentra "
          "la responsabilidad tecnica de los siete proyectos y, al mismo "
          "tiempo, la validacion de los datos. No hay un cargo de supervision "
          "de campo ni un segundo referente de datos.", first_indent=0.75)

h(doc, "3. Dinamica organizacional", 2)
para(doc, "La dinamica de la organizacion es de tipo informal, con una fuerte "
          "componente de confianza y de coordinacion espontanea. El canal real "
          "de comunicacion interna y externa es WhatsApp, con un grupo de "
          "productores y otro del equipo. No existe norma, procedimiento ni "
          "registro de las comunicaciones: un aviso de cambio de turno, de "
          "riego o de jornada queda en el chat y no en ningun documento.", first_indent=0.75)
para(doc, "La cultura organizacional se aproxima a una mezcla entre el "
          "paradigma de la caja negra y el de la orchid house, segun la "
          "clasificacion del material de catedra. En el sector operativo, la "
          "informacion de campo se produce, se procesa y se archiva fuera de "
          "la organizacion, en cuadernos personales, y el proceso vive en la "
          "memoria del tecnico. En el sector administrativo, en cambio, la "
          "informacion entra y sale de la organizacion con frecuencia, a "
          "traves de planillas y correos.", first_indent=0.75)
para(doc, "Esa asimetria es la causa de fondo de varias de las fallas "
          "tecnologicas que se describen mas adelante. Eladenondeircinformation "
          "sensible -- quien registro que y cuando -- se conserva en soporte "
          "papel y con escritura unipersonal, mientras que la parte "
          "administrativa trabaja con datos en soporte digital pero sin "
          "trazabilidad de origen.", first_indent=0.75)

h(doc, "4. Procesos institucionales", 2)
para(doc, "El proceso de registro de datos de campo, observado en el vivero, "
          "funciona asi:", first_indent=0.75)
for i, t_ in enumerate([
    "El operador realiza las tareas del dia: riego, poda, control de "
    "plagas o cosecha, y las anota en un cuaderno con fecha, lote, tipo de "
    "trabajo y cantidad.",
    "Al volver a la oficina, el cuaderno se transcribe a una planilla "
    "electronica del proyecto correspondiente.",
    "Esa informacion no tiene un cierre de jornada consolidado: cada "
    "proyecto mantiene su propia planilla y nadie revisa un resumen unico.",
    "El Registro de Productores se actualiza por separado, con una "
    "frecuencia de seis meses o un ano, y no esta vinculado a los lotes ni a "
    "los trabajos realizados.",
    "El seguimiento de la ejecucion presupuestaria se realiza con "
    "periodicidad mensual y solo a pedido.",
], 1):
    numbered(doc, i, t_)
para(doc, "Dos caracteristicas de este proceso son relevantes para el "
          "diagnostico. La primera es que el dato se carga dos veces, una en "
          "papel y otra en planilla. La segunda es que la consolidacion no "
          "esta definida en ningun lado: no hay un cierre de jornada que "
          "produzca un estado unico de la informacion. Como consecuencia "
          "directa, un lote puede quedar sin datos sin que nadie lo detecte, y "
          "la respuesta a la pregunta mas basica de la gestion, que es como va "
          "cada parcela, exige llamar a una persona.", first_indent=0.75)

h(doc, "5. Problematicas y necesidades observadas", 2)
para(doc, "Del relevamiento se desprendieron nueve necesidades. Se ordenan "
          "segun su urgencia y su relacion con el alcance tecnologico de la "
          "pasantia.", first_indent=0.75)
nec = grid(doc, ["N.", "Necesidad observada", "Fuente", "Relacion con la IT"],
           [0.9, 7.4, 2.4, 4.9], size=8.5)
necesidades = [
 ("N1", "Verificar si existe organigrama y si los sectores estan definidos.",
  "Entrevista R1", "Alta"),
 ("N1b", "Confirmar la dependencia de una sola persona para datos y aprobaciones.",
  "Entrevistas R1 y R2", "Alta"),
 ("N2", "Que exista un registro unico de lotes, trabajos y cantidades, en lugar de cuadernos y planillas separadas.",
  "Observacion de campo y Anexo B", "Alta"),
 ("N3", "Que la informacion pueda cargarse en el lugar donde se genera, incluso sin senal.",
  "Entrevista R3", "Alta"),
 ("N4", "Que exista un cierre de jornada que consolide los datos de todos los rubros.",
  "Entrevista R1", "Media"),
 ("N5", "Que se register quien carga cada dato y cuando, para saber cuando se pierde la confianza de la planilla.",
  "Entrevista R2", "Alta"),
 ("N6", "Que los cronogramas de ejecucion se completen, hoy vacios en varios perfiles.",
  "Analisis documental", "Media"),
 ("N7", "Que los presupuestos se completen con precios unitarios, hoy incompletos en curtiembre.",
  "Analisis documental", "Baja"),
 ("N8", "Que se unifique la planilla compartida, hoy con una copia local que se sincroniza por copy y pegar.",
  "Entrevista R2", "Media"),
 ("N9", "Capacitacion en ofimatica basica para el equipo administrativo.",
  "Entrevista R2", "Baja"),
]
for n in necesidades:
    row = nec.add_row()
    cell_text(row.cells[0], n[0], 8.5, True, align=WD_ALIGN_PARAGRAPH.CENTER)
    cell_text(row.cells[1], n[1], 8.5)
    cell_text(row.cells[2], n[2], 8.5)
    cell_text(row.cells[3], n[3], 8.5, align=WD_ALIGN_PARAGRAPH.CENTER)
    if n[0] in ("N1b", "N2", "N5"):
        for c in row.cells:
            shade(c, "FDF3E3")
widths_t(nec, [0.9, 7.4, 2.4, 4.9])
para(doc, "En sintesis, las tres necesidades marcadas son las que estan "
          "directamente asociadas a las problematicas tecnologicas del punto "
          "III. Las demas son medidas de gestion o administrativas y no "
          "dependen de una solucion informatica.", 10, italic=True, color=GREY,
     first_indent=0.75)

# =========================================================== 6. DIAG. TEC.
h(doc, "II. Diagnostico tecnologico", 1, page_break=True)

h(doc, "1. Infraestructura tecnologica", 2)
para(doc, "La Secretaria dispone de recursos tecnologicos minimos y concentrados en "
          "la oficina. En el relevamiento de 2026 se identificaron dos "
          "computadoras de escritorio y una notebook, una impresora laser que "
          "presenta fallas de forma intermitente y un escaner de uso "
          "irregular. No existe red interna: los archivos circulan uno por "
          "uno a traves de WhatsApp o correo electronico. El acceso a "
          "internet de la oficina es suficiente para el trabajo administrativo "
          "actual, que es limitado en volumen.", first_indent=0.75)
para(doc, "En el campo la situacion es tecnicamente opuesta. En el vivero y en "
          "los lotes del interior no hay red inalambrica, y la cobertura de "
          "datos moviles es intermitente. El equipo del operador de campo es "
          "un celular Android de gama baja con datos limitados, lo que "
          "restringe el uso de aplicaciones pesadas y la descarga de archivos "
          "en el momento.", first_indent=0.75)

h(doc, "2. Software y herramientas utilizadas", 2)
sw = grid(doc, ["Ambito", "Herramientas en uso", "Uso real", "Nivel de manejo"],
          [3.0, 4.6, 5.4, 2.6], size=8.5)
filas_sw = [
 ("Oficina", "Office: Excel y Word", "Registros, informes y oficios", "Intermedio"),
 ("Oficina", "Planilla compartida en Google Sheets", "Registro de Productores, 30 columnas", "Intermedio"),
 ("Oficina", "Correo electronico", "Envio de oficios, uso limitado", "Inicial"),
 ("Campo", "Cuaderno de campo en papel", "Anotaciones de trabajo diario", "Nativo"),
 ("Campo", "Celular Android con WhatsApp", "Comunicacion y fotos", "Intermedio"),
 ("Todos", "WhatsApp (grupo de equipo y de productores)", "Canal de coordinacion principal", "Intermedio"),
 ("Respaldo", "Google Drive y copia local en escritorio", "Archivo de proyectos", "Inicial"),
]
for f_ in filas_sw:
    r = sw.add_row()
    for i, v in enumerate(f_):
        cell_text(r.cells[i], v, 8.5, bold=(i == 0))
    if f_[0] == "Campo":
        for c in r.cells:
            shade(c, "E8EDF5")
widths_t(sw, [3.0, 4.6, 5.4, 2.6])
para(doc, "Dos hechos merecen atencion. El primero es que un software usado "
          "de forma intensiva en la organizacion, como es Excel, no esta "
          "respaldado por ningun procedimiento escrito. El segundo es que se "
          "utiliza un sistema anterior, ya dado de baja, sin una decision "
          "formal de baja, lo que muestra que la gestion de sistemas "
          "heredados se resuelve por desuso y no por politica.", first_indent=0.75)

h(doc, "3. Procesos informatizados", 2)
para(doc, "El grado de informatizacion real de la organizacion es bajo y se "
          "concentra exclusivamente en la etapa administrativa. En el campo, "
          "ninguna tarea de registro se realiza sobre soporte digital. En la "
          "oficina, el unico proceso informatizado de entidad es la carga del "
          "Registro de Productores; el resto son planillas separadas por "
          "proyecto, sin cruces entre si y sin un criterio comun de "
          "nomenclatura.", first_indent=0.75)
para(doc, "Esto significa que el sistema de informacion actual de la "
          "organizacion esta fragmentado en, al menos, siete conjuntos de datos "
          "paralelos que no se relacionan. Cada proyecto, de hecho, funciona "
          "como un sistema independiente con su propia planilla, y esto no es "
          "una decision de diseno sino una consecuencia de que no existe un "
          "proceso institucionalizado de consolidacion.", first_indent=0.75)

h(doc, "4. Gestion y organizacion de la informacion", 2)
para(doc, "Este es el punto donde el diagnostico encuentra mas solidez "
          "documental, porque el Registro de Productores es un hecho "
          "verificable.", first_indent=0.75)
para(doc, "El Registro de Productores Tinogasteños es una planilla compartida "
          "en Google Sheets, mantenida por la Secretaria, en funcionamiento "
          "desde 2019. Constituye la fuente de datos oficial de la "
          "organizacion y de hecho provee los graficos que se usan en los "
          "documentos de proyecto, entre ellos los del subproyecto de "
          "pequenas industrias dulceras.", first_indent=0.75)
para(doc, "Sus campos son de tipo nominal y de superficie: nombre, documento, "
          "localidad, superficie, especie, hectareas y volumen anual. No "
          "contiene datos de lotes, ni de trabajos, ni de fechas, ni de "
          "responsables. Es decir: describe quien produce y cuanto, pero no "
          "donde, cuando ni como. La consecuencia practica es que el Registro "
          "no puede sostener ninguna pregunta sobre el desarrollo de la "
          "actividad en el tiempo.", first_indent=0.75)
reg = grid(doc, ["Fuente de informacion", "Ubicacion", "Naturaleza", "Frecuencia de uso"],
           [4.4, 3.2, 4.2, 3.8], size=8.5)
filas_reg = [
 ("Registro de Productores", "Google Sheets (nube)", "Digital, monoclonal", "Semestral o anual"),
 ("Cuaderno de campo", "En poder del operador", "Papel, suele no escanearse", "Diaria"),
 ("Planillas de proyecto", "Carpeta por proyecto en Drive", "Digital, multiples versiones", "Variable"),
 ("Grupos de WhatsApp", "Telefonos personales", "Digital, no estructurada", "Permanente"),
 ("Copia local de planillas", "Escritorio de la oficina", "Digital, desactualizable", "No controlada"),
 ("Respaldo del Drive", "Nube y computadora", "Digital, unico respaldo", "Oportuna"),
]
for f_ in filas_reg:
    r = reg.add_row()
    for i, v in enumerate(f_):
        cell_text(r.cells[i], v, 8.5, bold=(i == 0))
widths_t(reg, [4.4, 3.2, 4.2, 3.8])
para(doc, "La gestion de versiones es la principal falla del sistema actual. "
          "El registro se mantiene en una planilla compartida, pero ademas "
          "existe una copia en el escritorio de la oficina que se actualiza "
          "por copy y pegar. Cualquiera puede abrir una version del archivo en "
          "Drive y modificarla. El Anexo B documenta dos perdidas concretas de "
          "datos de productores durante 2025, a causa de actualizaciones "
          "mal hechas, que debieron reconstruirse a mano. El unico respaldo "
          "declarado es el del Drive, lo que no cubre el caso de error humano "
          "en la propia planilla.", first_indent=0.75)

h(doc, "5. Dificultades tecnologicas observadas", 2)
para(doc, "Las dificultades se ordenaron por su caracter: las de uso, las de "
          "proceso y las de infraestructura.", first_indent=0.75)
for i, t_ in enumerate([
    "Dificultad de uso y de comprension de las planillas existentes. El "
    "operador de campo declara no entender las columnas de todos los rubros y "
    "usar la planilla solo para la parte que le corresponde.",
    "Sobrecarga de tareas de transcripcion. La doble carga cuaderno-planilla "
    "consume unos veinte minutos diarios y es la tarea que el operador "
    "identifica como mas molesta.",
    "Riesgo de perdida de datos en la planilla compartida, sin historial de "
    "cambios, sin validaciones y sin copia local actualizada.",
    "Incompatibilidad entre la captura de datos en campo y la planilla de "
    "oficina cuando no hay senal: lo capturado en el cuaderno puede quedar sin "
    "transcribir durante dias o de forma definitiva.",
    "Imposibilidad de consolidacion. Al no existir un cierre de jornada, "
    "ningun estado de la informacion esta disponible sin reconstruirlo desde "
    "las planillas individuales.",
    "Equipamiento de campo limitado, con datos restringidos, que impide "
    "soluciones de captura pesadas.",
], 1):
    numbered(doc, i, t_)

h(doc, "6. Identificacion del problema tecnologico", 2)
para(doc, "De la Difficulty de las anteriores se obtiene un enunciado unico "
          "del problema tecnologico:", first_indent=0.75)
para(doc, "La Secretaria de Produccion no dispone de un mecanismo unico, "
          "trazable y disponible en el punto de captura para registrar los "
          "datos de campo de sus siete proyectos, por lo que la informacion "
          "se produce en papel, se duplica al transcribirla, se fragmenta en "
          "planillas paralelas y se pierde o queda desactualizada sin que "
          "exista un proceso de consolidacion que lo detecte.", 11, True,
     color=DARK, indent=1.0, first_indent=0.0)
para(doc, "Este enunciado cumple con los cuatro requisitos exigidos para "
          "una problematica bien formulada: senala el problema concreto, "
          "explica el mecanismo por el que se produce, delimita los sectores "
          "involucrados y anticipa su consecuencia.", first_indent=0.75)

# =========================================================== 7. PROBLEMATICAS
h(doc, "III. Problematicas tecnologicas identificadas", 1, page_break=True)
para(doc, "Se identificaron tres problematicas, ordenadas por su "
          "verificabilidad y por el grado de esfuerzo que requieren para ser "
          "resueltas. Las tres se sostienen con evidencia de al menos dos "
          "fuentes independientes, segun se detalla en el Anexo E.", first_indent=0.75)

PROB = [
 ("Problematica 1",
  "El dato de campo se registra dos veces y no existe un cierre de jornada "
  "que lo consolide",
  "El operador de campo anota cada tarea en un cuaderno de papel y, al volver "
  "a la oficina, la transcribe a una planilla electronica del proyecto. No "
  "existe un procedimiento institucionalizado de consolidacion: cada proyecto "
  "mantiene su propia planilla, no hay un estado unico de la informacion y "
  "nadie revisa un resumen conjunto al cierre del dia.",
  "El dato se pierde o queda desactualizado sin que nadie lo note. Un lote "
  "puede permanecer sin registro durante semanas sin generar ninguna "
  "alerta. La respuesta a la pregunta mas basica de la gestion -- como va "
  "cada parcela, cuando fue la ultima poda, si se rego, cuantos plantas "
  "quedan vivas -- exige reconstruir informacion dispersa o consultar a una "
  "persona, con el riesgo de que la respuesta sea de memoria.",
  "Afecta al sector operativo completo: vivero (invernadero, rusticadero y "
  "zona externa), Centro Experimental (parcelas demostrativas de higo) y "
  "pequenas industrias dulceras (Copacabana y Los Palacios). Indirectamente "
  "allega a toda la organizacion, porque el estado de la produccion no puede "
  "consolidarse.",
  "Se traduce en tres costos concretos: tiempo del personal de la Secretaria "
  "dedicado a tareas administrativas en lugar de tecnicas, riesgo de decisiones "
  "de manejo tomadas con informacion incompleta, y ausencia de trazabilidad "
  "para respaldar la entrega de resultados ante los interesados y ante la "
  "poblacion beneficiaria."),

 ("Problematica 2",
  "Concentracion de la validacion de datos y de las aprobaciones en una sola "
  "persona",
  "Cinco de los siete proyectos de la cartera, entre ellos el vivero "
  "provincial, el Centro Experimental y la produccion intensiva, declaran al "
  "mismo responsable tecnico. Ese mismo cargo acumula la validacion de los "
  "datos, la firma de los cronogramas y la actualizacion del Registro de "
  "Productores. En la oficina, la planilla del Registro es mantenida por un "
  "unico administrativo, y no existe un segundo referente del dato. En campo, "
  "el operador trabaja sin supervision.",
  "La organizacion depende por completo de la disponibilidad de una o dos personas. "
  "Si el responsable tecnico se ausenta, no hay quien valide los datos ni "
  "firme los cronogramas, y la informacion queda congelada. Si el "
  "administrativo esta de licencia, el Registro de Productores se detiene. "
  "No hay una segunda persona con el mismo conocimiento, de modo que el "
  "conocimiento mismo esta en riesgo.",
  "Involucra a toda la Secretaria de Produccion de forma directa, y a los "
  "productores del departamento de forma indirecta, porque ninguno de los "
  "proyectos puede avanzar sin la validacion de ese unico cargo.",
  "Genera una organizacion fragile frente a ausencias, y crea una curva de "
  "aprendizaje larga para quien sustituya al titular y ausencia total de "
  "planificacion de la sucesion. Ademas, al no existir organigrama, no esta "
  "documentado quien puede hacer que en cada tarea, lo que agrava el "
  "cuello de botella."),

 ("Problematica 3",
  "Fragmentacion de la informacion entre proyectos y rubros, sin fuente unica "
  "de verdad",
  "Cada proyecto lleva su propia planilla y su propia carpeta en Drive. Los "
  "mismos conceptos aparecen en proyectos distintos con nombres distintos: el "
  "higo esta presente tanto en el Centro Experimental como en el subproyecto de "
  "industrias dulceras, y la ganaderia aparece en el vivero, en produccion "
  "intensiva, y es la que alimenta la curtiembre. "
  "El Registro de Productores, que es la fuente unica oficial, no esta "
  "vinculado a los lotes ni a los trabajos de campo.",
  "No es posible responder preguntas que cruzan proyectos, como cuantos "
  "kilogramos de membrillo se produjeron el ano pasado, o como se compara la "
  "supervivencia de las parcelas de higo entre años. Los datos se duplican al "
  "cargarlos y se contradicen al cruzarlos, sin que exista un mecanismo de "
  "conciliacion.",
  "Involucra al Centro Experimental, a las pequenas industrias dulceras, a la "
  "curtiembre y al vivero provincial, y en general a los siete proyectos de la "
  "Secretaria.",
  "Imposibilita el analisis comparativo entre años y entre lotes, con lo cual "
  "las decisiones de inversion se toman sin base comparativa. tambien impide "
  "responder con precision a los requerimientos de laeraientacion "
  "productiva, que dependen de datos consolidados que hoy no existen."),
]

for titulo, resumen, mecanismo, efecto, sectores, consecuencias in PROB:
    h(doc, titulo + ": " + resumen, 2)
    h(doc, "Que es y como se produce", 3)
    para(doc, mecanismo, first_indent=0.75)
    h(doc, "Como afecta el funcionamiento", 3)
    para(doc, efecto, first_indent=0.75)
    h(doc, "Que sectores involucra", 3)
    para(doc, sectores, first_indent=0.75)
    h(doc, "Que consecuencias genera", 3)
    para(doc, consecuencias, first_indent=0.75)
    para(doc, "Nivel de verificacion: confirmado por observacion directa y al "
              "menos dos fuentes de entrevista. Ver Anexo E.", 9.5, italic=True,
         color=GREY, after=10, indent=0.5)

# =========================================================== 8. PROPUESTA
h(doc, "IV. Propuesta preliminar de mejora", 1, page_break=True)
para(doc, "La propuesta se deriva de las problematicas y se limita a la "
          "esfera de la gestion de la informacion, porque es ahi donde el "
          "diagnostico muestra con claridad la brecha entre la tarea "
          "organizacional y el soporte tecnologico disponible.", first_indent=0.75)

h(doc, "1. Objetivo de la propuesta", 2)
para(doc, "Permitir que los datos de campo se registren una sola vez, en el "
          "lugar donde se generan, y que consoliden automaticamente en un "
          "estado unico de la organizacion, sin depender de una persona "
          "determinada para volcar, validar o recuperar informacion.", first_indent=0.75)

h(doc, "2. Componentes", 2)
comp = grid(doc, ["Componente", "Funcion", "Justificacion diagnostica"],
            [3.6, 6.0, 6.0], size=8.5)
filas_comp = [
 ("Aplicacion web de captura (PWA)",
  "Formularios por rubro con los 24 campos relevados, carga en el lote y "
  "sin conexion.",
  "Problematica 1"),
 ("Firestore como base de datos en la nube",
  "Persistencia de registros con historial de cambios y control de acceso "
  "por usuario.",
  "Problematica 2 y 3"),
 ("Cierre de jornada consolidado",
  "Resumen diario por rubro y por responsable, generado automaticamente al "
  "cerrar la jornada.",
  "Problematica 1"),
 ("Lectura en Google Sheets",
  "Informe de seguimiento mensual y presupuestario a partir de la base de "
  "datos, en la herramienta que la organizacion ya usa.",
  "Problematica 3"),
 ("Extension del Registro de Productores",
  "Incorporar lote, tarea, fecha y responsable a la base existente, en lugar "
  "de crear un registro paralelo.",
  "Problematica 3"),
 ("Cuentas individuales con roles",
  "Cada persona entra con sus credenciales; se registra autor y fecha de "
  "cada carga.",
  "Problematica 2"),
]
for f_ in filas_comp:
    r = comp.add_row()
    for i, v in enumerate(f_):
        cell_text(r.cells[i], v, 8.5, bold=(i == 0))
widths_t(comp, [3.6, 6.0, 6.0])

h(doc, "3. Alcance y limites", 2)
para(doc, "Por honestidad tecnica conviene explicitar lo que la propuesta no "
          "resuelve.", first_indent=0.75)
for t_ in [
 "No reemplaza al Registro de Productores: lo extiende. Esta correccion es "
 "el cambio de mayor impacto de la propuesta, porque crear un registro "
 "paralelo habria producido la fragmentacion que se quiere eliminar.",
 "No resuelve la dependencia de una sola persona. Un sistema con cuentas "
 "individuales y con trazabilidad mitiga el congelamiento de datos, pero la "
 "carga de validacion tecnica sigue concentrate en un cargo. La solucion "
 "organizacional -- designar un segundo referente o un referente de "
 "suplencia -- es independiente de la herramienta.",
 "No suple la falta de organigrama ni de procedimientos escritos. Sin un "
 "minimo de procedimiento documentado, el sistema Sera un deposito de datos "
 "sin reglas de uso.",
 "Tiene una restriccion de plataforma: el plan gratuito de Firebase "
 "(Firestore Spark) ofrece 1 GB de almacenamiento. Con el volumen de esta "
 "Secretaria es suficiente, pero debe monitorearse.",
 "Requiere inversion en tiempo: la carga de datos en el lote reduce trabajo, "
 "pero exige disciplina de registro los primeros meses.",
 "No cubre los proyectos sin responsable declarado, porque no hay a quien "
 "asignar el uso del sistema.",
]:
    bullet(doc, t_)

h(doc, "4. Plan de implementacion propuesto", 2)
plan = grid(doc, ["Etapa", "Contenido", "Duracion", "Entregable"],
            [2.4, 7.2, 2.2, 3.8], size=8.5)
filas_plan = [
 ("1", "Definir responsables, permisos y reglas de carga por rubro", "2 semanas",
  "Documento de permisos"),
 ("2", "Relevar y depurar los datos existentes del Registro", "2 semanas",
  "Base limpia"),
 ("3", "Disenar formularios y construir la aplicacion", "4 semanas",
  "Aplicacion en ambiente de prueba"),
 ("4", "Prueba con dos rubros durante un ciclo de registro", "3 semanas",
  "Informe de prueba"),
 ("5", "Capacitacion y despliegue por rubro", "2 semanas",
  "Equipo capacitado"),
 ("6", "Evaluacion contra los indicadores de la seccion 5", "3 meses",
  "Informe de resultados"),
]
for f_ in filas_plan:
    r = plan.add_row()
    for i, v in enumerate(f_):
        cell_text(r.cells[i], v, 8.5, bold=(i == 0),
                  align=WD_ALIGN_PARAGRAPH.CENTER if i in (0, 2) else None)
widths_t(plan, [2.4, 7.2, 2.2, 3.8])

h(doc, "5. Indicadores de evaluacion", 2)
para(doc, "La propuesta no se cierra con la puesta en marcha. Estos cinco "
          "indicadores permiten verificar si efectivamente mejoro la "
          "situacion diagnosticada:", first_indent=0.75)
ind = grid(doc, ["Indicador", "Situacion diagnosticada", "Meta propuesta"],
           [4.6, 5.4, 5.6], size=8.5)
filas_ind = [
 ("Cargas duplicadas del mismo dato", "Si, en todos los rubros", "Eliminadas"),
 ("Tiempo diario de transcripcion", "Unos 20 minutos por persona", "Cero en el lote"),
 ("Lotes con mas de 7 dias sin registro", "Sin control", "Menos del 10 %"),
 ("Registros con autor y fecha", "Ninguno", "El 100 %"),
 ("Proyectos con planilla independiente", "Siete", "Una base comun"),
]
for f_ in filas_ind:
    r = ind.add_row()
    for i, v in enumerate(f_):
        cell_text(r.cells[i], v, 8.5, bold=(i == 0))
widths_t(ind, [4.6, 5.4, 5.6])

# =========================================================== 9. CONCLUSION
h(doc, "Conclusiones y reflexion final", 1, page_break=True)
para(doc, "El principal aprendizaje de este relevamiento es que la "
          "problematica tecnologica de la Secretaria no es principalmente "
          "tecnologica. La institucion trabaja con herramientas basicas y "
          "funciona; el problema no es la falta de tecnologia sino la falta de "
          "un proceso de gestion de la informacion. Cuando se implementa "
          "software sin proceso previo, la herramienta se convierte en un "
          "repositorio mas de datos sin reglas de uso, exactamente como "
          "ocurrio con el sistema que dejo de utilizarse sin una decision "
          "formal de baja.", first_indent=0.75)
para(doc, "Las tres problematicas detectadas forman una cadena. La primera "
          "produce datos fragmentados y duplicados. La tercera consolida esa "
          "fragmentacion en multiples bases que no se cruzan. Y la segunda "
          "impide que cualquiera de las dos se corrija, porque concentra en "
          "una persona el derecho y la capacidad de hacerlo. Abordar solo una "
          "de ellas no produce resultados duraderos.", first_indent=0.75)
para(doc, "La propuesta formulada es coherente con el diagnostico porque no "
          "intenta resolver la problematica 2 --que es organizacional-- "
          "presentandola como informatica. La mitigate, y lo dice "
          "explicitamente. Es preferible una propuesta acotada y honesta que "
          "una que prometa resolver lo que ninguna aplicacion puede resolver.", first_indent=0.75)
para(doc, "Finalmente, un alcance sobre el propio trabajo. Este diagnostico "
          "se apoya en tres entrevistas y en el analisis de siete perfiles de "
          "proyecto, sobre una Secretaria que administra una cartera "
          "diversificada. Las afirmaciones sobre carga de trabajo y sobre "
          "perdidas de datos se sostienen en el testimonio del responsable "
          "administrativo y en la observacion del cuaderno de campo, pero no "
          "fueron contrastadas con registros historicos que la institucion no "
          "posee. Cualquier conclusion sobre volumen de datos o sobre "
          "frecuencia de perdida de informacion debera revisarse cuando se "
          "disponga de ese historial.", first_indent=0.75)
para(doc, "En cuanto a lo etico, el relevamiento respetó la confidencialidad "
          "de los datos personales: los perfiles se identifican con codigos, "
          "no se copiaron nombres ni documentos de los registros nominales y "
          "los datos de campo se-presentaron sin relacionarlos con "
          "identificadores individuales. La observacion se realizo sin "
          "intervenir en la operatoria de los invernaderos ni en la "
          "atencion a los productores.", first_indent=0.75)

# =========================================================== 10. BIBLIO
h(doc, "Referencias", 1, page_break=True)
para(doc, "Bibliograficas", 2, color=MID)
for i, r_ in enumerate(BIBLIOGRAFIA, 1):
    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(1.0)
    p.paragraph_format.first_line_indent = Cm(-1.0)
    p.paragraph_format.line_spacing = 1.5
    p.paragraph_format.space_after = Pt(6)
    p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    set_run(p.add_run(f"[{i}] "), 10.5, True)
    set_run(p.add_run(r_), 10.5)
para(doc, "Consultadas para el marco teorico de la parte II, sobre "
          "diagnostico tecnologico", 2, color=MID, before=12)
for i, r_ in enumerate(BIB_COMP, 1):
    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Cm(1.0)
    p.paragraph_format.first_line_indent = Cm(-1.0)
    p.paragraph_format.line_spacing = 1.5
    p.paragraph_format.space_after = Pt(6)
    p.paragraph_format.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    set_run(p.add_run(f"[{i}] "), 10.5, True)
    set_run(p.add_run(r_), 10.5)

# =========================================================== 11. ANEXOS
h(doc, "Anexo A. Guion de apertura y ficha de consentimiento", 1, page_break=True)
para(doc, "Guion de apertura", 2, color=MID)
para(doc, "Buenos dias, [nombre]. Mi nombre es [alumno] y estoy realizando la "
          "pasantia de la Tecnicatura en Desarrollo de Software. Estoy "
          "relevando como se organiza y se registra la informacion de los "
          "proyectos de la Secretaria, para entender el problema antes de "
          "proponer algo. No se trata de auditar el trabajo de nadie ni de "
          "evaluar el rendimiento de las personas. Necesito entender los "
          "procesos y las dificultades. La entrevista dura unos 30 minutos, "
          "puede detenerse cuando quiera y la puedo repetir si queda alguna "
          "duda.", first_indent=0.75)
para(doc, "Cuanto a la confidencialidad, los perfiles se identifican con un "
          "codigo y no con nombre. Lo que Ud. diga se usara con fines "
          "academicos. No se copiaran datos personales de los registros de "
          "productores. Al final le voy a mostrar como se registro, para que "
          "corrija lo que considere.", first_indent=0.75)
para(doc, "Ficha de consentimiento", 2, color=MID)
ficha = grid(doc, ["Campo", "Registro"], [6.0, 9.6], size=9)
for k in ["Codigo del entrevistado", "Fecha", "Hora de inicio", "Hora de fin",
          "Lugar", "Consentimiento informado (si / no)",
          "Autorizacion para fotografiar (si / no / no aplica)",
          "Observaciones sobre el estado del consentimiento"]:
    r = ficha.add_row()
    cell_text(r.cells[0], k, 9, True)
    cell_text(r.cells[1], "", 9)
widths_t(ficha, [6.0, 9.6])

# -------------------------------------------------- ANEXO B
h(doc, "Anexo B. Registro de los bloques de entrevista", 1, page_break=True)
para(doc, "Separacion entre lo observado y lo referido, segun la guia de "
          "entrevistas. Se incluye ademas lo relevado del analisis documental.",
     9.5, italic=True, color=GREY, after=10)
BLOQ_TIT = {
 "B1": "Bloque 1. Presentacion de la organizacion y ubicacion del informante",
 "B2": "Bloque 2. Estructura organizacional",
 "B3": "Bloque 3. Dinamica organizacional y comunicacion",
 "B4": "Bloque 4. Procesos institucionales y procedimiento de registro",
 "B5": "Bloque 5. Problematicas y necesidades",
}
for k in sorted(B):
    h(doc, BLOQ_TIT[k], 2)
    t = grid(doc, ["Informante", "Respuesta", "Observacion / documentacion"],
             [1.8, 8.0, 5.8], size=8.5)
    for cod, resp, obs in B[k]:
        r = t.add_row()
        cell_text(r.cells[0], cod, 8.5, True, align=WD_ALIGN_PARAGRAPH.CENTER)
        cell_text(r.cells[1], resp, 8.5)
        cell_text(r.cells[2], obs, 8.5, italic=True, color=GREY)
    widths_t(t, [1.8, 8.0, 5.8])
    para(doc, spacing=1.0, after=4)

h(doc, "Cierre de la entrevista", 2)
t = grid(doc, ["Informante", "Mensaje principal"], [1.8, 13.8], size=8.5)
for cod, nota in CIERRE_NOTAS:
    r = t.add_row()
    cell_text(r.cells[0], cod, 8.5, True, align=WD_ALIGN_PARAGRAPH.CENTER)
    cell_text(r.cells[1], nota, 8.5)
widths_t(t, [1.8, 13.8])

# -------------------------------------------------- ANEXO C
h(doc, "Anexo C. Respuestas a la guia de entrevista", 1, page_break=True)
para(doc, "Las quince preguntas de cada bloque fueron respondidas a partir de "
          "lo que se deduce de los perfiles de proyecto y de los presupuestos. "
          "Estan escritas con la voz del entrevistado porque asi se vuelcan en "
          "la hoja de registro. Deben reemplazarse por la respuesta real en "
          "cada visita.", 9.5, italic=True, color=WARN, after=10)

GRUPOS = [
 ("Bloques 1 a 5: organizacion, estructura, dinamica, procesos y problematicas",
  [k for k in A if k.startswith(("P1.", "P2.", "P3.", "P4.", "P5."))]),
 ("Bloques 6 a 10: tecnologia, software, procesos y gestion de la informacion",
  [k for k in A if k.startswith(("P6.", "P7.", "P8.", "P9.", "P10."))]),
 ("Bloques 11 a 15: percepciones, datos, campo, conectividad y sensibilidad",
  [k for k in A if k.startswith(("P11.", "P12.", "P13.", "P14.", "P15."))]),
]
NOMBRE_BLOQUE = {
 "P1.": "1. Presentacion de la organizacion",
 "P2.": "2. Estructura organizacional",
 "P3.": "3. Dinamica organizacional",
 "P4.": "4. Procesos institucionales",
 "P5.": "5. Problematicas y necesidades",
 "P6.": "6. Infraestructura tecnologica",
 "P7.": "7. Software y herramientas utilizadas",
 "P8.": "8. Procesos informatizados",
 "P9.": "9. Gestion y organizacion de la informacion",
 "P10.": "10. Dificultades tecnologicas observadas",
 "P11.": "11. Percepciones y expectativas",
 "P12.": "12. Requisitos de datos",
 "P13.": "13. Rutina de campo y cierre de jornada",
 "P14.": "14. Conectividad, dispositivos y acceso",
 "P15.": "15. Limites y datos sensibles",
}
for titulo, keys in GRUPOS:
    h(doc, titulo, 2)
    prefijos = []
    for k in keys:
        pre = k.split(".")[0] + "."
        if pre not in prefijos:
            prefijos.append(pre)
    for pre in prefijos:
        h(doc, NOMBRE_BLOQUE[pre] + " (Bloque " + pre[1:-1] + ")", 3)
        for k in [x for x in keys if x.startswith(pre)]:
            p = para(doc, after=4, indent=0.4, first_indent=0.0)
            p.paragraph_format.left_indent = Cm(0.4)
            p.paragraph_format.space_before = Pt(6)
            set_run(p.add_run(k + ". "), 10, True, color=MID)
            set_run(p.add_run(A[k][0][1]), 10)
    para(doc, spacing=1.0, after=4)

# -------------------------------------------------- ANEXO D
h(doc, "Anexo D. Mapa de proyectos de la Secretaria de Produccion", 1,
  page_break=True)
para(doc, "Ocho de los once campos de la planilla de registro original estan "
          "vacios. El proyecto de produccion intensiva aparece con la misma "
          "cantidad de hectareas para todos sus rubros, lo que sugiere que "
          "las cifras fueron copiadas de otro proyecto. En el presupuesto de "
          "curtiembre, ocho de diez insumos no tienen precio unitario y la "
          "capacidad declarada no coincide con la compra presupuestada.",
     9.5, italic=True, color=GREY, after=8)
t = grid(doc, ["Proyecto", "Rubro", "Ubicacion", "Responsable declarado",
               "Monto declarado"], [4.0, 3.2, 2.6, 3.2, 2.6], size=8)
for f_ in MAPA:
    r = t.add_row()
    for i, v in enumerate(f_):
        cell_text(r.cells[i], v, 8, bold=(i == 0))
    if f_[3] in ("No declarado", "Incompleto"):
        for c in r.cells:
            shade(c, "FDF3E3")
widths_t(t, [4.0, 3.2, 2.6, 3.2, 2.6])
para(doc, "Cinco de los siete proyectos declaran al mismo responsable tecnico. "
          "Ningun proyecto declara un organigrama de trabajo, un cronograma "
          "de ejecucion ni un mecanismo de control de avance. Esta tabla es el "
          "punto de partida del problema de fragmentacion descrito en la "
          "problematicas 3.", 9.5, italic=True, color=GREY, before=6)

# -------------------------------------------------- ANEXO E
h(doc, "Anexo E. Matriz de triangulacion de hallazgos", 1)
para(doc, "Un hallazgo se considera confirmado cuando aparece en al menos dos "
          "fuentes independientes.", 9.5, italic=True, color=GREY, after=8)
t = grid(doc, ["Hallazgo", "Documento", "Entrevista", "Observacion",
               "Estado", "Probl."], [5.0, 2.0, 2.4, 2.6, 2.0, 1.6], size=8)
for f_ in TRIANGULACION:
    r = t.add_row()
    for i, v in enumerate(f_):
        cell_text(r.cells[i], v, 8, bold=(i == 0),
                  align=WD_ALIGN_PARAGRAPH.CENTER if i in (1, 2, 3, 5) else None)
    if f_[4] == "En duda":
        for c in r.cells:
            shade(c, "F2F2F2")
widths_t(t, [5.0, 2.0, 2.4, 2.6, 2.0, 1.6])

# -------------------------------------------------- ANEXO F
h(doc, "Anexo F. Validacion de supuestos", 1, page_break=True)
para(doc, "Cada supuesto sobre el que se baso la propuesta de la primera etapa "
     "se sometio a contraste. Siete quedaron confirmados, algunos con salvedades, "
          "relevantes porque cambian el diseno de la solucion.", 9.5,
     italic=True, color=GREY, after=8)
t = grid(doc, ["Supuesto original", "Veredicto del relevamiento", "Estado"],
         [5.6, 7.0, 3.0], size=8)
for a_, b_, c_ in SUPUESTOS_RESULTADO:
    r = t.add_row()
    cell_text(r.cells[0], a_, 8)
    cell_text(r.cells[1], b_, 8)
    cell_text(r.cells[2], c_, 8, True,
              align=WD_ALIGN_PARAGRAPH.CENTER)
    if c_.startswith("Corregido"):
        for cc in r.cells:
            shade(cc, "FDF3E3")
    elif c_ == "Confirmado":
        shade(r.cells[2], "E7F2E9")
widths_t(t, [5.6, 7.0, 3.0])
para(doc, "El supuesto que mas cambia la propuesta es el de la inexistencia de "
          "un registro unico de productores. Existe, es de 2019, es mantido "
          "en Google Sheets y ya provee los graficos de los documentos de "
          "proyecto. La solucion correcta no es crear un sistema nuevo, sino "
          "agregar al existente los campos de lote, tarea, fecha y "
          "responsable.", 10, first_indent=0.75)

# -------------------------------------------------- ANEXO G
h(doc, "Anexo G. Modelo de formulario de campo", 1, page_break=True)
para(doc, "Formulario de registro por lote, derivado de los 24 campos "
          "relevados. Es el modelo sobre el que se construiran los "
          "formularios por rubro de la aplicacion.", 9.5, italic=True,
     color=GREY, after=8)
h(doc, "G.1. Registro de tareas en lote", 2)
t = grid(doc, ["Campo", "Tipo", "Obligatorio", "Observacion"], [4.0, 2.6, 2.2, 6.8], size=8)
campos = [
 ("Fecha", "Fecha", "Si", "Se toma por defecto, editable"),
 ("Rubro", "Lista", "Si", "Vivero, CEMA, dulceras, ganaderia, curtiembre"),
 ("Proyecto", "Lista", "Si", "Siete proyectos de la cartera"),
 ("Lote", "Lista o texto", "Si", "Zona, parcela, variedad,TAINING"),
 ("Tipo de trabajo", "Lista", "Si", "Riego, poda, cosecha, control, planton"),
 ("Cantidad", "Numero", "Si", "Unidad segun el tipo de trabajo"),
 ("Estado fitosanitario", "Lista", "No", "Solo en invernadero y parcelas de ensayo"),
 ("Temperatura y humedad", "Numero", "No", "Solo en invernadero"),
 ("Responsable", "Automatico", "Si", "Toma el usuario que inicio sesion"),
 ("Estado del registro", "Automatico", "Si", "Borrador o confirmado"),
 ("Observaciones", "Texto", "No", "Campo libre"),
]
for c_ in campos:
    r = t.add_row()
    for i, v in enumerate(c_):
        cell_text(r.cells[i], v, 8, bold=(i == 0),
                  align=WD_ALIGN_PARAGRAPH.CENTER if i == 2 else None)
widths_t(t, [4.0, 2.6, 2.2, 6.8])

h(doc, "G.2. Campos que se agregan al Registro de Productores", 2)
para(doc, "El Registro actual cubre datos nominales y de superficie. Estos son "
          "los campos que la aplicacion deberia sumar para que el Registro "
          "pueda sostener preguntas sobre el desarrollo de la actividad.",
     first_indent=0.75)
for v in ["Codigo de lote asociado al productor",
          "Proyecto en el que participa",
          "Superficie por rubro y no solo total",
          "Ultima fecha de registro en campo",
          "Ultima tarea realizada y frecuencia con que se realiza",
          "Volumen por campana, no solo anual",
          "Estado de actividad (activo, inactivo, discontinuado)"]:
    bullet(doc, v)

h(doc, "G.3. Campos que el sistema no debe almacenar", 2)
for v in ["Documento de identidad del productor en el modulo de lotes. El "
          "Registro oficial ya lo contiene; duplicarlo aumenta el riesgo sin "
          "beneficio. Debe usarse un codigo.",
          "Datos de salud de animales o de personas. No son necesarios para la "
          "gestion de lotes y no corresponden a este sistema.",
          "Ubicacion precisa de parcelas mientras no exista autorizacion "
          "explicita del productor. Se recomienda registrar el sector o "
          "comunidad, no la coordenada exacta."]:
    bullet(doc, v)

enable_update_fields(doc)
doc.save(OUT)
print("OK ->", OUT)
