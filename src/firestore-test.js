// SIMPLE TEST - This will work
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc, getDocs } = require("firebase/firestore");

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD1bQC0UWAX390J84mPEoHF2Kb9c4pr0JA",
  authDomain: "vohas-62203.firebaseapp.com",
  projectId: "vohas-62203",
  storageBucket: "vohas-62203.firebasestorage.app",
  messagingSenderId: "953094015407",
  appId: "1:953094015407:web:7f492adcefd490d643075a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Test function
async function testFirestore() {
  try {
    console.log("🔍 Testing Firestore connection...");
    
    // Try to add a document
    const docRef = await addDoc(collection(db, "test"), {
      message: "Test from Node.js",
      timestamp: new Date(),
      status: "testing"
    });
    console.log("✅ SUCCESS! Document created with ID:", docRef.id);
    
    // Try to read it back
    const snapshot = await getDocs(collection(db, "test"));
    console.log("✅ Documents in collection:", snapshot.size);
    
    snapshot.forEach((doc) => {
      console.log("📄 Document:", doc.id, doc.data());
    });
    
    console.log("🎉 EVERYTHING WORKS! Firestore is connected.");
    
  } catch (error) {
    console.log("❌ ERROR:", error.message);
    console.log("💡 Make sure:");
    console.log("   1. Firestore database is created in Firebase console");
    console.log("   2. Your project ID is correct");
    console.log("   3. Firestore rules allow read/write");
  }
}

// Run the test
testFirestore();