# -*- coding: utf-8 -*-
"""Convierte .docx a .pdf usando Microsoft Word (maquetacion exacta).

Requisito: Microsoft Word instalado. Usa docx2pdf (COM Automation).

Uso:
  python herramientas/docx_a_pdf.py "archivo.docx"
  python herramientas/docx_a_pdf.py "entrada.docx" --salida "salida.pdf"
  python herramientas/docx_a_pdf.py "carpeta"        # convierte todos los .docx
"""
import argparse
import glob
import os
import sys


def convertir_uno(docx_path, pdf_path=None):
    from docx2pdf import convert
    docx_path = os.path.abspath(docx_path)
    if not os.path.exists(docx_path):
        print("No existe:", docx_path, file=sys.stderr)
        return None
    pdf_path = os.path.abspath(pdf_path) if pdf_path else os.path.splitext(docx_path)[0] + ".pdf"
    convert(docx_path, pdf_path)
    return pdf_path


def convertir_carpeta(carpeta):
    from docx2pdf import convert
    convert(os.path.abspath(carpeta))
    return carpeta


def main():
    ap = argparse.ArgumentParser(description="DOCX -> PDF con Microsoft Word")
    ap.add_argument("entrada", help="archivo .docx o carpeta con .docx")
    ap.add_argument("--salida", help="archivo .pdf de salida")
    args = ap.parse_args()

    if os.path.isdir(args.entrada):
        convertir_carpeta(args.entrada)
        print("Convertidos los .docx de:", args.entrada)
    else:
        out = convertir_uno(args.entrada, args.salida)
        if out:
            print("Generado:", out)
        else:
            sys.exit(1)


if __name__ == "__main__":
    main()
