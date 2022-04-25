import "firebase/firestore";
import "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider } from "firebase/auth";

import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgjwE4FwK7oW2SDkCH95IEYk70Z3Kt0ao",
  authDomain: "lugares-y-puntos-a8b29.firebaseapp.com",
  projectId: "lugares-y-puntos-a8b29",
  storageBucket: "lugares-y-puntos-a8b29.appspot.com",
  messagingSenderId: "1014847077524",
  appId: "1:1014847077524:web:49c6473a6278108ac80881",
  measurementId: "G-4DW2NBCWGR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  doc, //Referencia a documento en Firestore
  setDoc, // Setea Datos en la base de Firestore,
  collection,
  getDocs, // Importar getDocs de firebase/firestore
};
