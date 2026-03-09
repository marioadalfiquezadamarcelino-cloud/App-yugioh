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

This project was developed as a prototype using **React JS,
JavaScript, HTML, and CSS**. The application allows you to:

- Display cards from a JSON file
- View detailed information using a modal window
- Build a deck with a maximum of 3 copies per card
- Navigate between multiple pages, sharing the header and footer

The main objective is to apply best practices for reusable components, clean code, and user experience (UX/UI).

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
 Features

 Search cards by name

 View a collection of cards

 Add new cards to the database

 Update existing cards

 Delete cards

 Build your own deck (max 3 copies per card)

 RSS News page with Yu-Gi-Oh updates

 Built using React components
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

## RSS News Page

The project includes a News page that connects to an RSS feed related to Yu-Gi-Oh news.

This fulfills the RSS requirement of the assignment.


## Important

To run the project correctly, you must navigate into the project folder:

cd yu-gi-oh-app

Then install dependencies:

npm install

Then start the development server:

npm run dev

## Project Structure

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
│ └─Privacy/
│ └─News/
│ └─Chat/
| 
├─ data/
│ └─ cards.json
│ └─ firabase.js
├─ App.jsx
└─ main.jsx