import React from "react";
import styles from "./Experience.module.css";

export const Experience = ({ skills, history }) => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.skills_title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map(({ title, img }, id) => (
            <div className={styles.skill} key={id}>
              <div key={id} className={styles.skillContainer}>
                <img
                  src={img}
                  alt={title}
                  width="64"
                  className={styles.skillItem}
                />
              </div>
            </div>
          ))}
        </div>
        <ul className={styles.history_list}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.history_item}>
              <div className={styles.history_item_details}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => {
                    return (
                      <li key={id} className={styles.experience_item_details}>
                        {experience}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
