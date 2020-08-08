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
            Hi there! I'm a developer with experience building enterprise-scale
            applications using TypeScript, React, GraphQL, NodeJS, and much more
            across the stack. <hr className={styles["horizontal-rule"]}></hr>I'm
            super passionate about developing applications that are visually
            appealing both as an end-product and in the code itself.
            <hr className={styles["horizontal-rule"]}></hr>There's an untapped
            demographic that finds modern tech increasingly intimidating to
            approach/use, and I aim to bridge that gap by developing intuitive,
            easy to understand apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
