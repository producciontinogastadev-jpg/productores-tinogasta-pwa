# -*- coding: utf-8 -*-
"""Motor de estilo unico para los documentos de la pasantia.

Define constantes y funciones reutilizables para generar .docx con el
formato de catedra (A4, Arial 11, interlineado 1.5, justificado, indice
automatico, encabezado y pie con numeracion).

Se apoya en python-docx. Reutilizado por:
  - generar_plantilla.py  (crea la plantilla de referencia .docx)
  - md_a_docx.py          (convierte un .md a .docx con este estilo)
"""

from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

# ------------------------------------------------------------------ paleta
ARIAL = "Arial"
DARK = RGBColor(0x1F, 0x38, 0x64)   # azul oscuro (titulos nivel 1)
MID = RGBColor(0x2E, 0x53, 0x95)    # azul medio  (titulos nivel 2, acentos)
GREY = RGBColor(0x55, 0x55, 0x55)   # gris (notas, encabezado/pie)
WARN = RGBColor(0x99, 0x33, 0x00)   # naranja quemado (advertencias)
GREEN = RGBColor(0x1E, 0x6B, 0x3A)  # verde (estados OK)
HEADER_FILL = "2E5395"              # relleno de encabezado de tabla
ROW_FILL = "E8EDF5"                 # relleno de fila alterna / clave

# ------------------------------------------------------------------ layout
PAGE_W, PAGE_H = Cm(21.0), Cm(29.7)
MARGIN_L, MARGIN_R = Cm(2.5), Cm(2.0)
MARGIN_T, MARGIN_B = Cm(2.5), Cm(2.0)
BODY_SIZE = 11
BODY_SPACING = 1.5
FIRST_INDENT = 0.75                 # sangria de primera linea del cuerpo


# ---------------------------------------------------------------- helpers
def set_run(r, size=BODY_SIZE, bold=False, italic=False, color=None, name=ARIAL):
    r.font.name = name
    r.font.size = Pt(size)
    r.font.bold = bold
    r.font.italic = italic
    if color is not None:
        r.font.color.rgb = color
    r._element.rPr.rFonts.set(qn("w:eastAsia"), name)
    return r


