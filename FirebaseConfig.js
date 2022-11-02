// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9YJ-hgn-GADfwA1Lp2jeywy1ZQuKIl7Q",
  authDomain: "real-bdb02.firebaseapp.com",
  projectId: "real-bdb02",
  storageBucket: "real-bdb02.appspot.com",
  messagingSenderId: "418143448322",
  appId: "1:418143448322:web:b746a8ae73e57cd217e61b",
  measurementId: "G-Z0WTS4DGDC"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage=getStorage(app);