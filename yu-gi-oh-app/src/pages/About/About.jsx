import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">

      <h2>About Yu-Gi-Oh</h2>

      <p>
        Yu-Gi-Oh is a web application created with React that allows users
        to explore and manage a collection of Yu-Gi-Oh style cards.
      </p>

      <p>
        The application demonstrates modern web development concepts
        such as component-based architecture, routing, state management
        with React Hooks, and database interaction using Firebase Firestore.
      </p>

      <p>
        Users can search cards, add new ones, update existing cards
        and delete them. The project also includes an RSS news section
        that displays the latest updates from the Yu-Gi-Oh community.
      </p>

      <p>
        This project was developed as part of a React learning project
        focused on building a full CRUD application with external APIs.
      </p>

    </div>
  );
};

export default About;