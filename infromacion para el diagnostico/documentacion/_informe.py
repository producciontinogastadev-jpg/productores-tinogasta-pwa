# -*- coding: utf-8 -*-
"""Informe TP3 - Diagnostico Organizacional y Tecnologico.
Documento modelo: las respuestas de entrevista y las observaciones de campo
estan simuladas a partir de los perfiles de proyecto y deben reemplazarse
por los relevamientos reales de la pasantia."""

from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.section import WD_SECTION
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

ARIAL = "Arial"
DARK = RGBColor(0x1F, 0x38, 0x64)
MID = RGBColor(0x2E, 0x53, 0x95)
GREY = RGBColor(0x55, 0x55, 0x55)
WARN = RGBColor(0x99, 0x33, 0x00)
GREEN = RGBColor(0x1E, 0x6B, 0x3A)

OUT = "Informe_TP3_Diagnostico_Organizacional_y_Tecnologico.docx"


# ---------------------------------------------------------------- helpers

def set_run(r, size=11, bold=False, italic=False, color=None, name=ARIAL):
    r.font.name = name
    r.font.size = Pt(size)
    r.font.bold = bold
    r.font.italic = italic
    if color is not None:
        r.font.color.rgb = color
    r._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    return r


def para(doc, text="", size=11, bold=False, italic=False, color=None,
         align=WD_ALIGN_PARAGRAPH.JUSTIFY, before=0, after=6, spacing=1.5,
         indent=None, keep=False, first_indent=None, style=None):
    p = doc.add_paragraph(style=style) if style else doc.add_paragraph()
    pf = p.paragraph_format
    pf.line_spacing = spacing
    pf.space_before = Pt(before)
    pf.space_after = Pt(after)
    pf.alignment = align
    if indent is not None:
        pf.left_indent = Cm(indent)
    if first_indent is not None:
        pf.first_line_indent = Cm(first_indent)
    if keep:
        pf.keep_with_next = True
    if text:
        set_run(p.add_run(text), size, bold, italic, color)
    return p


def h(doc, text, level=1, page_break=False):
    if page_break:
        b = doc.add_paragraph()
        b.paragraph_format.space_after = Pt(0)
        b.add_run().add_break(WD_BREAK.PAGE)
    size = {1: 14, 2: 12, 3: 11.5}[level]
    color = {1: DARK, 2: MID, 3: DARK}[level]
    return para(doc, text, size=size, bold=True, color=color,
                align=WD_ALIGN_PARAGRAPH.LEFT,
                before=16 if level == 1 else 12, after=8, spacing=1.15,
                keep=True, style="Heading %d" % level)


def numbered(doc, n, text, size=11):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.line_spacing = 1.5
    pf.space_after = Pt(4)
    pf.left_indent = Cm(0.7)
    pf.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    set_run(p.add_run(f"{n}. "), size, True, color=MID)
    set_run(p.add_run(text), size)
    return p


def bullet(doc, text, size=11):
    p = doc.add_paragraph(style="List Bullet")
    pf = p.paragraph_format
    pf.line_spacing = 1.5
    pf.space_after = Pt(4)
    pf.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    set_run(p.add_run(text), size)
    return p


def shade(cell, hexcolor):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement("w:shd")
    shd.set(qn("w:val"), "clear")
    shd.set(qn("w:color"), "auto")
    shd.set(qn("w:fill"), hexcolor)
    tcPr.append(shd)


def cell_text(cell, text, size=9, bold=False, color=None, align=None,
              italic=False, spacing=1.05):
    cell.text = ""
    p = cell.paragraphs[0]
    p.paragraph_format.line_spacing = spacing
    p.paragraph_format.space_before = Pt(1)
    p.paragraph_format.space_after = Pt(1)
    p.paragraph_format.alignment = align or WD_ALIGN_PARAGRAPH.LEFT
    set_run(p.add_run(text), size, bold, italic, color)


def row_height(row, cm):
    trPr = row._tr.get_or_add_trPr()
    e = OxmlElement("w:trHeight")
    e.set(qn("w:val"), str(int(cm * 567)))
    e.set(qn("w:hRule"), "atLeast")
    trPr.append(e)


def repeat_header(row):
    trPr = row._tr.get_or_add_trPr()
    e = OxmlElement("w:tblHeader")
    e.set(qn("w:val"), "true")
    trPr.append(e)


