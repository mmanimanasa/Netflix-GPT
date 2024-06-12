// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL_e1rG8srwjuoMxsJz4sssGceqt_ID88",
  authDomain: "netflixgpt-47511.firebaseapp.com",
  projectId: "netflixgpt-47511",
  storageBucket: "netflixgpt-47511.appspot.com",
  messagingSenderId: "904605692081",
  appId: "1:904605692081:web:5accd5e1749450c92fb290",
  measurementId: "G-9C9NS25CR7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();