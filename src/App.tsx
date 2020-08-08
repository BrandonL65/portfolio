import React, { useEffect } from "react";
import styles from "./App.module.css";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import GreetingContainer from "./containers/GreetingContainer/GreetingContainer";
import AboutMeContainer from "./containers/AboutMeContainer/AboutMeContainer";
import WorkExperienceContainer from "./containers/WorkExperienceContainer/WorkExperienceContainer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles["App"]}>
      <HeaderContainer />
      <GreetingContainer />
      <AboutMeContainer />
      <WorkExperienceContainer />
    </div>
  );
}

export default App;
