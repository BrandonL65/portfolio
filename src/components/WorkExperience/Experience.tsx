import React from "react";
import styles from "./Experience.module.css";

interface ExperienceProps {
  logo: string;
  companyName: string;
  workHighlights: string[];
  dateStart: string;
  dateEnd: string;
}

const Experience = (props: ExperienceProps) => {
  let workHighlightsListForm = props.workHighlights.map((highlight) => {
    return (
      <p className={styles["work-highlights-li"]} data-aos="fade-in">
        {highlight}
      </p>
    );
  });

  return (
    <div className={styles["container"]}>
      <div className={styles["company"]}>
        <h1 className={styles["company-name"]} data-aos="fade-right">
          {props.companyName}
        </h1>
        <img
          className={styles["company-image"]}
          src={props.logo}
          alt="mlb logo"
          data-aos="fade-right"
        ></img>
      </div>
      <div className={styles["work-details"]} data-aos="fade-in">
        <div className={styles["work-role-and-start-end-dates"]}>
          <h1 className={styles["work-role"]}>Software Engineer (SP) </h1>
          <h2 className={styles["work-dates"]}>
            {props.dateStart} - {props.dateEnd}
          </h2>
        </div>
        {workHighlightsListForm}
      </div>
    </div>
  );
};

export default Experience;