def grid(doc, headers, widths, fill="2E5395", size=8):
    t = doc.add_table(rows=1, cols=len(headers))
    t.style = "Table Grid"
    hdr = t.rows[0]
    repeat_header(hdr)
    for i, txt in enumerate(headers):
        cell_text(hdr.cells[i], txt, size, True, color=RGBColor(0xFF, 0xFF, 0xFF),
                  align=WD_ALIGN_PARAGRAPH.CENTER)
        shade(hdr.cells[i], fill)
    widths_t(t, widths)
    return t


def widths_t(t, widths):
    for row in t.rows:
        for c, w in zip(row.cells, widths):
            c.width = Cm(w)


def add_field(par, instr, size=11, bold=False, color=None):
    fld = OxmlElement("w:fldSimple")
    fld.set(qn("w:instr"), instr)
    r = par.add_run()
    set_run(r, size, bold, color=color)
    fld.append(r._r)
    par._p.append(fld)


def add_toc(doc):
    p = doc.add_paragraph()
    r = p.add_run()
    fld = OxmlElement("w:fldSimple")
    fld.set(qn("w:instr"), r' TOC \o "1-2" \h \z \u ')
    r._r.append(fld)
    return p


def enable_update_fields(doc):
    settings = doc.settings.element
    e = OxmlElement("w:updateFields")
    e.set(qn("w:val"), "true")
    settings.append(e)


def footer_pagenum(section):
    p = section.footer.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.space_before = Pt(0)
    set_run(p.add_run("Pagina "), 9, color=GREY)
    add_field(p, " PAGE ", 9, color=GREY)
    set_run(p.add_run(" de "), 9, color=GREY)
    add_field(p, " NUMPAGES ", 9, color=GREY)


def header_text(section, text):
    p = section.header.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.LEFT
    p.paragraph_format.space_after = Pt(2)
    set_run(p.add_run(text), 9, italic=True, color=GREY)


# ---------------------------------------------------------------- datos

ENTREVISTADOS = [
    ("R1", "Tecnico Agronomo. Responsable de los proyectos de la Secretaria",
     "15 de marzo de 2026", "Oficina de la Secretaria de Produccion"),
    ("R2", "Tecnico administrativo. Encargado del Registro de Productores y expedientes",
     "16 de marzo de 2026", "Oficina de la Secretaria de Produccion"),
    ("R3", "Operador de campo. Paradero responsable del invernadero y del rusticadero",
     "17 de marzo de 2026", "Vivero Provincial, distrito Anillaco"),
]

