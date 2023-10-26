// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrAHhnHw3Fd7WneVXPS5VkqMjHh0TNUww",
  authDomain: "judeefr.firebaseapp.com",
  projectId: "judeefr",
  storageBucket: "judeefr.appspot.com",
  messagingSenderId: "553292738879",
  appId: "1:553292738879:web:cc8d19d94ed2335ff7a38a",
  measurementId: "G-WD3LHQTDXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);