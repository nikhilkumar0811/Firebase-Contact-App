// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrfrG0g0cSnmQxfir7fRWTb-ARSyK4M20",
  authDomain: "vite-contact-8fde5.firebaseapp.com",
  projectId: "vite-contact-8fde5",
  storageBucket: "vite-contact-8fde5.appspot.com",
  messagingSenderId: "1035796997428",
  appId: "1:1035796997428:web:9ba130418450fb36457161",
  measurementId: "G-MF2HWH4WJ2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
