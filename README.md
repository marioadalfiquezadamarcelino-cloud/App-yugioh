# Yu-Gi-Oh! React App 🃏

A React-based web application that showcases a collection of Yu-Gi-Oh! cards.  
Users can explore cards, view detailed information in a modal, and build their own deck with real Yu-Gi-Oh! rules (maximum 3 copies per card).

---

## Table of Contents
- [About the Project](#about-the-project)
- [Home Page](#home-page)
- [Built With](#built-with)
- [Third-Party Components](#third-party-components)
- [Tutorials and Resources](#tutorials-and-resources)
- [Design Inspiration](#design-inspiration)
- [Project Structure](#project-structure)
- [Responsive Design](#responsive-design)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

---

##  About the Project

This project was developed as a React JS prototype using **JavaScript, HTML, and CSS**.  
The application simulates a Yu-Gi-Oh! card collection where users can:

- Browse cards from a JSON data source
- View full card details using a modal component
- Build a deck following official Yu-Gi-Oh! rules (up to 3 copies per card)
- Navigate between multiple pages with shared components

The project focuses on **clean code**, **component reusability**, **UX/UI**, and **responsive design**.

---

##  Home Page

The Home page displays a responsive grid of Yu-Gi-Oh! cards generated from a JSON array.  
Each card shows basic information and can be clicked to open a modal with full details, including:

- Card image
- Name
- Type
- Effect
- ATK / DEF values

The Home page is accessible from:
- `/`
- `/home`

---

## Built With

- **React JS**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**
- **Flexbox & Media Queries**

---
##  Third-Party Components

This project uses the following third-party tools and libraries:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

*(No heavy external libraries were used to keep the project lightweight.)*

---

##  Tutorials and Resources

The following resources were used during development:

- React Official Documentation:  
  https://reactjs.org/docs/getting-started.html
- Vite Documentation:  
  https://vitejs.dev/guide/
- README Template Inspiration:  
  https://github.com/othneildrew/Best-README-Template
- Clean Code Principles:  
  https://www.hostgator.mx/blog/clean-code-codigo-limpio/

---

##  Design Inspiration

The design and layout were inspired by modern card-based UI patterns and web design examples.

- Figma Web Design Inspiration:  
  https://www.figma.com/templates/web-design-inspiration/
- UX/UI Concepts:  
  https://woko.agency/blog/monitorizar-evaluar-experiencia-usuario/

---

##  Project Structure

- src/
├─ components/
│ ├─ Card/
│ ├─ CardModal/
│ ├─ Header/
│ └─ Footer/
├─ pages/
│ ├─ Home/
│ ├─ Deck/
│ └─ About/
├─ data/
│ └─ cards.json
├─ App.jsx
└─ main.jsx
