# Componente: Alerta

**Ruta:** `src/components/Alerta.tsx`  
**Tipo:** Presentacional  
**Prioridad:** Alta

## 1. Propósito
Mostrar mensajes feedback (éxito/error/aviso).

## 2. Props

```typescript
interface AlertaProps {
  tipo: "ok" | "err" | "warn" | "info";
  texto: string;
  onCerrar?: () => void;
}
```

## 3. Estilos

```text
ok: "bg-green-50 text-green-700 border-green-200"
err: "bg-red-50 text-red-700 border-red-200"
warn: "bg-yellow-50 text-yellow-700 border-yellow-200"
info: "bg-blue-50 text-blue-700 border-blue-200"
base: "p-3 border rounded flex justify-between"
```

## 4. Criterios de aceptación
- [ ] Aplica estilo según tipo
- [ ] Muestra texto
- [ ] onCerrar opcional funciona

## 5. Notas
Reutilizable en todo el módulo.
