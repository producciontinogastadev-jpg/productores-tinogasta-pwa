/**
 * WEBHOOK DE GOOGLE APPS SCRIPT PARA LA PWA DE PRODUCTORES DE TINOGASTA
 * Pasantía / Secretaría de Producción de Tinogasta - Piloto VID
 * 
 * INSTRUCCIONES DE INSTALACIÓN EN GOOGLE SHEETS:
 * 1. Abrir la hoja de cálculo "2022 REGISTRO DE PRODUCTORES TINOGASTA NV" en Google Drive (convertida a Google Sheets).
 * 2. Ir al menú superior: Extensiones > Apps Script.
 * 3. Borrar el código de ejemplo que aparezca y pegar TODO este archivo.
 * 4. Guardar (icono de disco o Ctrl+S).
 * 5. Clic en "Implementar" (botón azul arriba a la derecha) > "Nueva implementación".
 * 6. En el engranaje tipo seleccionar: "Aplicación web".
 * 7. Configuración:
 *    - Descripción: "Webhook PWA Tinogasta"
 *    - Ejecutar como: "Yo" (tu cuenta de correo)
 *    - Quién tiene acceso: "Cualquier usuario" (Anyone) -> IMPORTANTE para que la PWA pueda enviar datos
 * 8. Clic en "Implementar" y autorizar los permisos si Google lo solicita.
 * 9. Copiar la "URL de la aplicación web" (termina en /exec) y pegarla en el archivo .env.local de la PWA.
 */

const NOMBRE_HOJA = 'REGISTRO';
const FILA_INICIO_DATOS = 6; // Fila donde inician los datos reales (filas 1 a 5 son encabezados)

/**
 * Endpoint GET: Para verificar rápidamente desde el navegador que el webhook está funcionando
 */
function doGet(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(NOMBRE_HOJA);
  
  var info = {
    status: 'online',
    servicio: 'Webhook PWA Productores Tinogasta',
    hoja: NOMBRE_HOJA,
    totalFilas: sheet ? sheet.getLastRow() : 0,
    timestamp: new Date().toISOString()
  };
  
  return ContentService.createTextOutput(JSON.stringify(info))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Endpoint POST: Recibe el registro desde la PWA (al confirmar en panel administrativo)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  // Bloquear por hasta 30 segundos para evitar colisiones si se confirman varios registros simultáneos
  lock.tryLock(30000);

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return respuestaJson(false, 'No se recibieron datos en la petición');
    }

    var payload = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(NOMBRE_HOJA);

    if (!sheet) {
      return respuestaJson(false, 'No se encontró la hoja "' + NOMBRE_HOJA + '" en la planilla');
    }

    var tipoTramite = payload.tipoTramite || 'ALTA';
    var filaDestino = -1;
    var esActualizacion = false;

    // Si es ACTUALIZACIÓN, buscar la fila existente por DNI (Columna C) o por nroRegistro (Columna A)
    if (tipoTramite === 'ACTUALIZACION' || payload.productorExistenteId) {
      filaDestino = buscarFilaProductor(sheet, payload.dni, payload.nroRegistro);
      if (filaDestino > 0) {
        esActualizacion = true;
      }
    }

    // Si es ALTA o si no se encontró fila previa en actualización, calcular la siguiente fila libre
    if (filaDestino <= 0) {
      filaDestino = obtenerSiguienteFilaLibre(sheet);
    }

    // Escribir los datos en las columnas A hasta AV respetando el mapeo oficial
    aplicarDatosEnFila(sheet, filaDestino, payload, esActualizacion);

    return respuestaJson(true, 'Registro guardado con éxito en Sheets', {
      fila: filaDestino,
      tipoTramite: esActualizacion ? 'ACTUALIZACION' : 'ALTA',
      dni: payload.dni,
      productor: payload.apellidoNombre
    });

  } catch (error) {
    return respuestaJson(false, 'Error procesando registro: ' + error.toString());
  } finally {
    lock.releaseLock();
  }
}

/**
 * Busca una fila por DNI (Columna C = 3) o por Nro de Registro (Columna A = 1)
 */
function buscarFilaProductor(sheet, dni, nroRegistro) {
  var lastRow = sheet.getLastRow();
  if (lastRow < FILA_INICIO_DATOS) return -1;

  var numRows = lastRow - FILA_INICIO_DATOS + 1;
  // Leemos columnas A a C (Nro Registro, Apellido, DNI)
  var data = sheet.getRange(FILA_INICIO_DATOS, 1, numRows, 3).getValues();

  var strDni = dni ? String(dni).trim() : '';
  var strNro = nroRegistro ? String(nroRegistro).trim() : '';

  for (var i = 0; i < data.length; i++) {
    var filaActual = FILA_INICIO_DATOS + i;
    var celdaNro = String(data[i][0]).trim();
    var celdaDni = String(data[i][2]).trim();

    if (strDni && celdaDni === strDni) {
      return filaActual;
    }
    if (strNro && celdaNro === strNro) {
      return filaActual;
    }
  }

  return -1;
}

