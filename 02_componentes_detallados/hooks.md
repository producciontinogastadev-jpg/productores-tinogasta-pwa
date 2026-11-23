# HOOKS

## useBuscador
- Estado: dni/cuit, loading, error, encontrado(Productor|null), resultados[]
- buscar() llama apiGet
- reset()

## useFormProductor
- Estado form + validaciones + loading + mensaje
- Validar campos obligatorios (DNI, Apellido, Nombre)
- Normalizar DNI
- submit() decide create/update según modo
- limpiar()

## useAppsScript
- Wrapper apiGet/apiPost con try/catch
- Normaliza errores
