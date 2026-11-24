# Componente: FormProductor

## Identificación
- Nombre: FormProductor.tsx
- Ruta: src/components/FormProductor.tsx

## Propósito
Formulario alta/modificación con validaciones

## Props
```typescript
interface Props {
  modo: Modo
  inicial?: Productor
  onSubmit: (data: Productor) => Promise<void>
  loading?: boolean
}
```

## Campos
DNI, CUIT, Apellido*, Nombre*, Rubro, Proyecto, Telefono, Direccion, Localidad, Observaciones (+ metadatos solo lectura si edición)

## Validaciones
- Apellido y Nombre obligatorios
- DNI obligatorio en alta
- Normalizar DNI

## Criterios aceptación
- [ ] Modo alta muestra form vacío
- [ ] Modo editar precarga datos
- [ ] Validaciones funcionan
- [ ] Deshabilita botón al enviar
- [ ] Muestra errores
