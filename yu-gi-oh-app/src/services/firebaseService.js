import { collection, addDoc, deleteDoc, updateDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../data/firebase";

export const getCards = async () => {
  const snapshot = await getDocs(collection(db, "cards"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addCard = async (card) => {
  await addDoc(collection(db, "cards"), card);
};

export const deleteCard = async (id) => {
  await deleteDoc(doc(db, "cards", id));
};

export const updateCard = async (id, data) => {
  await updateDoc(doc(db, "cards", id), data);
};