import React, { useState } from "react";
import Card from "../../components/Card/Card";
import cardsData from "../../data/cards.json";
import "./Deck.css";

const Deck = () => {

  // ESTADO (AQUÍ VA)
  const [deck, setDeck] = useState([]);

  //  Máximo 3 copias por carta
  const addToDeck = (card) => {
    const sameCards = deck.filter(c => c.id === card.id);
    if (sameCards.length >= 3) return;
    setDeck([...deck, card]);
  };

  //  Contar copias de una carta
  const getCardCount = (id) =>
    deck.filter(card => card.id === id).length;

  //  Eliminar una copia
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

      <div className="deck-container">
        <h3>Available Cards</h3>
        <div className="cards-container">
          {cardsData.map(card => (
            <Card
              key={card.id}
              name={card.name}
              type={card.type}
              effect={card.effect}
              attack={card.attack}
              defense={card.defense}
              image={card.image}
              onAdd={() => addToDeck(card)}
            />
          ))}
        </div>

        <h3>Your Deck ({deck.length})</h3>
        <div className="cards-container">
          {deck.map((card, index) => (
            <Card
              key={`${card.id}-${index}`}
              name={`${card.name} x${getCardCount(card.id)}`}
              type={card.type}
              effect={card.effect}
              attack={card.attack}
              defense={card.defense}
              image={card.image}
              onAdd={() => removeFromDeck(card.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deck;
