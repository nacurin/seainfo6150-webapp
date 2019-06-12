import React from "react";
import "./ArticleList.module.css";

import ArticleListItem from "./ArticleListItem";

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {Object.values(articles).map(article => {
        return (
          <ArticleListItem
            key={article.title}
            title={article.title}
            date={article.pubDate}
            year={article.pubYear}
            author={article.author}
            shortText={article.shortText}
          />
        );
      })}
    </ul>
  );
};

export default ArticleList;