/**
 * Encuentra la siguiente fila libre al final del bloque principal de productores.
 * Evita huecos aislados accidentales en el medio (como filas borradas) y evita
 * saltar al final de las 10.000 filas con formato residual.
 */
function obtenerSiguienteFilaLibre(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < FILA_INICIO_DATOS) return FILA_INICIO_DATOS;

  var numRows = lastRow - FILA_INICIO_DATOS + 1;
  // Leemos la Columna B (Apellido y Nombre)
  var data = sheet.getRange(FILA_INICIO_DATOS, 2, numRows, 1).getValues();

  var ultimaFilaConDatos = FILA_INICIO_DATOS - 1;
  var vaciasConsecutivas = 0;

  for (var i = 0; i < data.length; i++) {
    var nombre = data[i][0] ? String(data[i][0]).trim() : '';
    if (nombre !== '') {
      ultimaFilaConDatos = FILA_INICIO_DATOS + i;
      vaciasConsecutivas = 0;
    } else {
      vaciasConsecutivas++;
      // Si hay más de 5 filas vacías seguidas, terminó el bloque real de productores
      if (vaciasConsecutivas >= 5 && ultimaFilaConDatos >= FILA_INICIO_DATOS) {
        break;
      }
    }
  }

  return ultimaFilaConDatos + 1;
}

/**
 * Escribe los datos en las columnas A a AX
 * Si esActualizacion es true, solo sobreescribe si el campo del payload tiene valor (regla de no borrar datos)
 */
