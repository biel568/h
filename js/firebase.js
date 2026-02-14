// 🔥 IMPORTS VIA CDN (OBRIGATÓRIO PRA GITHUB PAGES)
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js';

import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js';

import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  Timestamp,
  onSnapshot,
  serverTimestamp,
  limit,
} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-storage.js';


// 🔥 CONFIG DO SEU PROJETO
const firebaseConfig = {
  apiKey: "AIzaSyBA-_OgmbpD4OoRTrDIn6JgXpe2KPYWwuU",
  authDomain: "lcjuros.firebaseapp.com",
  projectId: "lcjuros",
  storageBucket: "lcjuros.appspot.com", 
  messagingSenderId: "6790828854",
  appId: "1:6790828854:web:2c83fe17cb2eee17fad997"
};


// 🔥 INICIALIZAÇÃO
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
await setPersistence(auth, browserLocalPersistence);

const db = getFirestore(app);
const storage = getStorage(app);


// 🔥 EXPORTS
export {
  app,
  auth,
  db,
  storage,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  Timestamp,
  onSnapshot,
  serverTimestamp,
  limit,
  ref,
  uploadBytes,
  getDownloadURL,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
};
