// src/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD1bljDaOeyqM7Qd7nvJJai6TfsKVlXPFo",
  authDomain: "vohas-a9307.firebaseapp.com",
  projectId: "vohas-a9307",
  storageBucket: "vohas-a9307.firebasestorage.app",
  messagingSenderId: "399499547275",
  appId: "1:399499547275:web:9064d6a2647f43c035ba8e",
  measurementId: "G-Q9MXJYRRZF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((ok) => {
    if (ok) analytics = getAnalytics(app);
  });
}

export { app, db, analytics };
