# Yu-Gi-Oh! React App 🃏

Yu-Gi-Oh is a React web application that allows users to explore and manage a collection of Yu-Gi-Oh style cards. The project demonstrates modern frontend development using React components, routing, state management and integration with Firebase Firestore.

Users can search cards, build their own deck, and manage cards using a CRUD system.

---

## Contents
- Project Description
- Homepage
- Technologies Used
- Third-Party Components
- Resources and Tutorials
- Design Inspiration
- Project Structure
- Responsive Design
- Installation and Use

---

## Project Description

Yu-Gi-Oh Card Collection App is a web application developed with React that allows users to explore, search, and manage cards from the Yu-Gi-Oh universe.

The application provides an interactive experience where users can:

- View cards from a JSON file and Firebase
- Search and filter cards by name and type
- Build their own custom deck
- Manage cards using CRUD operations (Create, Read, Update, Delete)
- Read news through a custom RSS system
- Save favorite news articles

---

## Home Page

The Home page is the main entry point of the application.

It dynamically loads card data from Firebase Firestore, which is structured as a JSON-based collection of objects. Each card contains properties such as name, attack, defense, category, image, and description.

Features included:

- Dynamic data fetching from Firebase
- JSON object array rendering
- Category filtering system
- Search functionality by card name
- State management using React useState
- Reusable Card component receiving props
- Responsive grid layout

This page demonstrates:
- useState for search and filtering
- useEffect for Firestore data fetching
- Props communication between components

The Home page displays a collection of cards retrieved from Firebase.

Features:

- Dynamic search by name
- Data fetching from Firebase Firestore
- State management using useState
- Real-time updates with onSnapshot
- Form to add new cards
- Delete cards
- Update cards
---

## Deck Page

Allows users to create and manage their own deck.

Features:

Display cards from JSON and Firebase

- Add cards to the deck (maximum 3 copies)
- Remove cards from the deck
- Search functionality
- Filter by type (Monster, Spell, Trap)
- Click on a card to view it in a modal (zoom view)

---
## News Page (RSS)

This page uses custom RSS feeds created for the application.

Features:

- Multiple RSS feeds (news, cards, updates, community)
- XML parsing using DOMParser
- Favorites system (stored in localStorage)
- Links to RSS feeds
---
## Technologies Used

- React
- React Router
- Firebase Firestore
- JavaScript (ES6)
- CSS
- JSON data
- RSS API

---

## Third-Party Components

- React: https://reactjs.org/
- React Router DOM: https://reactrouter.com/
- Vite: https://vitejs.dev/

---
 ## Features

 - Search cards by name
 - View a collection of cards
 - Add new cards to the database
 - Update existing cards
 - Delete cards
 - Build your own deck (max 3 copies per card)
 - RSS News page with Yu-Gi-Oh updates
 - Built using React components
---

## Resources and Tutorials

- Official React Documentation

https://reactjs.org/docs/getting-started.html
- Vite Documentation

https://vitejs.dev/guide/
- README Template

https://github.com/othneildrew/Best-README-Template
- Clean Code Principles

https://www.hostgator.mx/blog/clean-code-codigo-limpio/

---

## Design Inspiration

- Figma Templates and Examples

https://www.figma.com/templates/web-design-inspiration/
- UX/UI Concepts

https://woko.agency/blog/monitorizar-evaluar-experiencia-usuario/

---
## GitHub Branches

The project includes the following branches:

- master
- develop
- PrimeraEntrega
- SegundaEntrega
- main

---
## RSS News Page

The News page consumes an external RSS feed to display the latest Yu-Gi-Oh related updates.

## Firebase

The project uses Firebase Firestore to store and manage cards.
New cards added in the Home page are saved in the database and can be used in the Deck builder.

## Important

- To run the project correctly, you must navigate into the project folder:
- cd yu-gi-oh-app
- Then install dependencies:
- npm install
- Then start the development server:
- npm run dev

## Project Structure
yu-gi-oh-app/
|
├─public/
|    └─rss/
|        ├─ news.xml
|        ├─ cards.xml
|        ├─ update.xml
|        └─ community.xml      
src/
├─ components/
│ ├─ Card/
│ ├─ CardModal/
│ ├─ Header/
│ └─ Footer/
├─ pages/
│ ├─ Home/
│ ├─ Deck/
│ ├─ About/
│ ├─Privacy/
│ ├─News/
│ └─Chat/
| 
├─ data/
│  ├─cards.json
│  └─ firabase.js
├─ App.jsx
└─ main.jsx