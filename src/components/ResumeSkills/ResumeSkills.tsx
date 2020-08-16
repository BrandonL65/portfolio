import React from "react";
import styles from "./ResumeSkills.module.css";

const ResumeSkills = () => {
  let skillsList = skills.map((skill) => {
    return <p className={styles["skill"]}>- {skill}</p>;
  });

  return (
    <div className={styles["container"]} data-aos="fade-up">
      <h2 className={styles["resume-skills-heading"]}>Skills</h2>
      {skillsList}
    </div>
  );
};

export default ResumeSkills;

let skills = [
  "JavaScript, TypeScript, and Python",
  "React with Redux/MobX",
  "GraphQL with SQL backend and REST APIs",
  "Data Visualization with D3, ChartJS",
  "NodeJS with Express and custom Controllers & Routes",
];
