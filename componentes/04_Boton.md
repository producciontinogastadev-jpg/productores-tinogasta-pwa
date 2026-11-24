# Componente: Boton

**Ruta:** `src/components/Boton.tsx`  
**Tipo:** Presentacional  
**Prioridad:** Alta

## 1. Propósito
Botón reutilizable con variantes y estado loading.

## 2. Props

```typescript
interface BotonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: "primary" | "ghost" | "danger";
  loading?: boolean;
}
```

## 3. Estilos

```text
base: "px-4 py-2 rounded disabled:opacity-50 flex items-center gap-2"
primary: "bg-blue-600 text-white"
ghost: "border bg-white"
danger: "bg-red-600 text-white"
```

## 4. Estructura JSX

```tsx
export default function Boton({ variante="primary", loading=false, children, disabled, ...props }: BotonProps) {
  return (
    <button disabled={disabled||loading} className={`... ${variante}`} {...props}>
      {loading && <span>...</span>}
      {children}
    </button>
  );
}
```

## 5. Criterios de aceptación
- [ ] Variantes aplican clases correctas
- [ ] loading deshabilita
- [ ] children renderiza

## 6. Notas
Sencillo, enfocado a MVP.
