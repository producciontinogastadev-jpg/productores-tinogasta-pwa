# -*- coding: utf-8 -*-
"""Genera la plantilla de referencia .docx con el formato de catedra.

Salida:
  herramientas/plantilla_catedra.docx   -> usar con
      pandoc doc.md -o doc.docx --reference-doc=herramientas/plantilla_catedra.docx

Uso:
  python herramientas/generar_plantilla.py
"""
import os
from estilo import construir_reference_doc

BASE = os.path.dirname(os.path.abspath(__file__))
SALIDA = os.path.join(BASE, "plantilla_catedra.docx")


def main():
    construir_reference_doc(SALIDA)
    print("Plantilla creada:", SALIDA)


if __name__ == "__main__":
    main()
