# PROPUESTA 1: Especificación Técnica

**Versión Técnica – Para Desarrollo**

## 1. Objetivo Técnico

El objetivo técnico es implementar un módulo web acotado que permita dar de alta, buscar y actualizar productores sobre el **Registro de Productores Tinogasteños** existente en Google Sheets, utilizando **React + Vite + TypeScript** como frontend y **Google Apps Script (Web App)** como puente de comunicación, garantizando validaciones, prevención de duplicados y trazabilidad.

## 2. Alcance Técnico

### Alcance incluido

- Formulario para alta con campos mínimos necesarios.
- Buscador por DNI/CUIT.
- Precarga de datos para modificación controlada.
- Validación de campos obligatorios.
- Detección de duplicados (frontend + Apps Script).
- Inserción/actualización directa en hoja `Productores`.
- Generación y uso de `ID_Productor`.
- Metadatos: `Fecha_Alta`, `Actualizado_Por`, `Fecha_Actualizacion`.
- Llamadas HTTP con `fetch` (GET/POST) a Apps Script.
- Manejo de errores y feedback al usuario.
- Tipado con TypeScript.

### Fuera de alcance

- Autenticación completa con múltiples roles (puede evaluarse si sobra tiempo).
- Sincronización offline con cola de envíos.
- CRUD completo de todas las columnas históricas.
- Reportes con gráficos.
- Migración automática masiva.

## 3. Requerimientos Funcionales (RF)

| Código | Descripción |
|---|---|
| **RF01** | El sistema debe permitir buscar un productor por DNI y/o CUIT. |
| **RF02** | Si existe, debe mostrar sus datos y permitir modificarlo. |
| **RF03** | Si no existe, debe habilitar el formulario de alta. |
| **RF04** | Debe validar campos obligatorios antes de enviar. |
| **RF05** | Debe prevenir duplicados por DNI (clave lógica). Debe advertir si coincide CUIT. |
| **RF06** | Debe registrar `Fecha_Alta` al crear un nuevo productor. |
| **RF07** | Debe registrar `Fecha_Actualizacion` y `Actualizado_Por` al modificar. |
| **RF08** | Debe generar un `ID_Productor` único al momento del alta. |
| **RF09** | Debe escribir/actualizar **únicamente** sobre la hoja `Productores` del Google Sheets existente. |

## 4. Requerimientos No Funcionales (RNF)

| Código | Descripción |
|---|---|
| **RNF01** | **Simplicidad:** Mantener código claro, entendible y minimalista. |
| **RNF02** | **Modularidad:** Separar componentes, servicios, hooks, utils y tipos. |
| **RNF03** | **Tipado:** Uso obligatorio de TypeScript. |
| **RNF04** | **Mantenibilidad:** Fácil de ampliar sin reestructurar todo. |
| **RNF05** | **Compatibilidad:** Funcional en Chrome/Edge. Responsive PC+Móvil. |
| **RNF06** | **Bajo acoplamiento:** Frontend no accede directo a Sheets API con claves. Usa Apps Script. |
| **RNF07** | **Trazabilidad:** Toda modificación queda registrada con metadatos. |
| **RNF08** | **Respeto a lo existente:** No crea registro paralelo. Usa planilla actual. |
| **RNF09** | **Desarrollo ágil:** Enfoque MVP, sin sobreingeniería. |

## 5. Análisis del Estado Actual

- Registro existe en **Google Sheets** (proveniente de Excel) desde 2019.
- Altas/correcciones se hacen manualmente.
- Riesgo de duplicados y múltiples versiones.
- Nodo central: Walter Quiroga (registro, validación, coordinación).
- Se busca **ampliar** el registro, **no reemplazarlo**.

## 6. Arquitectura del Sistema

### 6.1 Diagrama conceptual

```text
EXCEL (.xlsx) --[Traspaso controlado]--> GOOGLE SHEETS (.gsheet) - Hoja: Productores
                                                ↓
                                            Apps Script Web App
                                                (doGet / doPost)
                                                ↑↓  JSON (application/json)
                                        Frontend (React + Vite + TypeScript)
                                            - Formulario Alta
                                            - Buscador (DNI/CUIT)
                                            - Formulario Modificación
```

### 6.2 Componentes

| Componente | Función |
|---|---|
| **Frontend** | Interfaz, validaciones UX, búsqueda, alta/modificación. |
| **Google Apps Script Web App** | Capa de lógica: validación, prevención duplicados, generación ID, inserción/actualización. |
| **Google Sheets (Productores)** | Persistencia única. Fuente de verdad. |

### 6.3 Flujo de comunicación

