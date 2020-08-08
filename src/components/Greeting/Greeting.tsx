import React from "react";
import styles from "./Greeting.module.css";

const Greeting = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["greeting-text"]}>
        Hi there, I'm <span className={styles["emphasis"]}>Brandon,</span>
      </h1>
      <h2 className={styles["lower-text"]}>
        a <span className={styles["emphasis"]}>Software Engineer.</span>
      </h2>
    </div>
  );
};

export default Greeting;
