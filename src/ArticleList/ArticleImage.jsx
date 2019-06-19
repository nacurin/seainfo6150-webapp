import React from "react";
import "./ArticleImage.module.css";

const ArticleImage = ({ url, title }) => {
  return (
    <figure>
      <img src={url} alt={title} />
    </figure>
  );
};

export default ArticleImage;