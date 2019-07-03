import React from "react";
import styles from "./ArticleListItem.module.css";

import ArticleImage from "./ArticleImage";

const ArticleListItem = ({ title, date, year, author, shortText, image }) => {
  return (
    <li className={styles.item}>
      <article>
        <ArticleImage url={image._url} title={title} />

        <header>
          <h1 className={styles.title}>{title}</h1>
        </header>

        <p className={styles.content}>{shortText}</p>

        <footer className={styles.footer}>
          <address>By: {author}</address>
          <time className={styles.time} dateTime={year}>
            {date}
          </time>
        </footer>
      </article>
    </li>
  );
};

export default ArticleListItem;