import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { db, auth, storage } from "./firebaseConfig";
console.log("Firebase connected:", db);


createRoot(document.getElementById("root")!).render(<App />);
