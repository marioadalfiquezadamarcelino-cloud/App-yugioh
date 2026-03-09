import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../data/firebase";
import Card from "../../components/Card/Card";

import "./Home.css";



const Home = () => {

  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newCard, setNewCard] = useState({
    name: "",
    type: "",
    attack: "",
    defense: "",
    image: ""
  });


  useEffect(() => {
    const q = query(collection(db, "cards"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setCards(
        snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      );
    });

    return unsubscribe;
  }, []);


  const addCard = async () => {
    console.log("Adding card:", newCard);

    try {
      await addDoc(collection(db, "cards"), newCard);
      console.log("Card added successfully");
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };

  const deleteCard = async (id) => {
    await deleteDoc(doc(db, "cards", id));
  };


  const updateCard = async (id) => {
    await updateDoc(doc(db, "cards", id), {
      name: "Updated Card"
    });
  };


  const filteredCards = cards.filter(card =>
    card.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="home">


      <h2>Card Collection</h2>

      <input
        type="text"
        placeholder="Search card..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <p className="home-description">
        Welcome to the Yu-Gi-Oh Card Collection App. Here you can explore different cards,
        search by name or type, and manage your own collection by adding,
        updating or deleting cards in real time. This page demonstrates a complete
        CRUD system connected to Firebase Firestore.
      </p>

      <img
        src="/images/logo.png"
        alt="Logo"
        className="home-logo"
      />


      {/* FORM */}
      <div className="add-card-form">
        <input
          placeholder="Name"
          value={newCard.name}
          onChange={(e) =>
            setNewCard({ ...newCard, name: e.target.value })
          }
        />

        <input
          placeholder="Type"
          value={newCard.type}
          onChange={(e) =>
            setNewCard({ ...newCard, type: e.target.value })
          }
        />

        <input
          placeholder="Attack"
          value={newCard.attack}
          onChange={(e) =>
            setNewCard({ ...newCard, attack: e.target.value })
          }
        />

        <input
          placeholder="Defense"
          value={newCard.defense}
          onChange={(e) =>
            setNewCard({ ...newCard, defense: e.target.value })
          }
        />

        <input
          placeholder="Image URL"
          value={newCard.image}
          onChange={(e) =>
            setNewCard({ ...newCard, image: e.target.value })
          }
        />


        <button onClick={addCard}>Add Card</button>
      </div>

      {/* CARDS */}
      <div className="cards-container">
        {filteredCards.map(card => (
          <div key={card.id}>
            <Card {...card} />
            <button onClick={() => deleteCard(card.id)}>Delete</button>
            <button onClick={() => updateCard(card.id)}>Update</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;