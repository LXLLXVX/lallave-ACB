// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD9Mt0Ih6VJJi3DhIsZZW-fTIFty-UaFiU",
  authDomain: "liga-acb-474f1.firebaseapp.com",
  databaseURL: "https://liga-acb-474f1-default-rtdb.europe-west1.firebasedatabase.app", 
  projectId: "liga-acb-474f1",
  storageBucket: "liga-acb-474f1.appspot.com",
  messagingSenderId: "594649969357",
  appId: "1:594649969357:web:0ee72321ed1237f0012f84"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
