
import { initializeApp } from "firebase/app";


import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAe2VWhN3H0bIrW4dIP4e9RD8Ktf4KYHZ8",
  authDomain: "yugioh-app-b3b35.firebaseapp.com",
  projectId: "yugioh-app-b3b35",
  storageBucket: "yugioh-app-b3b35.firebasestorage.app",
  messagingSenderId: "235510014409",
  appId: "1:235510014409:web:1ac7e5c234d0fd9ba98818",
  measurementId: "G-YZS71K76Y0"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);