// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOsUuF-U760y_lphRarsEWBdG-3vSVDi4",
  authDomain: "piw-lab5-46074.firebaseapp.com",
  projectId: "piw-lab5-46074",
  storageBucket: "piw-lab5-46074.appspot.com",
  messagingSenderId: "283695142486",
  appId: "1:283695142486:web:9aa0a3f7970755c82a8df7",
  measurementId: "G-DL9Z5R0RQ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const fireStore = getFirestore(app);
export const db = getFirestore(app);
