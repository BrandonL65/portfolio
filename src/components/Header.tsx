import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h2>About Me</h2>
      <h2>Work Experience</h2>
      <h2>Projects</h2>
      <h2>Resume</h2>
    </div>
  );
};

export default Header;
