import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  onSnapshot,
  Firestore,
  Unsubscribe,
} from 'firebase/firestore';
import { RegistroProductorVid, EstadoRegistro } from '../types';

// Configuración leída de variables de entorno seguras (Vite)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
};

// Verifica si la configuración real de Firebase fue provista
export const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey && firebaseConfig.projectId
);

let app: FirebaseApp | null = null;
let db: Firestore | null = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log('✓ Firebase inicializado correctamente para el proyecto:', firebaseConfig.projectId);
  } catch (err) {
    console.error('Error al inicializar Firebase:', err);
  }
} else {
  console.info(
    'ℹ️ Firebase no configurado aún en .env.local. La aplicación operará con almacenamiento local persistente (IndexedDB).'
  );
}

const COLECCION_REGISTROS = 'registros_productores';

/**
 * Guarda o actualiza un registro en Cloud Firestore.
 */
export async function fsGuardarRegistro(registro: RegistroProductorVid): Promise<void> {
  if (!db) return;
  const docRef = doc(db, COLECCION_REGISTROS, registro.id);
  await setDoc(docRef, registro, { merge: true });
}

/**
 * Escucha cambios en tiempo real en la colección de Firestore.
 */
export function fsEscucharRegistros(
  onUpdate: (registros: RegistroProductorVid[]) => void,
  onError?: (error: Error) => void
): Unsubscribe | null {
  if (!db) return null;

  const colRef = collection(db, COLECCION_REGISTROS);
  return onSnapshot(
    colRef,
    (snapshot) => {
      const lista: RegistroProductorVid[] = [];
      snapshot.forEach((d) => {
        lista.push(d.data() as RegistroProductorVid);
      });
      onUpdate(lista);
    },
    (err) => {
      console.error('Error al escuchar Firestore:', err);
      if (onError) onError(err);
    }
  );
}

/**
 * Actualiza el estado de un registro en Firestore (ej. confirmación, baja lógica o restauración).
 */
export async function fsActualizarEstado(
  id: string,
  nuevoEstado: EstadoRegistro,
  extras: Partial<RegistroProductorVid> = {}
): Promise<void> {
  if (!db) return;
  const docRef = doc(db, COLECCION_REGISTROS, id);
  await updateDoc(docRef, {
    estado: nuevoEstado,
    ...extras,
  });
}

