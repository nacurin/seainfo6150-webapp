import React from "react";
import styles from "./ArticleList.module.css";

import ArticleListItem from "./ArticleListItem";

const ArticleList = ({ articles }) => {
  return (
    <ul className={styles.list}>
      {Object.values(articles).map(article => {
        return (
          <ArticleListItem
            key={article.title}
            title={article.title}
            date={article.pubDate}
            year={article.pubYear}
            author={article.author}
            shortText={article.shortText}
            image={article.image}
          />
        );
      })}
    </ul>
  );
};

export default ArticleList;
