// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh89q13_d-MQPc2B3uvggDJkdfZL0crgY",
  authDomain: "tienda2-e240d.firebaseapp.com",
  projectId: "tienda2-e240d",
  storageBucket: "tienda2-e240d.firebasestorage.app",
  messagingSenderId: "234749399476",
  appId: "1:234749399476:web:bd9d053ae3605fda8c22e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // Initialize and export auth