import React from "react";
import styles from "./App.module.css";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <div className={styles["App"]}>
      <HeaderContainer />
      <div className={styles["title"]}>
        <h1 className={styles["name"]}>Hello I'm Brandon!</h1>
      </div>
    </div>
  );
}

export default App;