A = {
"P1.1": [("R1", "La Secretaria de Produccion de la Municipalidad de Tinogasta formula y ejecuta proyectos de agregado de valor para el sector primario: mejorar lo que hoy se vende en fresco."),
          ("R2", "Tambien administra el Registro de Productores y tramita las inscribiciones de vivero y de ganaderia."),
          ("R3", "En el campo nuestro trabajo es mantener las parcelas vivas y producir plantas para los espacios verdes del departamento.")],
"P1.2": [("R1", "Los usuarios son los productores del departamento, en dos perfiles: los que venden fruta en fresco y los que industrializan."),
          ("R2", "Y tambien la poblacion en general, a traves de los espacios verdes y de la cocina comunitaria.")],
"P1.3": [("R1", "Somos pocos. Yo respondo por los siete proyectos que hay en cartera y por el Registro de Productores."),
          ("R2", "En la oficina somos dos personas con el Secretario y un administrativo.")],
"P1.4": [("R1", "Los productos concretos son plantas vivas, insumos agricolas, asistencia tecnica y, en el proyecto de dulceras, dulce, jalea y mermelada."),
          ("R3", "Y en el Centro Experimental estamos probando cuatro variedades de higo que todavia no se comercializan.")],
"P1.5": [("R1", "Todo sale de la Cuenta de Rentas Generales de la Municipalidad. Yo armo el presupuesto y lo presento, pero el seguimiento de la ejecucion se hace cuando alguien lo pide.")],
"P2.1": [("R1", "No hay organigrama escrito. Cuando arrancamos este ano me dijeron que habia uno de 2019 pero no lo encontramos."),
          ("R2", "Hay un listado de proyectos en la pagina del municipio, pero no un organigrama.")],
"P2.2": [("R1", "Depende de como se mire. Ordena eltudo asi: yo armo los proyectos, y el administrativo trabaja con lo que yo le pido."),
          ("R3", "En el campo entro yo solo. No hay supervisor.")],
"P2.3": [("R1", "Cinco proyectos de los siete llevan mi nombre. Los otros dos todavia no tienen responsable asignado."),
          ("R2", "Ese es un problema: si el tecnico esta tres dias en el campo, el Registro de Productores no se actualiza.")],
"P2.4": [("R1", "Si me ausento una semana no hay quien valide los datos ni firme los cronogramas. Quedan congelados."),
          ("R2", "El Registro esta en una planilla compartida que solo manejo yo. Si me illness de vacaciones, se frena.")],
"P2.5": [("R1", "Los proyectos los divide por rubro, no por sector. Se da por sentado que las areas se conocen entre si.")],
"P3.1": [("R1", "Todo el contacto con productores es por WhatsApp. Y el grupo de trabajo, que es el canal real."),
          ("R2", "Y el correo, pero casi no se usa. WhatsApp manda.")],
"P3.2": [("R1", "No esta institucionalizado. No hay norma que diga como se avisa un cambio de turno.")],
"P3.3": [("R1", "No queda registrado. Si un productor avisa que no puede venir, queda en el chat y nada mas."),
          ("R3", "Los avisos del riego se dan de palabra en el invernadero. Si no estas, no te enteras.")],
"P3.4": [("R1", "Si alguien esta en el campo y no tiene telefono, se lo dice otro cuando vuelve. O no se lo dice.")],
"P3.5": [("R2", "Se decide con lo que uno recuerda de la visita anterior. Si no fui, no se.")],
 "P4.1": [("R3", "El registro de campo es lo que mas tiempo se lleva. Anoto en un cuaderno y despues lo paso a una planilla de Excel."),
          ("R2", "La carga del Registro de Productores me lleva casi un dia completo cada vez que la actualizo.")],
"P4.2": [("R3", "El cuaderno de campo existe, pero el procedimiento esta en mi cabeza. No hay instructivo escrito.")],
"P4.3": [("R3", "Si llueve cuando la poda estaba prevista, se corre para el dia siguiente y uno avisa. No queda nada escrito.")],
"P4.4": [("R3", "Anoto fecha, lote, trabajo y cantidad en un cuaderno. Despues lo paso a una planilla en la oficina."),
          ("R2", "La planilla del Registro de Productores la cargo yo, de memoria, al volver de la visita.")],
"P4.5": [("R3", "Si. La lista de los que estan a disposicion y los que ya comercializaron estan en planillas distintas.")],
"P5.1": [("R3", "Pasar el cuaderno a la planilla. Se hace todos los dias y se podria hacer desde el lote."),
          ("R2", "Volver a cargar lo que ya escribi en el cuaderno. Es el doble de trabajo.")],
"P5.2": [("R1", "Me ha pasado que un productor me dice que ya entrego la cosecha y yo no tengo idea de cuanto. Se pierde la informacion.")],
"P5.3": [("R3", "De mi. Si estoy dos dias con fiebre no hay nadie que sepa que hay que regar el invernadero.")],
"P5.4": [("R1", "Que las cosas se anoten una sola vez y que yo pueda verlas sin preguntar.")],
"P6.1": [("R2", "En la oficina hay dos computadoras de escritorio y una notebook. Impresora una, de laser, que a veces se traba con la humedad.")],
"P6.2": [("R1", "Internet en la oficina va bien. En el campo, en los lotes del departamento, casi siempre hay senal de telefono pero no wifi."),
          ("R3", "WiFi no hay. Datos del celular si, pero no siempre.")],
"P6.3": [("R2", "No hay red interna. Nos pasamos los archivos por WhatsApp o por mail, uno por uno.")],
"P6.4": [("R2", "La impresora y una escaner que usamos para los expedientes. La escaner anda regular.")],
"P7.1": [("R2", "Office, Excel y Word sobre todo. Y una planilla compartida en Google que es la que uso para el Registro."),
          ("R1", "Yo uso el celular y mapas. Nada mas.")],
"P7.2": [("R3", "Anoto en el cuaderno y a veces le saco foto a la planilla con el celular para acordarme."),
          ("R2", "Si, planillas de calculo. La del Registro tiene treinta columnas.")],
"P7.3": [("R1", "WhatsApp. Un grupo con todos los productores y otro con el equipo de la Secretaria."),
          ("R2", "WhatsApp, correo electronico y la planilla compartida.")],
"P7.4": [("R2", "A Excel lo aprendi sola. Al correo me enseño una compañera de la Secretaria. Yo paso ahi hace poco.")],
"P7.5": [("R2", "Antes usabamos un programa que se dio de baja. Dejo de usarse y nadie dijo nada.")],
"P8.1": [("R3", "En el campo, nada. Todo en papel. En la oficina recien se pasa a la computadora.")],
"P8.2": [("R1", "Cada proyecto lleva su propia planilla. No cruzan los datos de ninguno.")],
"P8.3": [("R2", "No se evita. Cada uno revisa lo suyo y nunca hay un cruce.")],
"P9.1": [("R1", "El Registro de Productores es una planilla compartida en Google Sheets que lleva la Secretaria. Se actualiza desde 2019."),
          ("R2", "Es la fuente de datos oficial de la Secretaria. Tiene datos de superficie, especie y volumen de los productores."),
          ("R3", "Nunca lo vi. Nos muestran los graficos pero no la planilla.")],
"P9.2": [("R2", "Tiene nombre, DNI, localidad, superficie, especie, hectareas y volumen anual. No tiene datos de lotes ni de trabajos."),
          ("R1", "Falta todo lo que es parcela: donde esta cada lote, que se hizo y cuando.")],
"P9.3": [("R2", "Entra todo el mundo menos los proveedores del municipio. Los productores se autoinsccriben.")],
"P9.4": [("R2", "La planilla la manejo yo. Ademas hay una copia local en el escritorio que se actualiza por copy y pegar.")],
"P9.5": [("R1", "Para los proyectos, en carpetas por proyecto en Drive. Cada proyecto con su planilla."),
          ("R2", "Y hay versiones previas. Te abria cualquiera en Drive sin querer y rompia el archivo.")],
"P9.6": [("R1", "El Registro de Productos se actualiza una o dos veces por anio."),
          ("R2", "En realidad cada seis meses. Se hace un esfuerzo grande: bajamos los predios de la foto satelital y cruzamos.")],
"P9.7": [("R2", "Si. Backup del Drive y de la computadora. Ese es el unico.")],
"P9.8": [("R1", "Creo que no hay problema de datos"),("R2", "Los datos se pierden cuando se cae internet y se esta escribiendo. Se pieron dos veces este ano.")],
"P10.1": [("R3", "El cuaderno no, se usa bien. Lo dificil es la planilla de la oficina: no entiendo las columnas de todos los rubros.")],
"P10.2": [("R3", "Entre pasar el cuaderno y cargar la planilla se me van unos veinte minutos por dia.")],
"P10.3": [("R2", "Se perdieron los datos de dos productores el anio pasado por una actualizacion mal hecha. Hubo que reconstruir a mano.")],
"P10.4": [("R1", "Me gustaria ver en el celular el estado de cada parcela sin tener que llamar a alguien.")],
"P11.1": [("R3", "Que nos cambien la forma de trabajar. Si viene alguien de afuera con una computadora y nos dice que nos cambien la forma de trabajar, temo que quede todo.")],
"P11.2": [("R1", "Que lo decida la Secretaria, con la opinion de quien lo va a usar. No al reves.")],
"P11.3": [("R2", "Confieso que desconfio. La ultima vez que compraron un sistema no se empezo a usar porque nadie nos dijo como.")],
"P11.4": [("R2", "Ayuda, si es simple. Ahora nos agrega trabajo porque la planilla tiene mas columnas que las que usamos.")],
"P11.5": [("R2", "Me falta saber Excel. Con una capacitacion corta lo resuelvo.")],
"P12.1": [("R1", "Hoy, plantaciones, animales y productos industrializados. Si se extiende, tambien cueros.")],
"P12.2": [("R3", "Fecha, lote, tipo de trabajo, cantidad y responsable. Para el invernadero anoto ademas temperatura y humedad.")],
"P12.3": [("R3", "Al invernadero todos los dias. A los lotes de afuera, una o dos veces por semana.")],
"P12.4": [("R3", "Poda cada temporada, riego cada quince dias, cosecha una o dos veces por anio.")],
"P12.5": [("R3", "Una media hora. Anoto en el cuaderno y despues otra vez en la planilla.")],
"P12.6": [("R3", "En el cuaderno. Despues lo paso a la planilla del computer de la oficina, o a veces se me olvida.")],
"P12.7": [("R2", "No. Cada uno lleva lo suyo.")],
"P12.8": [("R1", "Para saber si va bien hay que ver cuando se hizo la ultima poda, si seilitary rego y cuantos plantas quedan vivas.")],
"P12.9": [("R2", "Los insumos los lleva el proyecto, no el campo. El campo solo carga cantidades.")],
"P13.1": [("R3", "De siete a siete en el invernadero. En campo salimos temprano y volvemos a la tarde.")],
"P13.2": [("R3", "Cierro yo. Pero en el campo no se cierra nada, cada uno se va y ya.")],
"P13.3": [("R1", "El dato se anota en el cuaderno y puede pasar una semana antes de que llegue a la planilla.")],
"P13.4": [("R2", "En la carpeta del proyecto en Drive. Cada proyecto la suya.")],
"P13.5": [("R1", "Yo, cada tanto. Para armar el informe de seguimiento.")],
"P13.6": [("R1", "Que se vea cuanto se produjo de cada cosa y si se esta cumpliendo lo planificado.")],
"P13.7": [("R2", "Mensual. El seguimiento de presupuesto es mensual.")],
"P14.1": [("R3", "En los lotes del INTERIOR casi nunca hay senal. En el pueblo y en la ruta, siempre.")],
"P14.2": [("R3", "Anoto igual en el cuaderno. Si pierdo el cuaderno, perdi el dia.")],
"P14.3": [("R3", "Tengo un celular con Android, de los viejos. Los paraderos nuevos tienen equipo propio.")],
"P14.4": [("R3", "Si, se puede instalar. Pero el dato del celular es limitado, asi que no se pueden descargar archivos pesados.")],
"P14.5": [("R3", "Datos, algunos con plan. Las llamadas las pagamos aparte.")],
"P14.6": [("R1", "Cuenta unica, que no haya que acordarse de mil contrasenias. Pero que quede registrado quien escribio.")],
"P14.7": [("R3", "Se rompe y se pierde. Hoy no hay plan. No lo hemos pensado.")],
"P15.1": [("R2", "El DNI no tiene que figurar en el sistema de lotes. Con un codigo alcanza.")],
"P15.2": [("R1", "Los productores no tienen que ver los datos de otros productores. Cada uno ve los suyos.")],
"P15.3": [("R1", "La Secretaria. Y el municipio autoriza.")],
"P15.4": [("R1", "El tecnico que cargo el dato puede corregirlo en el dia. Despues, lo aprueba el responsable.")],
"P15.5": [("R2", "Que no se pueda borrar un registro. Que se pueda anular, pero no borrar.")],
}

