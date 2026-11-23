# Componente: Buscador

## Identificación
- Nombre: Buscador.tsx
- Ruta sugerida: src/components/Buscador.tsx
- Tipo: Container/Control

## Propósito
Buscar productor por DNI/CUIT para decidir alta/modificación

## Props
```typescript
interface Props {
  onEncontrado: (prod: Productor|null, modo: Modo) => void
  onLimpiar?: () => void
}
```

## Estado interno
- dni: string
- cuit: string
- loading: boolean
- error: string|null

## Comportamiento
- Normalizar dni (quitar . - espacios)
- Validar mínimo 1 campo
- Llamar apiGet action=search
- Si results.length>0 → onEncontrado(first,'editar')
- Si vacío → onEncontrado(null,'alta')
- Mostrar errores claros

## Criterios aceptación
- [ ] Busca por DNI
- [ ] Busca por CUIT
- [ ] Muestra loading
- [ ] Muestra error si falla
- [ ] Precarga en edición si existe
- [ ] Habilita alta si no existe
