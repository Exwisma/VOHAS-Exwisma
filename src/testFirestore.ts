import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

async function testFirestore() {
  try {
    const ref = await addDoc(collection(db, "testCollection"), {
      message: "Hello from Node!",
      time: new Date(),
    });
    console.log("✅ Added document with ID:", ref.id);

    const snapshot = await getDocs(collection(db, "testCollection"));
    snapshot.forEach((doc) => {
      console.log("📄 Document:", doc.id, doc.data());
    });
  } catch (err) {
    console.error("❌ Firestore error:", err);
  } finally {
    process.exit(0); // 👈 This cleanly stops the Node process
  }
}

testFirestore();
