import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import cardsData from "../../data/cards.json";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../../data/firebase";
import "./Deck.css";

const Deck = () => {

  // Hacer click en cartas

  const [selectedCard, setSelectedCard] = useState(null);

  // cartas desde Firebase
  const [cards, setCards] = useState([]);

  // cartas en el deck
  const [deck, setDeck] = useState([]);

  // buscador
  const [searchTerm, setSearchTerm] = useState("");

  // filtro
  const [filterType, setFilterType] = useState("All");

  // unir JSON + Firebase
  const allCards = [...cardsData, ...cards];

  // filtrar cartas
  const filteredCards = allCards.filter(card => {
    const matchesSearch = card.name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || card.type === filterType;
    return matchesSearch && matchesType;
  });

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

      <div className="filter-buttons">

        <button onClick={() => setFilterType("All")}> All</button>
         <button onClick={() => setFilterType("Spell Normal")}>Spell Normal</button>
         <button onClick={() => setFilterType("Spell Fied")}>Spell Fied</button>
         <button onClick={() => setFilterType("Spell Quick-Play")}>Spell Quick-Play</button>
         <button onClick={() => setFilterType("Fiend/Effect")}>Fiend/Effect</button>
         <button onClick={() => setFilterType("Warrior/Effect")}>Warrior/Effect</button>
         <button onClick={() => setFilterType("Dragon/Syncroll/Effect")}>Dragon/Syncroll/Effect</button>
         <button onClick={() => setFilterType("Warrior/XYZ/Effect")}>Warrior/XYZ/Effect</button>
         <button onClick={() => setFilterType("Dragon/Effect")}>Dragon/Effect</button>
         <button onClick={() => setFilterType("Dragon/Fusion/Effect")}>Dragon/Fusion/Effect</button>
         <button onClick={() => setFilterType("Bestia divina/Effect")}>Bestia divina/Effect</button>
         <button onClick={() => setFilterType("Trap Normal")}>Trap Normal</button>
         <button onClick={() => setFilterType("Trap Continuous")}>Trap continuoues</button>

      </div>


      <h3>Available Cards</h3>

      <div className="cards-container">
        {filteredCards.map(card => (
          <Card
            key={card.id}
            {...card}
            onAdd={() => addToDeck(card)}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </div>


      {selectedCard && (
        <div className="card-modal" onClick={() => setSelectedCard(null)}>
          <div className="card-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedCard.image} alt={selectedCard.name} />
            <h2>{selectedCard.name}</h2>
            <p>Type: {selectedCard.type}</p>
            <p>ATK: {selectedCard.attack}</p>
            <p>DEF: {selectedCard.defense}</p>
          </div>
        </div>
      )}

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