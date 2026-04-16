import React, { useEffect, useState } from "react";
import { getCards, addCard,deleteCard, updateCard } from "../../services/firebaseService";
import * as XLSX from "xlsx";
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
    const loadCards = async () => {
      const data = await getCards();
      setCards(data);
    };

    loadCards();
  }, []);

  const handleAddCard = async () => {
  try {
    await addCard(newCard);
    setNewCard({
      name: "",
      type: "",
      attack: "",
      defense: "",
      image: ""
    });
  } catch (error) {
    console.error("Error adding card:", error);
  }
};

  const handleDeleteCard = async (id) => {
  await deleteCard(id);
  const data = await getCards();
  setCards(data);
};

const handleUpdateCard = async (id) => {
  await updateCard(id, { name: "Updated Card" });
  const data = await getCards();
  setCards(data);
};

  const filteredCards = cards.filter(card =>
    card.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cardExists = (name) => {
  return cards.some(card =>
    card.name?.toLowerCase() === name?.toLowerCase()
  );
};

  // zona de exportación y importe
const importJSON = async (event) => {

  const file = event.target.files[0];
  const text = await file.text();
  const data = JSON.parse(text);

  for (const card of data) {

    if (!cardExists(card.name)) {
      await addCard(card);
    }

  }
  const updatedCards = await getCards();
  setCards(updatedCards);

  alert("Cards imported successfully!");
};
  const exportJSON = async () => {
  const cards = await getCards();

  const blob = new Blob([JSON.stringify(cards, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "datos.json";
  a.click();
};

  // CVS
const importCSV = async (event) => {

  const file = event.target.files[0];
  const text = await file.text();

  const rows = text.split("\n").slice(1);

for (const row of rows) {

  const [name, type, attack, defense, image] = row.split(",");

  if (!name) continue;

  if (!cardExists(name)) {
    await addCard({
      name,
      type,
      attack: Number(attack),
      defense: Number(defense),
      image
    });
  }
}

  const updatedCards = await getCards();
  setCards(updatedCards);

  alert("Cards imported successfully!");
};

  const exportCSV = async () => {
    const cards = await getCards();

    const csv = [
      ["name", "type", "attack", "defense", "image"],
      ...cards.map(c => [c.name, c.type, c.attack, c.defense, c.image])
    ]
      .map(row => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "datos.csv";
    a.click();
  };

  //XML
 const importXML = async (event) => {

  const file = event.target.files[0];
  const text = await file.text();

  const xml = new DOMParser().parseFromString(text, "text/xml");
  const xmlCards = xml.querySelectorAll("card");

 for (const card of xmlCards) {

  const name = card.querySelector("name")?.textContent;

  if (!cardExists(name)) {

    await addCard({
      name,
      type: card.querySelector("type")?.textContent,
      attack: Number(card.querySelector("attack")?.textContent),
      defense: Number(card.querySelector("defense")?.textContent),
      image: card.querySelector("image")?.textContent
    });

  }
}

  const updatedCards = await getCards();
  setCards(updatedCards);

  alert("Cards imported successfully!");
};
  const exportXML = async () => {
    const cards = await getCards();

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<cards>\n`;

    cards.forEach(card => {
      xml += `
  <card>
    <name>${card.name}</name>
    <type>${card.type}</type>
    <attack>${card.attack}</attack>
    <defense>${card.defense}</defense>
    <image>${card.image}</image>
  </card>`;
    });

    xml += "\n</cards>";

    const blob = new Blob([xml], { type: "application/xml" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "datos.xml";
    a.click();
  };


  const exportXLSX = async () => {
  const cards = await getCards();

  const worksheet = XLSX.utils.json_to_sheet(cards);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Cards");

  XLSX.writeFile(workbook, "datos.xlsx");
};

const importXLSX = async (event) => {
  const file = event.target.files[0];
  const data = await file.arrayBuffer();

  const workbook = XLSX.read(data);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  for (const card of jsonData) {

    if (!cardExists(card.name)) {
      await addCard({
        name: card.name,
        type: card.type,
        attack: Number(card.attack),
        defense: Number(card.defense),
        image: card.image
      });
    }

  }

  const updatedCards = await getCards();
  setCards(updatedCards);

  alert("Excel imported successfully!");
};

  return (

    <div className="home">


      <h2>Card Collection</h2>


      <div className="import-export-container">

        <h3>Import Data</h3>

        <label className="import-btn">Import JSON<input type="file" accept=".json" onChange={importJSON} /></label>

        <label className="import-btn">Import CSV <input type="file" accept=".csv" onChange={importCSV} /></label>

        <label className="import-btn">Import XML<input type="file" accept=".xml" onChange={importXML} /></label>
  
      <label className="import-btn">  Import XLSX<input type="file" accept=".xlsx" onChange={importXLSX} /></label>

        <h3>Export Data</h3>

        <button className="export-btn" onClick={exportJSON}>Export JSON</button>

        <button className="export-btn" onClick={exportCSV}> Export CSV</button>

       <button className="export-btn" onClick={exportXML}>Export XML</button>

        <button className="export-btn" onClick={exportXLSX}>Export XLSX</button>
      </div>


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

        <button onClick={handleAddCard}>Add Card</button>
      </div>

      {/* CARDS */}
      <div className="cards-container">
        {filteredCards.map(card => (
          <div key={card.id}>
            <Card {...card} />
            <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
            <button onClick={() => handleUpdateCard(card.id)}>Update</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;