B = {
"B1": [("R1", "Anoto en el cuaderno, pasa a la planilla cuando vuelvo a la oficina. El Registro de Productores se actualiza cada seis meses, no todos los dias.", "Se observa en campo: cuaderno en mano, sin ningun dispositivo cargado."),
       ("R2", "Cargar el Registro me lleva casi un dia entero. Tengo que bajar las fotos satelitales y cruzar superficie por productor.", "Observado en oficina: planilla compartida abierta, 30 columnas, muchas vacias."),
       ("R3", "En el invernadero todos los dias; a los lotes de afuera, una o dos veces por semana.", "Registrado en cuaderno de campo, con fecha y firma.")],
"B2": [("R1", "No hay organigrama escrito. Los proyectos se ordenan por rubro, no por sector, y eso se da por supuesto.", "Verificado: no se encontro ningun organigrama en la carpeta compartida ni en el municipio."),
       ("R2", "El listado de proyectos esta en la pagina del municipio, pero eso no es un organigrama.", "Documento publicable, sin organigrama asociado."),
       ("R3", "En el campo entro solo. No hay supervisor, y eso se nota cuando falta.", "Observado: ninguna persona de la Secretaria presente en el vivero durante la jornada.")],
"B3": [("R1", "WhatsApp es el canal real. Hay un grupo con productores y otro con el equipo. No hay norma que lo regule.", "Captura de pantalla del grupo, con mensajes de coordinación informal."),
       ("R2", "El correo casi no se usa. Para lo que importa, WhatsApp.", "Los avisos de cambios de turno no quedan en ningun registro."),
       ("R3", "Los avisos del riego se dan de palabra. Si no estas, no te enteras.", "Observado: no existe cartelera ni parte de riego en el invernadero.")],
"B4": [("R1", "El procedimiento de registro de campo esta en la cabeza del tecnico. No hay instructivo escrito.", "No se encontro ningun documento de procedimiento en la carpeta del proyecto."),
       ("R2", "La carga del Registro de Productores es un proceso mio, personal, que no esta documentado.", "Proceso con una sola persona capaz de ejecutarlo."),
       ("R3", "Anoto fecha, lote, trabajo y cantidad. Despues lo paso a la planilla.", "Cuaderno de campo con anotaciones prolijas pero sin estructura fija.")],
"B5": [("R1", "Lo que mas se repite es pasar el cuaderno a la planilla. Y responder lo mismo en grupos distintos.", "Tarea diaria, no automatizada, en dos formatos."),
       ("R2", "El dato se anota dos veces: en el cuaderno y en la planilla. Es doble trabajo y es la fuente de errores.", "Confirmado por dos perfiles independientes."),
       ("R3", "Cuando vuelve la senal, se manda lo que se pudo. Si no, se queda en el cuaderno.", "Perdida de datos confirmada por R2 en dos ocasiones del anio anterior.")],
}

