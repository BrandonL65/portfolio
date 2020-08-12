import React from "react";
import WorkExperience from "../WorkExperience/WorkExperience";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]}>Resume</h1>
      <hr className={styles["hr"]}></hr>
      <WorkExperience />
    </div>
  );
};

export default Resume;