def para(doc, text="", size=BODY_SIZE, bold=False, italic=False, color=None,
         align=WD_ALIGN_PARAGRAPH.JUSTIFY, before=0, after=6, spacing=BODY_SPACING,
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


def numbered(doc, n, text, size=BODY_SIZE):
    p = doc.add_paragraph()
    pf = p.paragraph_format
    pf.line_spacing = BODY_SPACING
    pf.space_after = Pt(4)
    pf.left_indent = Cm(0.7)
    pf.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    set_run(p.add_run(f"{n}. "), size, True, color=MID)
    set_run(p.add_run(text), size)
    return p


def bullet(doc, text, size=BODY_SIZE):
    p = doc.add_paragraph(style="List Bullet")
    pf = p.paragraph_format
    pf.line_spacing = BODY_SPACING
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


def widths_t(t, widths):
    for row in t.rows:
        for c, w in zip(row.cells, widths):
            c.width = Cm(w)


def grid(doc, headers, widths, fill=HEADER_FILL, size=8):
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


def add_field(par, instr, size=BODY_SIZE, bold=False, color=None):
    fld = OxmlElement("w:fldSimple")
    fld.set(qn("w:instr"), instr)
    r = par.add_run()
    set_run(r, size, bold, color=color)
    fld.append(r._r)
    par._p.append(fld)


def add_toc(doc, levels="1-2"):
    p = doc.add_paragraph()
    r = p.add_run()
    fld = OxmlElement("w:fldSimple")
    fld.set(qn("w:instr"), r' TOC \o "%s" \h \z \u ' % levels)
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


# ------------------------------------------------------- documento base
def nuevo_documento(encabezado=None):
    """Crea un Document con el formato de catedra aplicado."""
    doc = Document()
    for s in doc.sections:
        s.page_width, s.page_height = PAGE_W, PAGE_H
        s.left_margin, s.right_margin = MARGIN_L, MARGIN_R
        s.top_margin, s.bottom_margin = MARGIN_T, MARGIN_B
    st = doc.styles["Normal"]
    st.font.name = ARIAL
    st.font.size = Pt(BODY_SIZE)
    st.element.rPr.rFonts.set(qn("w:eastAsia"), ARIAL)
    pf = st.paragraph_format
    pf.line_spacing = BODY_SPACING
    pf.space_after = Pt(6)
    pf.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    footer_pagenum(doc.sections[0])
    if encabezado:
        header_text(doc.sections[0], encabezado)
    enable_update_fields(doc)
    return doc


def portada(doc, institucion, carrera, titulo_doc, titulo_tema,
            subtitulo=None, datos=None, nota=None):
    """Portada estandar. datos: lista de (clave, valor)."""
    for _ in range(3):
        para(doc, spacing=1.0, after=0)
    para(doc, institucion, 13, True, color=DARK,
         align=WD_ALIGN_PARAGRAPH.CENTER, after=2, spacing=1.0)
    para(doc, carrera, 11.5, color=GREY,
         align=WD_ALIGN_PARAGRAPH.CENTER, after=26, spacing=1.0)
    para(doc, titulo_doc, 20, True, color=DARK,
         align=WD_ALIGN_PARAGRAPH.CENTER, after=6, spacing=1.0)
    para(doc, titulo_tema, 14, True, color=MID,
         align=WD_ALIGN_PARAGRAPH.CENTER, after=18, spacing=1.15)
    if subtitulo:
        para(doc, subtitulo, 12, italic=True, color=GREY,
             align=WD_ALIGN_PARAGRAPH.CENTER, after=30, spacing=1.15)
    if datos:
        t = doc.add_table(rows=len(datos), cols=2)
        t.style = "Table Grid"
        for i, (k, v) in enumerate(datos):
            cell_text(t.rows[i].cells[0], k, 10, True)
            shade(t.rows[i].cells[0], ROW_FILL)
            cell_text(t.rows[i].cells[1], v, 10)
        widths_t(t, [5.4, 10.2])
    if nota:
        para(doc, spacing=1.0, after=0)
        para(doc, nota, 9.5, italic=True, color=WARN,
             align=WD_ALIGN_PARAGRAPH.CENTER, after=0, spacing=1.0, indent=1.2)


def indice(doc, titulo="Indice"):
    h(doc, titulo, 1, page_break=True)
    para(doc, "Actualice el indice con Ctrl + E y F9 al abrir el documento.",
         9, italic=True, color=GREY, after=10)
    add_toc(doc)


# ----------------------------------------------- referencia para Pandoc
def construir_reference_doc(ruta):
    """Genera un .docx de referencia (estilos) para usar con pandoc --reference-doc."""
    doc = Document()
    for s in doc.sections:
        s.page_width, s.page_height = PAGE_W, PAGE_H
        s.left_margin, s.right_margin = MARGIN_L, MARGIN_R
        s.top_margin, s.bottom_margin = MARGIN_T, MARGIN_B

    def _style(name, size, color, bold=False, spacing=BODY_SPACING,
               before=0, after=6, align=WD_ALIGN_PARAGRAPH.JUSTIFY):
        try:
            st = doc.styles[name]
        except KeyError:
            return
        st.font.name = ARIAL
        st.font.size = Pt(size)
        st.font.bold = bold
        if color is not None:
            st.font.color.rgb = color
        rpr = st.element.get_or_add_rPr()
        rf = rpr.find(qn("w:rFonts"))
        if rf is None:
            rf = OxmlElement("w:rFonts")
            rpr.append(rf)
        rf.set(qn("w:ascii"), ARIAL)
        rf.set(qn("w:hAnsi"), ARIAL)
        rf.set(qn("w:eastAsia"), ARIAL)
        pf = st.paragraph_format
        pf.line_spacing = spacing
        pf.space_before = Pt(before)
        pf.space_after = Pt(after)
        pf.alignment = align

    _style("Normal", BODY_SIZE, None, spacing=BODY_SPACING, after=6)
    _style("Body Text", BODY_SIZE, None, spacing=BODY_SPACING, after=6)
    _style("First Paragraph", BODY_SIZE, None, spacing=BODY_SPACING, after=6)
    _style("Title", 20, DARK, bold=True, spacing=1.0, after=6,
           align=WD_ALIGN_PARAGRAPH.CENTER)
    _style("Subtitle", 12, GREY, spacing=1.15, after=18,
           align=WD_ALIGN_PARAGRAPH.CENTER)
    _style("Heading 1", 14, DARK, bold=True, spacing=1.15, before=16, after=8,
           align=WD_ALIGN_PARAGRAPH.LEFT)
    _style("Heading 2", 12, MID, bold=True, spacing=1.15, before=12, after=8,
           align=WD_ALIGN_PARAGRAPH.LEFT)
    _style("Heading 3", 11.5, DARK, bold=True, spacing=1.15, before=12, after=8,
           align=WD_ALIGN_PARAGRAPH.LEFT)
    _style("Heading 4", 11, MID, bold=True, spacing=1.15, before=10, after=6,
           align=WD_ALIGN_PARAGRAPH.LEFT)
    _style("Compact", BODY_SIZE, None, spacing=BODY_SPACING, after=4)
    _style("Author", BODY_SIZE, None)
    _style("Date", BODY_SIZE, None)
    _style("Block Text", BODY_SIZE, GREY, spacing=1.15, after=8,
           align=WD_ALIGN_PARAGRAPH.LEFT)
    _style("Source Code", 9.5, None, spacing=1.0, after=6,
           align=WD_ALIGN_PARAGRAPH.LEFT)

    # Listas
    for nm in ("List Bullet", "List Number", "Compact"):
        try:
            st = doc.styles[nm]
            st.font.name = ARIAL
            st.font.size = Pt(BODY_SIZE)
            st.paragraph_format.line_spacing = 1.15
            st.paragraph_format.space_after = Pt(4)
        except KeyError:
            pass

    # Tablas: borde y encabezado
    try:
        tstyle = doc.styles["Table Grid"]
        tstyle.font.name = ARIAL
        tstyle.font.size = Pt(9)
    except KeyError:
        pass

    doc.save(ruta)
    return ruta
