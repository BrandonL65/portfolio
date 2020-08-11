import React from "react";
import styles from "./WorkExperience.module.css";
import Experience from "./Experience";
import mlbLogo from "../../pictures/logo-dark.png";

const WorkExperience = () => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]} data-aos="fade-up">
          Work Experience
        </h1>
        <hr className={styles["hr"]} data-aos="fade-up"></hr>
        <div data-aos="fade-up">
          <Experience
            logo={mlbLogo}
            companyName="MLB Advanced Media L.P."
            workHighlights={mlbWorkExperience}
            dateStart="Jan 2020"
            dateEnd="July 2020"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;

let mlbWorkExperience = [
  "Utilized TypeScript & React to build/maintain a large application centered on real-time field player tracking & inserting play events for each game and its plays.",
  "Worked with the Machine Learning team to build a user driven video-recommendations feedback application utilizing GraphQL on Hasura to capture user responses for feedback.",
  "Leveraged internal APIs to build a graphical data visualization application for Pitcher data spanning every game for the past 10+ years as part of the BDATA team.",
  "Collaborated with other Engineers, Product, and Project Manager in an agile environment consisting of 2-week sprints and weekly meetings with stakeholders.",
];
