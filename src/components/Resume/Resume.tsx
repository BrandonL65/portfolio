import React from "react";
import WorkExperience from "../WorkExperience/WorkExperience";
import ResumeSummary from "../ResumeSummary/ResumeSummary";
import ResumeSkills from "../ResumeSkills/ResumeSkills";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <div className={styles["container"]}>
      <h1 className={styles["title"]} data-aos="fade-up">
        Resume
      </h1>
      <hr className={styles["hr"]}></hr>
      <div className={styles["resume-summary-and-skills"]}>
        <ResumeSummary />
        <ResumeSkills />
      </div>
      <WorkExperience />
    </div>
  );
};

export default Resume;
