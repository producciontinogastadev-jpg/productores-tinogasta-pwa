# -*- coding: utf-8 -*-
"""Convierte un archivo Markdown a .docx con el formato de catedra.

Estrategia:
  1. Pandoc convierte .md -> .docx usando la plantilla de referencia.
  2. Se posprocesa con python-docx para asegurar A4/Arial 11/interlineado,
     portada opcional, indice automatico y numeracion de paginas.

Uso:
  python herramientas/md_a_docx.py "TP4_Formulacion_Analisis_Propuestas.md"
  python herramientas/md_a_docx.py entrada.md --salida salida.docx --titulo "TP4"

Requiere: pandoc en el PATH. Si la plantilla no existe, la genera.
"""
import argparse
import os
import subprocess
import sys

BASE = os.path.dirname(os.path.abspath(__file__))
PLANTILLA = os.path.join(BASE, "plantilla_catedra.docx")


def asegurar_plantilla():
    if not os.path.exists(PLANTILLA):
        from estilo import construir_reference_doc
        construir_reference_doc(PLANTILLA)


def convertir(md_path, docx_path):
    asegurar_plantilla()
    cmd = [
        "pandoc", md_path, "-o", docx_path,
        "--reference-doc", PLANTILLA,
        "--from", "gfm+pipe_tables",
    ]
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print("ERROR pandoc:\n", r.stderr, file=sys.stderr)
        sys.exit(1)
    return docx_path


def posprocesar(docx_path, titulo=None):
    """Aplica formato fino y agrega indice/numeracion si hace falta."""
    from docx import Document
    from docx.shared import Pt, Cm
    from docx.oxml.ns import qn
    from estilo import (
        ARIAL, BODY_SIZE, PAGE_W, PAGE_H, MARGIN_L, MARGIN_R,
        MARGIN_T, MARGIN_B, footer_pagenum, enable_update_fields, add_toc, h,
    )

    doc = Document(docx_path)
    for s in doc.sections:
        s.page_width, s.page_height = PAGE_W, PAGE_H
        s.left_margin, s.right_margin = MARGIN_L, MARGIN_R
        s.top_margin, s.bottom_margin = MARGIN_T, MARGIN_B
    st = doc.styles["Normal"]
    st.font.name = ARIAL
    st.font.size = Pt(BODY_SIZE)
    st.element.rPr.rFonts.set(qn("w:eastAsia"), ARIAL)

    if not doc.sections[0].footer.paragraphs[0].text.strip():
        footer_pagenum(doc.sections[0])
    enable_update_fields(doc)
    doc.save(docx_path)
    return docx_path


def main():
    ap = argparse.ArgumentParser(description="Markdown -> DOCX con estilo de catedra")
    ap.add_argument("entrada", help="archivo .md de entrada")
    ap.add_argument("--salida", help="archivo .docx de salida (por defecto, mismo nombre)")
    ap.add_argument("--titulo", help="titulo para el indice (no usado aun)")
    args = ap.parse_args()

    md_path = os.path.abspath(args.entrada)
    if not os.path.exists(md_path):
        print("No existe:", md_path, file=sys.stderr)
        sys.exit(1)
    docx_path = args.salida or os.path.splitext(md_path)[0] + ".docx"

    convertir(md_path, docx_path)
    posprocesar(docx_path, args.titulo)
    print("Generado:", docx_path)


if __name__ == "__main__":
    main()
