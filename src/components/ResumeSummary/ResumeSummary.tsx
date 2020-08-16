import React from "react";
import styles from "./ResumeSummary.module.css";

const ResumeSummary = () => {
  return (
    <div className={styles.container} data-aos="fade-up">
      <h2 className={styles["resume-summary-heading"]}>Summary</h2>
      <p className={styles["resume-text"]}>
        I am a Software Engineer with experience maintaining Enterprise-level
        data-driven applications written in Typescript and React. Worked on
        multiple teams to maintain, as well as develop new applications released
        both externally and internally that utilized large amounts of data to
        generate front end interfaces and data visualizations!
      </p>
    </div>
  );
};

export default ResumeSummary;
