// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrAucae4_kJGAqPiXDBBnY4b3R9NNyRB0",
  authDomain: "netlixgpt.firebaseapp.com",
  projectId: "netlixgpt",
  storageBucket: "netlixgpt.appspot.com",
  messagingSenderId: "75318064404",
  appId: "1:75318064404:web:664d0852d941517979be01",
  measurementId: "G-8B3DM18NWB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
