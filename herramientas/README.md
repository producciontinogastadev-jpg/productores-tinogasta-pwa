# Herramientas — generación y estilo de documentos

Conjunto de recursos para redactar y estilizar los documentos de la pasantía
con el **formato de cátedra** (A4, Arial 11, interlineado 1.5, justificado,
índice automático, encabezado y pie con numeración).

## Qué hay

| Archivo | Función |
|---|---|
| `estilo.py` | Motor de estilo. Constantes y funciones reutilizables (títulos, párrafos, tablas, índices, portada). Es la base de todo. |
| `generar_plantilla.py` | Crea `plantilla_catedra.docx`, la plantilla de referencia de estilos. |
| `md_a_docx.py` | Convierte un `.md` a `.docx` con el formato de cátedra. |
| `docx_a_pdf.py` | Convierte `.docx` a `.pdf` usando Microsoft Word (maquetación exacta). |
| `plantilla_catedra.docx` | Plantilla generada (estilos). Se regenera con el script. |

## Requisitos (ya instalados)

- Python 3.12 + `python-docx` + `docx2pdf`
- Pandoc 3.x (en el PATH)
- Typst 0.15 (para PDF rápido; Pandoc lo usa solo)
- Microsoft Word (solo para `docx_a_pdf.py`)

## Uso

### Markdown → Word con formato de cátedra

```bash
python herramientas/md_a_docx.py "TP4_Formulacion_Analisis_Propuestas.md"
# genera TP4_Formulacion_Analisis_Propuestas.docx al lado del .md
```

Con salida explícita:

```bash
python herramientas/md_a_docx.py "archivo.md" --salida "salida.docx"
```

### Markdown → PDF (formato académico, vía Typst)

```bash
pandoc "archivo.md" -o "archivo.pdf" --pdf-engine=typst --from gfm+pipe_tables
```

### Word → PDF con la maquetación exacta de Word

```bash
python herramientas/docx_a_pdf.py "archivo.docx"
# también acepta una carpeta: convierte todos los .docx que contiene
python herramientas/docx_a_pdf.py "ruta/a/carpeta"
```

### Flujo completo: Markdown → Word → PDF

```bash
python herramientas/md_a_docx.py "TP4_Formulacion_Analisis_Propuestas.md"
python herramientas/docx_a_pdf.py "TP4_Formulacion_Analisis_Propuestas.docx"
```

### Regenerar la plantilla de estilos

```bash
python herramientas/generar_plantilla.py
```

### Usar la plantilla directamente con Pandoc

```bash
pandoc "archivo.md" -o "archivo.docx" \
  --reference-doc="herramientas/plantilla_catedra.docx" \
  --from gfm+pipe_tables
```

## Procedimientos automáticos en Word

Tras abrir un `.docx` generado:

- **Actualizar el índice:** `Ctrl + E` y luego `F9` (o seleccionar el índice y F9).
- Los campos de número de página (`PAGE`/`NUMPAGES`) se actualizan solos al abrir.

## Construir un documento a medida (Python)

```python
import sys; sys.path.insert(0, "herramientas")
from estilo import nuevo_documento, portada, indice, h, para, grid

doc = nuevo_documento(encabezado="Pasantía - Tinogasta")
portada(doc, "INSTITUTO DE ESTUDIOS SUPERIORES DE TINOGASTA",
        "Tecnicatura en Desarrollo de Software",
        "TRABAJO PRÁCTICO N° 5", "Título del tema",
        subtitulo="Subtítulo opcional",
        datos=[("Alumno", "Pérez Sami Taiel Antonio"), ("Legajo", "........")])
indice(doc)
h(doc, "1. Sección", 1, page_break=True)
para(doc, "Texto de ejemplo.", first_indent=0.75)
doc.save("mi_documento.docx")
```

## Notas

- El estilo replica el del informe TP3 (`_informe.py` en `infromacion para el diagnostico/documentacion/`), unificado aquí para reutilizarlo en todos los documentos.
- La plantilla de referencia solo controla estilos (fuentes, tamaños, interlineado); la portada, el índice y la numeración se agregan por script cuando se necesita.
- Si `python` no se reconoce, usar `py` (launcher de Windows).
