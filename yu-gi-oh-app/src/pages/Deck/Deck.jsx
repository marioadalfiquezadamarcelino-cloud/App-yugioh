import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import cardsData from "../../data/cards.json";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../data/firebase";
import "./Deck.css";

const Deck = () => {

  // cartas desde Firebase
  const [cards, setCards] = useState([]);

  // cartas en el deck
  const [deck, setDeck] = useState([]);

  // buscador
  const [searchTerm, setSearchTerm] = useState("");

  // unir JSON + Firebase
  const allCards = [...cardsData, ...cards];

  // filtrar cartas
  const filteredCards = allCards.filter(card =>
    card.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // leer cartas desde Firestore
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

  // máximo 3 copias
  const addToDeck = (card) => {
    const sameCards = deck.filter(c => c.id === card.id);
    if (sameCards.length >= 3) return;

    setDeck([...deck, card]);
  };

  // contar copias
  const getCardCount = (id) =>
    deck.filter(card => card.id === id).length;

  // eliminar carta
  const removeFromDeck = (id) => {
    const index = deck.findIndex(card => card.id === id);
    if (index === -1) return;

    const newDeck = [...deck];
    newDeck.splice(index, 1);
    setDeck(newDeck);
  };

  return (
    <div className="deck-page">

      <h2>Build Your Deck</h2>

      {/* buscador */}
      <input
        type="text"
        placeholder="Search cards..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h3>Available Cards</h3>

      <div className="cards-container">
        {filteredCards.map(card => (
          <Card
            key={card.id}
            {...card}
            onAdd={() => addToDeck(card)}
          />
        ))}
      </div>

      <h3>Your Deck ({deck.length})</h3>

      <div className="cards-container">
        {deck.map((card, index) => (
          <Card
            key={`${card.id}-${index}`}
            {...card}
            name={`${card.name} x${getCardCount(card.id)}`}
            onAdd={() => removeFromDeck(card.id)}
          />
        ))}
      </div>

    </div>
  );
};

export default Deck;