import React, { useState } from "react";
import "./News.css";

const News = () => {

  //  estado dentro del componente
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  //  función dentro del componente
  const addFavorite = (article) => {

    const exists = favorites.find(fav => fav.title === article.title);
    if (exists) return;

    const newFavs = [...favorites, article];

    setFavorites(newFavs);
    localStorage.setItem("favorites", JSON.stringify(newFavs));
  };

  return (
    <div className="news">

      <h2>Yu-Gi-Oh App News</h2>

      <p className="news-description">
        This section provides updates about the Yu-Gi-Oh card
        application. You can subscribe to our RSS feed to stay updated
        with the latest changes and features.
      </p>

      <div className="rss-links">
        <a href="/rss/news.xml" target="_blank">
          View RSS Feed
        </a>
      </div>

      {/* FAVORITOS */}
      {favorites.length > 0 && (
        <div className="rss-section">
          <h2>⭐ Favorites</h2>

          {favorites.map((fav, index) => (
            <div key={index} className="news-card">
              <h3>{fav.title}</h3>
              <p>{fav.description}</p>
            </div>
          ))}
        </div>
      )}

      <div className="news-container">

        {/* CARD 1 */}
        <div className="news-card">
          <h3>New Cards Added</h3>
          <p>Several Yu-Gi-Oh cards have been added to the collection.</p>

          <button onClick={() => addFavorite({
            title: "New Cards Added",
            description: "Several Yu-Gi-Oh cards have been added to the collection."
          })}>
            ⭐ Save
          </button>

          <a href="/rss/deck.xml">New Cards</a>
        </div>

        {/* CARD 2 */}
        <div className="news-card">
          <h3>Deck Builder Feature</h3>
          <p>You can now create your own deck using the deck builder.</p>

          <button onClick={() => addFavorite({
            title: "Deck Builder Feature",
            description: "You can now create your own deck using the deck builder."
          })}>
            ⭐ Save
          </button>

          <a href="/rss/update.xml">Update</a>
        </div>

        {/* CARD 3 */}
        <div className="news-card">
          <h3>Firebase Integration</h3>
          <p>The application now stores cards using Firebase Firestore.</p>

          <button onClick={() => addFavorite({
            title: "Firebase Integration",
            description: "The application now stores cards using Firebase Firestore."
          })}>
            ⭐ Save
          </button>

          <a href="/rss/cards.xml">Cards</a>
        </div>

        {/* CARD 4 */}
        <div className="news-card">
          <h3>Community Updates</h3>
          <p>New updates from the Yu-Gi-Oh community.</p>

          <button onClick={() => addFavorite({
            title: "Community Updates",
            description: "New updates from the Yu-Gi-Oh community."
          })}>
            ⭐ Save
          </button>

          <a href="/rss/community.xml">Community</a>
        </div>

      </div>

    </div>
  );
};

export default News;