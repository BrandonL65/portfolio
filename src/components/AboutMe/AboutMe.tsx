import React from "react";
import styles from "./AboutMe.module.css";
import pic from "../../pictures/me.jpg";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles["about-me"]} data-aos="fade-left">
        About me
      </h1>
      <hr className={styles["hr"]} data-aos="fade-right"></hr>
      <div className={styles["img-bio-container"]}>
        <img
          data-aos="fade-right"
          src={pic}
          className={styles["profile-img"]}
          alt="profile pic"
        ></img>
        {/* <p className={styles["bio"]} data-aos="fade-left">
          Hi there! I'm a developer with experience building enterprise-scale
          applications using TypeScript, React, GraphQL, NodeJS, and much more
          across the stack. <hr className={styles["horizontal-rule"]}></hr>
          <p>
            I'm super passionate about developing applications that are visually
            appealing both as an end-product and in the code itself.
          </p>
          <hr className={styles["horizontal-rule"]}></hr>There's an untapped
          demographic that finds modern tech increasingly intimidating to
          approach/use, and I aim to bridge that gap by developing intuitive,
          easy to understand apps.
        </p> */}
        <div className={styles["bio-div"]}>
          <p
            className={styles["bio"]}
            data-aos="fade-left"
            data-aos-offset="-40"
          >
            Hi there! I'm a developer with experience building enterprise-scale
            applications using TypeScript, React, GraphQL, NodeJS, and much more
            across the stack.
          </p>
          <hr
            className={styles["horizontal-rule"]}
            data-aos="fade-left"
            data-aos-offset="-40"
          ></hr>
          <p className={styles["bio"]} data-aos="fade-left">
            I'm super passionate about developing applications that are visually
            appealing, that combine data with intuitive to use interfaces.
          </p>
          <hr
            className={styles["horizontal-rule"]}
            data-aos="fade-left"
            data-aos-offset="-40"
          ></hr>
          <p className={styles["bio"]} data-aos="fade-left">
            {/* There's an untapped demographic that finds modern tech increasingly
            intimidating to approach/use, and I aim to bridge that gap by
            developing intuitive, easy to understand apps. */}
            I believe combining these will garner more interactivity and usage,
            leading to a more satisfying user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