1. Frontend construye request (GET para búsqueda / POST para crear/actualizar).
2. Envía `fetch` a URL de Web App.
3. Apps Script recibe parámetros/body JSON.
4. Ejecuta lógica con `SpreadsheetApp`.
5. Retorna respuesta JSON `{ ok: boolean, ... }`.
6. Frontend muestra feedback al usuario.

## 7. Estructura de Google Sheets

### 7.1 Hoja destino

Crear/usar hoja llamada **`Productores`** en el archivo `.gsheet` resultante del traspaso.

### 7.2 Encabezados propuestos

Se mantienen columnas existentes si son útiles. Se **agregan obligatoriamente** las de control.

| Columna | Tipo | Requerido | Descripción |
|---|---|---|---|
| **ID_Productor** | Texto | Sí (auto) | Clave única interna. Ej.: `PROD-20261013-XXXXXX` |
| **DNI** | Texto/Número | Sí | Clave lógica para validación. Normalizar sin puntos. |
| **CUIT** | Texto | Según uso | Complementario. Validar formato básico si se carga. |
| **Apellido** | Texto | Sí | Apellido/s |
| **Nombre** | Texto | Sí | Nombre/s |
| **Rubro** | Texto | Recomendado | Según clasificación actual |
| **Proyecto** | Texto | Recomendado | Vinculado a proyecto |
| **Telefono** | Texto | Opcional | Contacto |
| **Direccion** | Texto | Opcional | Dirección |
| **Localidad** | Texto | Opcional | Localidad |
| **Observaciones** | Texto | Opcional | Notas |
| **Fecha_Alta** | Fecha/Hora | Sí (auto) | Cuándo se dio de alta |
| **Actualizado_Por** | Texto | Sí (auto) | Usuario/identificador que operó |
| **Fecha_Actualizacion** | Fecha/Hora | Sí (auto) | Última modificación |

> **Nota:** Si ya existen encabezados distintos, conservar los útiles. Lo importante es tener `ID_Productor` + metadatos.

### 7.3 Reglas sobre estructura

- Fila 1 = **encabezados** (únicos).
- No insertar columnas entre datos existentes sin justificar.
- No eliminar columnas originales sin validar impacto.
- Usar **únicamente** hoja `Productores` para este módulo.

## 8. Traspaso Excel → Google Sheets

Aplicar **guía 4.1** de la propuesta.

Pasos resumidos:

1. **Local:** Copiar `.xlsx` a Escritorio, revisar, cerrar Excel.
2. **Drive:** Subir a carpeta destino en [drive.google.com](https://drive.google.com).
3. **Convertir:** `Archivo > Guardar como Hojas de cálculo de Google`.
4. **Verificar:** Comparar pestañas/filas. Quedar con 2 archivos (`.xlsx` respaldo + `.gsheet` uso).
5. **Preparar hoja:** Renombrar a `Productores`, agregar columnas de control si faltan.

## 9. Google Apps Script (Web App)

### 9.1 Objetivo

Exponer endpoints mínimos para búsqueda, alta y actualización, con validaciones server-side.

### 9.2 Estructura sugerida

```text
Code.gs
├── CONFIG
├── doGet(e)
├── doPost(e)
├── handleSearch(params)
├── handleCreate(data)
├── handleUpdate(data)
├── findRowByDNI(sheet, dni)
├── findRowByCUIT(sheet, cuit)
├── findRowByID(sheet, id)
├── generateId()
└── utils (normalizar, fechas)
```

### 9.3 Implementación base (referencial)

```javascript
const SHEET_NAME = "Productores";
const ID_PREFIX = "PROD";

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME);
}

function generateId() {
  const now = new Date();
  const ts = Utilities.formatDate(now, Session.getScriptTimeZone(), "yyyyMMddHHmmss");
  const rnd = Math.random().toString(36).substr(2, 5).toUpperCase();
  return ID_PREFIX + "-" + ts + "-" + rnd;
}

function doGet(e) {
  try {
    const action = e.parameter.action;
    if (action === "search") {
      const dni = (e.parameter.dni || "").toString().trim();
      const cuit = (e.parameter.cuit || "").toString().trim();
      const sheet = getSheet();
      const results = [];
      // leer encabezados + filas (simplificado)
      // implementar búsqueda real
      return ContentService.createTextOutput(JSON.stringify({ ok: true, results }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    return ContentService.createTextOutput(JSON.stringify({ ok:false, error:"Invalid action" })).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ ok:false, error:err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
```


### B) Servicio TypeScript – Listo para usar

```typescript
const BASE = import.meta.env.VITE_APPS_SCRIPT_URL;

export async function apiGet(params: Record<string,string>) {
  const q = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE}?${q}`);
  return res.json();
}

export async function apiPost(body: any) {
  const res = await fetch(BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  return res.json();
}
```
