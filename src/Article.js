import React from "react";

const Article = ({ article }) => (
  <article>
    <header><h1>{article.title}</h1></header>
    <address>Author: {article.author}</address>
    <time dateTime={article.pubYear}>Publish Date: {article.pubDate}</time>
    <p>{article.shortText}</p>
  </article>
);

export default Article;