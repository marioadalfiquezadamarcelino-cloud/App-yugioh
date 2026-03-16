import React from "react";
import "./News.css";

const News = () => {
  return (
    <div className="news">

      <h2>Yu-Gi-Oh App News</h2>

      <p className="news-description">
        This section provides updates about the Yu-Gi-OhYu-Gi-Oh card
        application. You can subscribe to our RSS feed to stay updated
        with the latest changes and features.
      </p>

      <div className="rss-links">
        <a href="/rss/news.xml" target="_blank">
          View RSS Feed
        </a>
      </div>

      <div className="news-container">

        <div className="news-card">
          <h3>New Cards Added</h3>
          <p>Several Yu-Gi-Oh cards have been added to the collection.</p>
          
           <a href="/rss/deck.xml"> New Cards Added</a> 
        
        </div>


        <div className="news-card">
          <h3>Deck Builder Feature</h3>
          <p>You can now create your own deck using the deck builder.</p>
       
        <a href="/rss/update.xml">Update</a>
          
        </div>

        <div className="news-card">
          <h3>Firebase Integration</h3>
          <p>The application now stores cards using Firebase Firestore.</p>
        
           <a href="/rss/cards.xml"> New Cards Added</a>

        
        </div>
        <div className="news-card">
          <h3>Firebase Integration</h3>
          <p>The application now stores cards using Firebase Firestore.</p>
        
           <a href="/rss/community.xml"> community</a>

        </div>

        

      </div>

    </div>
  );
};

export default News;