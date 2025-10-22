// Import the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1bQC0UWAX390J84mPEoHF2Kb9c4pr0JA",
  authDomain: "vohas-62203.firebaseapp.com",
  projectId: "vohas-62203",
  storageBucket: "vohas-62203.firebasestorage.app",
  messagingSenderId: "953094015407",
  appId: "1:953094015407:web:7f492adcefd490d643075a",
  measurementId: "G-XVK61QDF3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
