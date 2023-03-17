// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiQlnrIndBvRrTKGFWaIP35ApoT_w4nH4",
  authDomain: "portfolio-efd48.firebaseapp.com",
  projectId: "portfolio-efd48",
  storageBucket: "portfolio-efd48.appspot.com",
  messagingSenderId: "940155261720",
  appId: "1:940155261720:web:207f76a671ae6ebd38446d",
  measurementId: "G-CRZG7YH8RW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)