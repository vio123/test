// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA15F62224j2EOnd67Gw4xhe1aGdhIxu_4",
  authDomain: "angajati-3a433.firebaseapp.com",
  projectId: "angajati-3a433",
  storageBucket: "angajati-3a433.appspot.com",
  messagingSenderId: "32299823419",
  appId: "1:32299823419:web:05617b291c29a645e2071e",
  measurementId: "G-1FWWQMJCM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);