CIERRE_NOTAS = [
    ("R1", "Que la Secretaria pueda ver el estado de cada parcela sin depender de una sola persona. Eso es lo que mas me pesa."),
    ("R2", "Me preocupa que nos cambien la herramienta sin decirnos como usarla. La vez anterior no funciono por eso."),
    ("R3", "Yo quiero cargar en el lote y no volver a cargar en la oficina. Nada mas. Si se puede, mejor."),
]

SUPUESTOS_RESULTADO = [
    ("Los trabajadores cargan datos en el campo con frecuencia sin senal",
     "R3 confirma en el invernadero; en lotes del interior la senal es intermitente.", "Confirmado"),
    ("Hoy se generan decenas de archivos sueltos por dia",
     "Se observaron carpetas por proyecto con multiples versiones de planilla.", "Confirmado con matices"),
    ("Existen nombres repetidos entre rubros",
     "El lote 1 aparece en invernadero, rusticadero y zona externa; el higo en dos proyectos.", "Confirmado"),
    ("Un mismo registro puede ser cargado por mas de una persona",
     "No se observaron casos. El problema real es la doble carga, no el conflicto de escritura.", "Corregido"),
    ("Se necesitan alrededor de cien campos por registro",
     "Se relevaron 24 campos en total entre todos los rubros, no 100 por "
     "registro.", "Corregido"),
 ("Hace falta un reporte consolidado de cierre de jornada",
     "R1 lo pide, pero el seguimiento real de presupuesto es mensual.", "Corregido"),
    ("Ese reporte se mira a diario",
     "No hay evidencia de uso diario. La frecuencia real de uso es mensual.", "Corregido"),
    ("Hoy la informacion se pierde o se duplica con frecuencia",
     "R2 reporta dos perdidas de datos por actualizaciones mal hechas en 2025.", "Confirmado"),
    ("Todos los que cargan datos tienen un celular con Android",
     "R3 tiene un equipo Android antiguo. Requiere diseno liviano y compatible.", "Confirmado con restriccion"),
    ("Ese celular puede instalar aplicaciones sin costo",
     "Datos limitados: condiciona el diseno, no lo impide.", "Confirmado con restriccion"),
    ("La tecnologia propuesta es gratis y sostenible en el tiempo",
     "Firebase Spark y Sheets son gratuitos, con limite de 1 GB a monitorear.", "Confirmado con salvedad"),
    ("Los rubros a cargar son plantaciones, animales y mermeladas",
     "El curtiembre y la ganaderia tambien pertenecen a la Secretaria. El higo aparece en dos proyectos.", "Corregido:ampliar"),
    ("No existe todavia un registro unico de productores",
     "Si existe: el Registro de Productores Tinogasteños, en Google Sheets, desde 2019.", "Corregido:el sistema debe ampliarlo"),
    ("Cada proyecto tiene su propio responsable y puede funcionar por separado",
     "Cinco de siete proyectos declaran al mismo responsable tecnico.", "Corregido: hay dependencia"),
    ("Los datos de los proyectos oficiales reflejan la realidad del campo",
     "Los cronogramas del vivero estan vacios y el presupuesto de curtiembre esta incompleto.", "Corregido"),
]

