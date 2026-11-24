import { RegistroProductorVid, EstadoRegistro } from '../types';

const DB_NAME = 'RegistroTinogastaDB';
const DB_VERSION = 1;
const STORE_REGISTROS = 'registros';

/**
 * Inicializa y abre la base de datos IndexedDB local del navegador.
 */
export function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error('IndexedDB no está soportado en este navegador.'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_REGISTROS)) {
        const store = db.createObjectStore(STORE_REGISTROS, { keyPath: 'id' });
        store.createIndex('estado', 'estado', { unique: false });
        store.createIndex('fechaCreacion', 'fechaCreacion', { unique: false });
        store.createIndex('dni', 'dni', { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Guarda o actualiza un registro de forma persistente en IndexedDB.
 */
export async function dbGuardarRegistro(registro: RegistroProductorVid): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_REGISTROS, 'readwrite');
    const store = tx.objectStore(STORE_REGISTROS);
    const req = store.put(registro);

    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

/**
 * Guarda múltiples registros en una sola transacción (usado para inicialización o sincronización).
 */
export async function dbGuardarMultiples(registros: RegistroProductorVid[]): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_REGISTROS, 'readwrite');
    const store = tx.objectStore(STORE_REGISTROS);

    registros.forEach((reg) => store.put(reg));

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

/**
 * Obtiene todos los registros guardados en el disco local de IndexedDB.
 */
export async function dbObtenerTodos(): Promise<RegistroProductorVid[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_REGISTROS, 'readonly');
    const store = tx.objectStore(STORE_REGISTROS);
    const req = store.getAll();

    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

/**
 * Actualiza el estado de un registro en IndexedDB (ej. de LOCAL a PENDIENTE o a CONFIRMADO).
 */
export async function dbActualizarEstado(id: string, nuevoEstado: EstadoRegistro): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_REGISTROS, 'readwrite');
    const store = tx.objectStore(STORE_REGISTROS);
    const reqGet = store.get(id);

    reqGet.onsuccess = () => {
      const reg = reqGet.result as RegistroProductorVid | undefined;
      if (reg) {
        reg.estado = nuevoEstado;
        if (nuevoEstado === 'CONFIRMADO') {
          reg.enviadoSheets = true;
        }
        store.put(reg);
        resolve();
      } else {
        resolve();
      }
    };

    reqGet.onerror = () => reject(reqGet.error);
  });
}

/**
 * Elimina un registro de IndexedDB si fuese necesario.
 */
export async function dbEliminarRegistro(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_REGISTROS, 'readwrite');
    const store = tx.objectStore(STORE_REGISTROS);
    const req = store.delete(id);

    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

