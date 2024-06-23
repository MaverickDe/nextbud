// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfyYOYVfBb63zksN_vjtndsG4Pu_maFWs",
  authDomain: "nextbudlanding.firebaseapp.com",
  projectId: "nextbudlanding",
  storageBucket: "nextbudlanding.appspot.com",
    messagingSenderId: "109467398171",
    // databaseURL: "https://[default].firebaseio.com",

  appId: "1:109467398171:web:96f1ad53f70bd8332348be",
  measurementId: "G-6SFGQRFYEL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const analytics = getAnalytics(app);