TRIANGULACION = [
    ("Doble carga del dato de campo (cuaderno + planilla)", "Si", "Si, 2 perfiles", "No", "Confirmado", "1"),
    ("Perdida de datos en actualizaciones de planilla", "No", "Si, R2", "No", "Confirmado", "1"),
    ("Dependencia de una unica persona para datos y aprobaciones", "No", "Si, R1 y R2", "No", "Confirmado", "2"),
    ("Inexistencia de organigrama y de procedimientos escritos", "No", "Si, R1 y R2", "Si, ausencia", "Confirmado", "2"),
    ("Canales de comunicacion informales y sin registro", "Si", "Si, 3 perfiles", "Si", "Confirmado", "3"),
    ("Fragmentacion de datos entre proyectos y rubros", "Si", "Si, R1", "Si, carpetas separadas", "Confirmado", "3"),
    ("Cronogramas y presupuestos incompletos", "No", "Si, R1", "Si, documentos", "Confirmado", "3"),
    ("Falta de cierre journalero consolidado", "Si", "Si, R1 y R3", "No", "Confirmado", "1"),
    ("Equipos antiguos con datos limitados", "Si", "Si, R3", "No", "Confirmado", "4"),
    ("Resistencia al cambio por experiencias previas", "No", "Si, R2", "No", "En duda", "-"),
]

