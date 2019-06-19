import React from "react";
import "./ArticleListItem.module.css";

import ArticleImage from "./ArticleImage";
const ArticleListItem = ({ title, date, year, author, shortText, image }) => {
  return (
    <li>
      <article>
        <ArticleImage url={image._url} title={title} />
        <header>
          <h1>{title}</h1>
        </header>
        <p>{shortText}</p>

        <footer>
          <address>Author: {author}</address>
          <time Date={year}>{date}</time>
        </footer>
      </article>
    </li>
  );
};

export default ArticleListItem;
