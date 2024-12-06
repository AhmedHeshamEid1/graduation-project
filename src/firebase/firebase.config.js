// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvK9PrtiS7SnaGp_dDk-4GCNScpL42WTQ",
  authDomain: "mern-book-inventory-c6bfd.firebaseapp.com",
  projectId: "mern-book-inventory-c6bfd",
  storageBucket: "mern-book-inventory-c6bfd.firebasestorage.app",
  messagingSenderId: "777712267876",
  appId: "1:777712267876:web:bf6a526219ed40704fa571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;