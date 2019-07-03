import React from "react";
import styles from "./ArticleImage.module.css";

const ArticleImage = ({ url, title }) => {
  return (
    <figure className={styles.figure}>
      <img className={styles.image} src={url} alt={title} />
    </figure>
  );
};

export default ArticleImage;