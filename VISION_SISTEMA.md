# VISIÓN DE SISTEMA vs ALCANCE DE PASANTÍA

> **Nota de alcance vigente (2026-11-09):** Este documento conserva la visión anterior de integración entre tres propuestas. Ya no guía el desarrollo actual. El único proyecto activo es el piloto de la Propuesta 1; no se desarrollarán ni se tomarán requisitos de las Propuestas 2 y 3. Consultar `05_plan_piloto/CONTEXTO_PROYECTO.md` para el alcance vigente.

## Aclaración de fondo (importante)
Las **tres propuestas forman, en el fondo, un mismo sistema integral** para la gestión de la información de la Secretaría de Producción:

| Propuesta | Rol en el sistema integral |
|---|---|
| **Propuesta 1** — Alta y Actualización Controlada | Núcleo de datos: registro único y trazable de productores y fichas de campo |
| **Propuesta 2** — Mapa de Productores y Planificador de Visitas | Módulo de campo: geolocalización, filtros y planificación de visitas sobre el mismo registro |
| **Propuesta 3** — Portal Web Informativo | Frente de comunicación: acceso público e informativo para el productor |

Vistas en conjunto, las tres cubren el ciclo completo: **captura → organización territorial → comunicación**.

## Por qué no se integra todo
El contexto de la **pasantía** impone límites reales (tiempo, equipos, procesos):
- No es viable construir y poner en producción el sistema completo en el plazo del proyecto.
- La institución todavía no tiene los procedimientos escritos ni los roles definidos que un sistema integrado exige.
- Integrar los tres módulos multiplicaría el riesgo sin mejorar el resultado del MVP.

## Qué se entrega entonces
Se elige y desarrolla **una parte funcional, bien implementada y simple (MVP)**.
- Un único módulo, completo y demostrable en el plazo.
- Con la arquitectura y las decisiones (datos, autenticación, estilo) **preparadas para que los otros módulos se integren después** sin rehacer lo hecho.
- La elección del módulo a desarrollar se formaliza en el TP4 (matriz de viabilidad + selección).

## Cómo se refleja esto en la documentación
- Cada propuesta se documenta de forma **completa y autocontenida** (como si fuera a desarrollarse).
- Pero cada alcance distingue explícitamente **MVP de pasantía** vs **post-pasantía / sistema integral**.
- Las referencias internas entre propuestas son de **arquitectura futura**, no una obligación del MVP de esta pasantía.
