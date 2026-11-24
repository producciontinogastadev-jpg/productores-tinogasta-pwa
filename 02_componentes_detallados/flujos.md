# FLUJOS

## Flujo principal
1. Usuario accede. Estado modo='buscar'
2. Ingresa DNI/CUIT → buscar
3. Si existe → precargar datos, modo='editar', mostrar FormProductor con datos + metadatos (solo lectura)
4. Si NO existe → modo='alta', FormProductor vacío
5. Validar → enviar (create/update) → mostrar Alerta éxito/error
6. Permitir volver a buscar

## Reglas
- DNI obligatorio en alta
- No permitir crear si DNI ya existe
- En edición solo modificar campos editables; metadatos calculados servidor
- Feedback claro siempre
