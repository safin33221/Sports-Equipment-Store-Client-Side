// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIK3RLPpkC1Tq7GJJIlEDGCaPEUFSLUUg",
    authDomain: "sports-equipment-store-7f46d.firebaseapp.com",
    projectId: "sports-equipment-store-7f46d",
    storageBucket: "sports-equipment-store-7f46d.firebasestorage.app",
    messagingSenderId: "614371274035",
    appId: "1:614371274035:web:3d42c48ca156c57a40e246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);