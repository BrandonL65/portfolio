import React, { useEffect } from "react";
import styles from "./App.module.css";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import GreetingContainer from "./containers/GreetingContainer/GreetingContainer";
import AboutMeContainer from "./containers/AboutMeContainer/AboutMeContainer";
import ResumeContainer from "./containers/ResumeContainer/ResumeContainer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 100 });
  }, []);

  return (
    <div className={styles["App"]}>
      <HeaderContainer />
      <GreetingContainer />
      <AboutMeContainer />
      <ResumeContainer />
    </div>
  );
}

export default App;
