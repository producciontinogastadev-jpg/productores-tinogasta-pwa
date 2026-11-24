# Componente: FormularioSolicitud

## Identificación
- Nombre: `FormularioSolicitud.tsx`
- Ruta sugerida: `src/components/contacto/FormularioSolicitud.tsx`
- Tipo: Control (opcional)

## Propósito
Permitir que el productor envíe una solicitud ligera (nombre, contacto, motivo) que se deriva por WhatsApp o hacia Google Sheets.

## Props
```typescript
interface Props {
  destino?: 'whatsapp' | 'sheets'
  numeroWhatsApp?: string
  onEnviado?: () => void
}
```

## Estado interno
- `solicitud: Solicitud`
- `enviando: boolean`
- `enviado: boolean`
- `error: string | null`

## Comportamiento
- Valida nombre y contacto obligatorios.
- Si `destino === 'whatsapp'` → abre WhatsApp con los datos preformateados.
- Si `destino === 'sheets'` → `solicitudService.enviarSolicitud`.
- Confirmación visual al enviar.

## Estilos (Tailwind)
- Campos grandes, accesibles; botón principal destacado.

## Dependencias
- `useFormularioSolicitud`, `whatsappService`, `solicitudService`

## Integración
- Página Contacto o sección "Solicitar inscripción".

## Criterios de aceptación
- [ ] Valida campos obligatorios
- [ ] Envía por el destino elegido
- [ ] Muestra confirmación
- [ ] No requiere backend propio (si deriva a WhatsApp/Forms)

## Pruebas mínimas
- Campos vacíos → error visible.
- Envío exitoso → estado `enviado`.

## Notas
- Marcado como opcional: si complica el MVP, puede derivarse todo a WhatsApp.
