# Componente: Input

**Ruta:** `src/components/Input.tsx`  
**Tipo:** Presentacional (reutilizable)  
**Prioridad:** Alta

## 1. Propósito
Input controlado reutilizable con label, error, helper y accesibilidad.

## 2. Props

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  wrapperClassName?: string;
}
```

## 3. Estado interno
Ninguno.

## 4. Comportamiento
Mostrar label, error (rojo), helper. id generado o usar name.

## 5. Estilos

```text
wrapper: "flex flex-col gap-1"
label: "text-sm font-medium"
input: "border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
error: "text-xs text-red-600"
helper: "text-xs text-gray-500"
```

## 6. Estructura JSX

```tsx
export default function Input({ label, error, helperText, wrapperClassName="", id, name, ...props }: InputProps) {
  const inputId = id || name;
  return (
    <div className={`flex flex-col gap-1 ${wrapperClassName}`}>
      <label htmlFor={inputId} className="text-sm font-medium">{label}</label>
      <input id={inputId} name={name} className={`border rounded px-3 py-2 ${error?"border-red-500":""}`} {...props}/>
      {helperText && !error && <span className="text-xs text-gray-500">{helperText}</span>}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
```

## 7. Dependencias
React types.

## 8. Integración
Usado en FormProductor y otros formularios.

## 9. Criterios de aceptación
- [ ] Label asociado a input
- [ ] Error sobrescribe helper
- [ ] Disabled aplica estilos
- [ ] Forward props correcto

## 10. Notas
Extender HTMLInputAttributes para mantener flexibilidad.
