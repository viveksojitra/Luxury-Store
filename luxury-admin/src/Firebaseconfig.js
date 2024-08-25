// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdKtz3634ib9S_-7f9Wt_Ga-OZjHryLEI",
    authDomain: "luxury-watches-9ff5b.firebaseapp.com",
    projectId: "luxury-watches-9ff5b",
    storageBucket: "luxury-watches-9ff5b.appspot.com",
    messagingSenderId: "419511497130",
    appId: "1:419511497130:web:aa3c671cd2d53a0de43bd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);