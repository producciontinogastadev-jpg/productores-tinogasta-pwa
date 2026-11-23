# Componente: FormProductor

**Ruta:** `src/components/FormProductor.tsx`  
**Tipo:** Form container  
**Prioridad:** Alta

## 1. Propósito

Formulario único para **Alta** o **Modificación** de productor. Gestiona validaciones, envío vía servicio y muestra feedback.

## 2. Props

```typescript
interface FormProductorProps {
  modo: "crear" | "editar";
  datosIniciales?: Partial<Productor>;
  onGuardado: (exito: boolean, mensaje?: string) => void;
  onCancelar?: () => void;
  deshabilitado?: boolean;
  actualizadoPor?: string; // quien opera
}
```

## 3. Estado interno

```typescript
const [form, setForm] = useState<Partial<Productor>>(datosIniciales || {});
const [errores, setErrores] = useState<string[]>([]);
const [loading, setLoading] = useState(false);
const [mensaje, setMensaje] = useState<{tipo:'ok'|'err';txt:string}|null>(null);
```

## 4. Campos mínimos

DNI, Apellido, Nombre, CUIT?, Rubro?, Proyecto?, Telefono?, Direccion?, Localidad?, Observaciones?

## 5. Eventos

- `handleChange(e)` – actualiza campo por name
- `handleBlur` – validación por campo (opcional)
- `handleSubmit` – valida global → llama crear/actualizar

## 6. Comportamiento

- Modo crear: requiere DNI/Apellido/Nombre
- Modo editar: requiere `ID_Productor`
- Al crear: agregar `Fecha_Alta`, `ID_Productor` lo genera Apps Script (recomendado) o frontend? **Generar en Apps Script**
- Al editar: agregar `Fecha_Actualizacion`, `Actualizado_Por`
- Mostrar lista de errores
- Deshabilitar botón guardar en loading

## 7. Estilos sugeridos

```text
form: "flex flex-col gap-4 p-4 border rounded bg-white"
grid: "grid grid-cols-1 md:grid-cols-2 gap-3"
campo: "flex flex-col gap-1"
input: "border rounded px-3 py-2"
errores: "text-sm text-red-600 list-disc pl-5"
acciones: "flex gap-2"
```

## 8. Estructura JSX (esqueleto)

```tsx
<form onSubmit={handleSubmit}>
  <div className="grid">
    <Input label="DNI *" name="DNI" value={form.DNI||""} onChange={handleChange} disabled={modo==='editar'}/>
    <Input label="CUIT" name="CUIT" value={form.CUIT||""} onChange={handleChange}/>
    <Input label="Apellido *" name="Apellido" value={form.Apellido||""} onChange={handleChange}/>
    <Input label="Nombre *" name="Nombre" value={form.Nombre||""} onChange={handleChange}/>
    {/* resto */}
  </div>
  {errores.length>0 && <ul className="errores">{errores.map(e=><li key={e}>{e}</li>)}</ul>}
  {mensaje && <Alerta tipo={mensaje.tipo} texto={mensaje.txt}/>}
  <div className="acciones">
    <Boton tipo="submit" loading={loading}>Guardar</Boton>
    {onCancelar && <Boton tipo="button" variante="ghost" onClick={onCancelar}>Cancelar</Boton>}
  </div>
</form>
```

## 9. Dependencias

```typescript
import { useEffect, useState } from "react";
import Input from "./Input";
import Boton from "./Boton";
import Alerta from "./Alerta";
import { crearProductor, actualizarProductor } from "../services/productores.service";
import { validarAlta } from "../utils/validaciones";
import type { Productor } from "../types/productor.types";
```

## 10. Integración

Usado en `App.tsx` cuando hay modo crear/editar.

## 11. Criterios de aceptación

- [ ] Precarga `datosIniciales` al cambiar
- [ ] Valida obligatorios
- [ ] En modo editar no permite cambiar DNI
- [ ] Llama servicio correcto según modo
- [ ] Muestra errores/éxito
- [ ] Deshabilita guardar en loading

## 12. Pruebas mínimas

- Crear válido → éxito
- Crear sin obligatorios → errores
- Editar → envía `ID_Productor` presente
- Cambiar `datosIniciales` → resetea form

## 13. Notas

- No mutar `datosIniciales` directamente.
- Enviar solo campos necesarios.
- Añadir `Actualizado_Por` desde prop/contexto si existe.