function aplicarDatosEnFila(sheet, fila, p, esActualizacion) {
  // Si es un ALTA nueva, clonar el formato exacto (colores, bordes, fuentes) de la fila anterior
  if (!esActualizacion && fila > FILA_INICIO_DATOS) {
    try {
      var filaOrigen = fila - 1;
      sheet.getRange(filaOrigen, 1, 1, 50).copyTo(
        sheet.getRange(fila, 1, 1, 50),
        SpreadsheetApp.CopyPasteType.PASTE_FORMAT,
        false
      );
    } catch (e) {
      // Si ocurre un detalle con el formato, no interrumpe la escritura de datos
    }
  }

  function poner(colIndex, valor) {
    if (valor === undefined || valor === null) return;
    if (esActualizacion && valor === '') return; // En actualización, campos vacíos conservan el dato previo
    sheet.getRange(fila, colIndex).setValue(valor);
  }

  function marcarX(colIndex, condicion) {
    if (condicion === true) {
      sheet.getRange(fila, colIndex).setValue('X');
    } else if (!esActualizacion && condicion === false) {
      sheet.getRange(fila, colIndex).setValue('');
    }
  }

  // --- IDENTIFICACIÓN ---
  // Col A (1): Nº de Registro
  if (p.nroRegistro) {
    poner(1, p.nroRegistro);
  } else if (!esActualizacion) {
    poner(1, fila - FILA_INICIO_DATOS + 1); // Auto-incremental si es alta y viene vacío
  }

  // Col B (2): Apellido y Nombre
  poner(2, p.apellidoNombre);

  // Col C (3): DNI
  poner(3, p.dni);

  // Col D (4): Fecha Nacimiento
  poner(4, p.fechaNacimiento);

  // Col E (5): Nombre Emprendimiento
  poner(5, p.nombreEmprendimiento);

  // Col F (6): Domicilio Emprendimiento
  poner(6, p.domicilioEmprendimiento);

  // Col G (7): Domicilio Particular
  poner(7, p.domicilioParticular);

  // Col H (8): Distrito / Localidad
  poner(8, p.distrito);

  // Col I (9): Teléfono
  poner(9, p.telefono);

  // Col J (10): Género FEM / Col K (11): Género MASC
  if (p.genero === 'FEM') {
    sheet.getRange(fila, 10).setValue('X');
    sheet.getRange(fila, 11).setValue('');
  } else if (p.genero === 'MASC') {
    sheet.getRange(fila, 10).setValue('');
    sheet.getRange(fila, 11).setValue('X');
  }

  // --- FINCA Y TENENCIA ---
  // Col Q (17): Reside SI / Col R (18): Reside NO
  if (p.resideEnPropiedad === 'SI') {
    sheet.getRange(fila, 17).setValue('X');
    sheet.getRange(fila, 18).setValue('');
  } else if (p.resideEnPropiedad === 'NO') {
    sheet.getRange(fila, 17).setValue('');
    sheet.getRange(fila, 18).setValue('X');
  }

  // Col S (19): Título / Col T (20): Préstamo / Col U (21): Alquiler / Col V (22): Sucesión
  if (p.situacionTenencia) {
    sheet.getRange(fila, 19).setValue(p.situacionTenencia === 'TITULO' ? 'X' : '');
    sheet.getRange(fila, 20).setValue(p.situacionTenencia === 'PREST' ? 'X' : '');
    sheet.getRange(fila, 21).setValue(p.situacionTenencia === 'ALQ' ? 'X' : '');
    sheet.getRange(fila, 22).setValue(p.situacionTenencia === 'SUCES' ? 'X' : '');
  }

  // Col AC (29): Superficie Total
  if (p.supTotal !== '' && p.supTotal !== undefined) {
    poner(29, Number(p.supTotal));
  }

  // Col AD (30): Observaciones
  poner(30, p.observaciones);

  // --- CULTIVO VID ---
  // Col AE (31): Cultivo ('VID')
  poner(31, 'VID');

  // Col AF (32): Variedad
  poner(32, p.variedad);

  // Col AG (33): Superficie Cultivada m²
  if (p.supM2 !== '' && p.supM2 !== undefined) {
    poner(33, Number(p.supM2));
  }

  // Col AH (34): Superficie en Ha -> SE PRESERVA SIEMPRE COMO FÓRMULA OFICIAL
  sheet.getRange(fila, 34).setFormula('=AG' + fila + '/10000');

  // Col AI (35): Venta / Col AJ (36): Autoconsumo
  if (p.destino === 'VENTA') {
    sheet.getRange(fila, 35).setValue('X');
    sheet.getRange(fila, 36).setValue('');
  } else if (p.destino === 'AUTOCONS') {
    sheet.getRange(fila, 35).setValue('');
    sheet.getRange(fila, 36).setValue('X');
  }

  // Riego: Col AK (37) Manto, AL (38) Goteo, AM (39) Aspersión, AN (40) Complementario
  if (p.riego) {
    sheet.getRange(fila, 37).setValue(p.riego === 'MANTO' ? 'X' : '');
    sheet.getRange(fila, 38).setValue(p.riego === 'GOTEO' ? 'X' : '');
    sheet.getRange(fila, 39).setValue(p.riego === 'ASPERSION' ? 'X' : '');
    sheet.getRange(fila, 40).setValue(p.riego === 'COMPLEM' ? 'X' : '');
  }

  // Maquinaria: Col AO (41) Propia, Col AP (42) Alquilada
  if (p.maquinaria) {
    sheet.getRange(fila, 41).setValue(p.maquinaria === 'PROPIA' ? 'X' : '');
    sheet.getRange(fila, 42).setValue(p.maquinaria === 'ALQUILADA' ? 'X' : '');
  }

  // --- FACTORES CLIMÁTICOS ---
  // AQ (43) Heladas, AR (44) Lluvia, AS (45) Granizo, AT (46) Zonda, AU (47) Zonda tardío
  if (p.factoresClimaticos) {
    marcarX(43, p.factoresClimaticos.heladasTardias);
    marcarX(44, p.factoresClimaticos.lluvia);
    marcarX(45, p.factoresClimaticos.granizo);
    marcarX(46, p.factoresClimaticos.zonda);
    marcarX(47, p.factoresClimaticos.zondaTardio);
  }

  // Nivel de daño: AV (48) Bajo, AW (49) Medio, AX (50) Alto
  if (p.nivelDano) {
    sheet.getRange(fila, 48).setValue(p.nivelDano === 'BAJO' ? 'X' : '');
    sheet.getRange(fila, 49).setValue(p.nivelDano === 'MEDIO' ? 'X' : '');
    sheet.getRange(fila, 50).setValue(p.nivelDano === 'ALTO' ? 'X' : '');
  }
}

/**
 * Función auxiliar para generar la respuesta JSON
 */
function respuestaJson(success, mensaje, extras) {
  var salida = {
    success: success,
    mensaje: mensaje,
    timestamp: new Date().toISOString()
  };

  if (extras) {
    for (var k in extras) {
      salida[k] = extras[k];
    }
  }

  return ContentService.createTextOutput(JSON.stringify(salida))
    .setMimeType(ContentService.MimeType.JSON);
}
