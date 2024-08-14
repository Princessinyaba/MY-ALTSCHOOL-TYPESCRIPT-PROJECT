// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
 apiKey: "AIzaSyArEQ389jqGjVS6vye3R6rC3etQcupSFWc",
  authDomain: "scissor-787b7.firebaseapp.com",
  projectId: "scissor-787b7",
  storageBucket: "scissor-787b7.appspot.com",
  messagingSenderId: "690451838032",
  appId: "1:690451838032:web:7d3e7404322e04cb734d55",
  measurementId: "G-HZ36YBN7DG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
