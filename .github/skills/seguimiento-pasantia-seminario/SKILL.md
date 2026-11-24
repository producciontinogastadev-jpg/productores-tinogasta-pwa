---
name: seguimiento-pasantia-seminario
description: "Use when working on the Propuesta 1 Excel-to-PWA pilot, recording a Pasantía logbook session, or updating a Seminario stage deliverable alongside implementation."
---

# Seguimiento de Pasantía y Seminario

Keep the two active academic deliverables in sync with the Propuesta 1 pilot: the Pasantía session logbook and the current Seminario stage.

## Before each work session

1. Read `INSTRUCCIONES_GENERALES.md`, `INSTRUCCIONES_SESION.md`, `PENDIENTES.md`, and the pilot context and roadmap in `Propuestas/Propuesta 1 - Alta y Actualizacion Controlada/05_plan_piloto/`.
2. Read `Propuestas/Propuesta 1 - Alta y Actualizacion Controlada/INSTRUCCIONES_PROYECTO.md`.
3. Read `Propuestas/Propuesta 1 - Alta y Actualizacion Controlada/03_pasantia/bitacora/REGISTRO_SESIONES.md` to recover the session-by-session history.
4. Identify the current pilot activity from the roadmap and the Seminario stage it supports. Read that stage's existing document before changing it.
5. Use the Excel/workbook and the user's field observations as the source for concrete form fields and process rules. Do not use the other proposals or old diagnoses as requirements.

## During implementation

- Implement and verify the requested project change; keep notes of actual decisions, changed files, and test/validation outcomes as work happens.
- Do not create Firebase or deploy before the corresponding roadmap stage.
- Keep the Pasantía MVP minimal. Do not expand logging, permissions, workflow states, or UI beyond what is needed for the agreed flow; record optional enhancements as post-Pasantía only when useful.
- Use fictitious or anonymized data in examples. Never put credentials, recovery codes, private keys, or producer personal data in documentation.

## At the end of each work session

1. **Always update `Propuestas/Propuesta 1 - Alta y Actualizacion Controlada/03_pasantia/bitacora/REGISTRO_SESIONES.md`.** Append one dated session entry with objective, work completed, decisions, changed files, validation (or why none was needed), blockers, and next steps. Never replace earlier entries.
2. Update the formal Pasantía logbook in `bitacora/YYYY-MM-DD.md` using `bitacora/template.md`. Include the session's actual activities and decisions. If that date already exists, append a clearly separated entry rather than overwriting earlier work.
3. For project implementation or decisions that advance Seminario, update only the relevant living document in `04_seminario/` with verified progress, artifacts, and evidence. Keep unfinished items explicit. Do not claim a deliverable is complete unless its stated criteria have been checked.
4. Update `PENDIENTES.md` for work that was completed or newly identified. Preserve historical entries; do not delete them.
5. If the stage or its acceptance criteria are unclear, record the uncertainty and ask the user instead of inventing institutional requirements.

Do this at the end of the project work in the current session without waiting for a reminder. If no project work or decision occurred in a session, do not add a noise entry.

## Deliverable boundaries

- Pasantía: maintain the session logbook only, unless the user explicitly requests another deliverable.
- Seminario: prepare the existing stage documents incrementally, as each stage is reached.
- Do not rewrite previously submitted/closed root reports such as TP3/TP4 unless explicitly requested.
- Do not generate extra manuals, reports, evidence packages, or presentation materials unless requested or required by a confirmed stage criterion.
