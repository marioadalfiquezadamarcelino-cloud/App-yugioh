import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";

// Obtener cartas
export const getCards = async () => {
  const snapshot = await getDocs(collection(db, "cards"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Añadir carta
export const addCard = async (card) => {
  await addDoc(collection(db, "cards"), card);
};