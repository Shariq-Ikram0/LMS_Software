// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDknszE0iYQmiUwd2D4S7jERHei-KphdN0",
  authDomain: "lms-website-0.firebaseapp.com",
  projectId: "lms-website-0",
  storageBucket: "lms-website-0.appspot.com",
  messagingSenderId: "168466573805",
  appId: "1:168466573805:web:2c442bbbb57d40f2f29fe4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);
