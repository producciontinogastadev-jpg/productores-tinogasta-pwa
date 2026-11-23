import { RegistroProductorVid } from '../types';

/**
 * URL del Webhook de Google Apps Script.
 * Se define en el archivo .env.local mediante la variable VITE_SHEETS_WEBHOOK_URL.
 */
const SHEETS_WEBHOOK_URL = import.meta.env.VITE_SHEETS_WEBHOOK_URL || '';

export const isSheetsConfigured = Boolean(
  SHEETS_WEBHOOK_URL && SHEETS_WEBHOOK_URL.startsWith('https://script.google.com')
);

export interface ResultadoSheets {
  success: boolean;
  fila?: number;
  tipoTramite?: 'ALTA' | 'ACTUALIZACION';
  mensaje?: string;
  error?: string;
}

/**
 * Envía un registro confirmado de productor a Google Sheets a través del Webhook de Apps Script.
 * 
 * NOTA TÉCNICA: Se utiliza Content-Type 'text/plain' para evitar la solicitud previa OPTIONS (CORS preflight)
 * que Google Apps Script rechaza, y 'redirect: follow' para seguir el redirect 302 que devuelve Google.
 */
export async function enviarRegistroASheets(registro: RegistroProductorVid): Promise<ResultadoSheets> {
  if (!isSheetsConfigured) {
    console.warn(
      '⚠️ Webhook de Google Sheets no configurado en .env.local (VITE_SHEETS_WEBHOOK_URL). Se simula confirmación local.'
    );
    return {
      success: true,
      fila: 10000 + Math.floor(Math.random() * 500),
      mensaje: 'Modo simulación: Webhook de Google Sheets pendiente de configurar en .env.local',
    };
  }

  try {
    const respuesta = await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(registro),
      redirect: 'follow',
    });

    if (!respuesta.ok) {
      throw new Error(`Error HTTP de Google Apps Script: ${respuesta.status} ${respuesta.statusText}`);
    }

    const data = await respuesta.json();

    if (!data.success) {
      throw new Error(data.mensaje || 'Error desconocido retornado por Google Sheets');
    }

    return {
      success: true,
      fila: data.fila,
      tipoTramite: data.tipoTramite,
      mensaje: data.mensaje,
    };
  } catch (err: any) {
    console.error('Error al enviar a Google Sheets:', err);
    return {
      success: false,
      error: err.message || 'Error de conexión con Google Sheets',
    };
  }
}
