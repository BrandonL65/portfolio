import React from "react";
import styles from "./AboutMe.module.css";
import pic from "../../pictures/me.jpg";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles["inner-container"]} data-aos="fade-up">
        <h1 className={styles["about-me"]}>About me</h1>
        <div className={styles["img-bio-container"]}>
          <img src={pic} className={styles["profile-img"]}></img>
          <p className={styles["bio"]}>
            Hello, I'm a software Engineer with experience building
            enterprise-scale applications using TypeScript, React
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
