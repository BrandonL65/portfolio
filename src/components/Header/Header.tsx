import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles["header-links"]}>About Me</h2>
      <h2 className={styles["header-links"]}>Projects</h2>
      <h2 className={styles["header-links"]}>Resume</h2>
      <h2 className={styles["header-links"]}>Contact</h2>
    </div>
  );
};

export default Header;
