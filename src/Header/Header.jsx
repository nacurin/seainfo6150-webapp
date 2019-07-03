import React from "react";
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <h1>The INFO6150 News</h1>
    <time className={styles.time} dateTime="Wed, June 26, 2019">
      Wed, June 26, 2019
    </time>
  </header>
);

export default Header;