MAPA = [
    ("Cocina Comunitaria (Museo del Sabor)", "Alimentacion y economia social", "Tinogasta",
     "Prof. Diego Jesus Diaz", "$ 2.530.000"),
    ("Vivero Provincial Anillaco", "Plantaciones y espacios verdes", "Distrito Anillaco",
     "Tec. Agr. Dardo T. Morales", "$ 4.500.000"),
    ("Produccion intensiva bajo cubierta", "Invernadero, vid, caprino y ovino", "No declarado",
     "No declarado", "No declarado"),
    ("Centro Experimental (CEMA)", "Investigacion y parcelas demostrativas de higo", "No declarado",
     "Tec. Agr. Dardo T. Morales", "$ 5.000.000"),
    ("Curtiembre", "Industrializacion de cueros", "No declarado",
     "Tec. Agr. Dardo T. Morales", "Incompleto"),
    ("Pequenas industrias dulceras", "Dulce, jalea y mermelada", "Copacabana y Los Palacios",
     "No declarado", "$ 58.585,40"),
    ("Esterilizacion de animales domesticos", "Canino y felino", "Tinogasta",
     "No declarado", "No declarado"),
]

BIBLIOGRAFIA = [
    "Chiavenato, I. (2006). Introduccion a la teoria general de la administracion (7.a ed.). McGraw-Hill.",
    "Kendall, K. E., & Kendall, J. E. (2011). Analisis y diseno de sistemas (8.a ed.). Pearson Educacion.",
    "Laudon, K. C., & Laudon, J. P. (2016). Sistemas de informacion gerencial (14.a ed.). Pearson Educacion.",
    "Material de catedra. (s.f.). Las organizaciones, sus caracteristicas y tipos. Tecnicatura en Desarrollo de Software.",
    "Material de catedra. (s.f.). Estructura organizacional, tipos de organizacion y organigramas. Tecnicatura en Desarrollo de Software.",
]

BIB_COMP = [
    "Pressman, R. S. (2010). Ingenieria del software: un enfoque practico (7.a ed.). McGraw-Hill.",
    "Sommerville, I. (2011). Ingenieria de software (9.a ed.). Pearson Educacion.",
    "Material de catedra. (s.f.). Paradigmas de culturas organizacionales. Tecnicatura en Desarrollo de Software.",
]
