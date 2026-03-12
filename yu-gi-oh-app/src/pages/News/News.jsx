import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://ygorganization.com/feed/"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.items) {
          setArticles(data.items);
        }
      })
      .catch((error) => {
        console.error("RSS error:", error);
      });
  }, []);

  return (
    <div className="news">

      <h2>Yu-Gi-Oh News</h2>

      <p className="news-description">
        Latest updates from the Yu-Gi-Oh community.
        This page reads an RSS feed and displays recent articles.
      </p>

      <iframe 
      title="Yu-Gi-Oh RSS" 
      src="https://www.yugioh-card.com/en/feed/" 
      className="rss-frame">
         </iframe>

      <div className="news-container">
        {articles.length > 0 ? (
          articles.slice(0, 6).map((article, index) => (
            <div key={index} className="news-card">

              <h3>{article.title}</h3>

              <p>{new Date(article.pubDate).toLocaleDateString()}</p>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>

            </div>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>

    </div>
  );
};

export default News;