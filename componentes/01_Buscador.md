# Componente: Buscador

**Ruta:** `src/components/Buscador.tsx`  
**Tipo:** Container (lógica + UI)  
**Prioridad:** Alta

## 1. Propósito

Permitir buscar productor por **DNI** y/o **CUIT** para determinar si corresponde **Alta** o **Modificación**. Dispara callback con resultados.

## 2. Props

```typescript
interface BuscadorProps {
  onBuscar: (resultados: Productor[] | null, termino: { dni: string; cuit: string }) => void;
  onLimpiar?: () => void;
  deshabilitado?: boolean;
}
```

| Prop | Tipo | Req | Descripción |
|---|---|---|---|
| `onBuscar` | `(res, term) => void` | Sí | Retorna resultados o `null` si no hay |
| `onLimpiar` | `() => void` | No | Limpia formulario/resultados |
| `deshabilitado` | `boolean` | No | Deshabilita inputs/botón |

## 3. Estado interno

```typescript
const [dni, setDni] = useState("");
const [cuit, setCuit] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
```

## 4. Eventos

- `handleChangeDni` – normaliza a dígitos
- `handleChangeCuit` – permite dígitos/guiones si aplica
- `handleSubmit` – evita submit vacío, llama servicio `buscarPorDniCuit`
- `handleLimpiar` – resetea estado + callback

## 5. Comportamiento

- Al menos **un campo** debe tener valor para buscar.
- Mostrar error si ambos vacíos al intentar buscar.
- Llamar `servicios.productores.buscarPorDniCuit(dni,cuit)`.
- Setear `loading` true/false.
- Pasar resultados a `onBuscar`.
- No loggear datos sensibles.

## 6. Estilos (Tailwind)

```text
contenedor: "flex flex-col gap-3 p-4 border rounded-md bg-white"
fila: "flex flex-col md:flex-row gap-3"
grupo: "flex-1 flex flex-col gap-1"
input: "border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
botones: "flex gap-2"
btn-primary: "bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
btn-ghost: "border px-4 py-2 rounded"
error: "text-sm text-red-600"
```

## 7. Estructura JSX (esqueleto)

```tsx
<form onSubmit={handleSubmit}>
  <div className="contenedor">
    <div className="fila">
      <div className="grupo">
        <label htmlFor="dni">DNI</label>
        <input id="dni" value={dni} onChange={handleChangeDni} />
      </div>
      <div className="grupo">
        <label htmlFor="cuit">CUIT</label>
        <input id="cuit" value={cuit} onChange={handleChangeCuit} />
      </div>
    </div>
    {error && <p className="error">{error}</p>}
    <div className="botones">
      <button type="submit" disabled={loading||deshabilitado}>Buscar</button>
      <button type="button" onClick={handleLimpiar}>Limpiar</button>
    </div>
  </div>
</form>
```

## 8. Dependencias

```typescript
import { useState } from "react";
import type { Productor } from "../types/productor.types";
import { buscarPorDniCuit } from "../services/productores.service";
```

## 9. Integración

Usado en `App.tsx` arriba del formulario. Recibe resultados para decidir modo "crear" vs "editar".

## 10. Criterios de aceptación

- [ ] Busca con DNI solo / CUIT solo / ambos
- [ ] Muestra error si ambos vacíos
- [ ] Deshabilita botón en loading
- [ ] Limpia estado correctamente
- [ ] Retorna estructura coherente a padre

## 11. Pruebas mínimas

- Submit vacío → error
- Buscar DNI inexistente → `results=[]` o `null` según contrato
- Buscar existente → carga resultados
- Limpiar → vuelve a estado inicial

## 12. Notas

- Normalizar DNI: solo dígitos.
- Mantener CUIT tal como ingresa pero validar mínimamente si desea.
- Evitar llamadas duplicadas con loading.
