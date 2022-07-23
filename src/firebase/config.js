
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfaA52EXIprEH3FdhR9G7cnrR1Xdn7U6c",
  authDomain: "puro-monchis-carrito.firebaseapp.com",
  projectId: "puro-monchis-carrito",
  storageBucket: "puro-monchis-carrito.appspot.com",
  messagingSenderId: "246954219873",
  appId: "1:246954219873:web:cd1b12eb6fa83c76010d20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export default function iniFirestore(){
    return app
}  