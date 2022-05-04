// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFq4IVqiykFh5vYr45mERb5ERs53oou6Y",
  authDomain: "avernum-edc5c.firebaseapp.com",
  projectId: "avernum-edc5c",
  storageBucket: "avernum-edc5c.appspot.com",
  messagingSenderId: "383751825619",
  appId: "1:383751825619:web:ab124252463787d8a94c26"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);