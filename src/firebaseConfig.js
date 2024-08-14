// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "api Key",
  authDomain: "auth DOMAIN ID",
  projectId: "project ID",
  storageBucket: "storage Bucket",
  messagingSenderId: "message sender ID",
  appId: "api ID",
  measurementId: "measurement ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
