import {
  NEXT_PUBLIC_API_KEY,
  NEXT_PUBLIC_APP_ID,
  NEXT_PUBLIC_AUTH_DOMAIN,
  NEXT_PUBLIC_DB_URL,
  NEXT_PUBLIC_MEASUREMENT_ID,
  NEXT_PUBLIC_MESSAGING_SENDER_ID,
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_STORAGE_BUCKET,
} from '@env';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: NEXT_PUBLIC_API_KEY,
  authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: NEXT_PUBLIC_DB_URL,
  projectId: NEXT_PUBLIC_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: NEXT_PUBLIC_APP_ID,
  measurementId: NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
