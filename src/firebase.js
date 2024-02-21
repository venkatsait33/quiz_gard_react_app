// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB33UPp4b1ycFdP3lPALz_xm4-OX3IvKiI",
  authDomain: "quiz-gard-app.firebaseapp.com",
  projectId: "quiz-gard-app",
  storageBucket: "quiz-gard-app.appspot.com",
  messagingSenderId: "442117730201",
  appId: "1:442117730201:web:32d091d61a6baa16f82d08",
  measurementId: "G-5PDS66NFVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
//firebase login
//firebase init
//firebase deploy