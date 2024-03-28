import React from "react";
import styles from "./About.module.css";
import about from "../../assets/about/aboutImage.png";

export const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.about_title}>About</h1>
      <img src={about} alt="girl sitting with laptop" />
      <ul className={styles.about_list}>
        <li className={styles.about_item}>
          <a href="/" className={styles.about_link}>
            Frontend Developer
          </a>
          <p className={styles.about_text}>
            I`m a front-end developer with experience in building responsive and
            optimized sites
          </p>
        </li>
        <li className={styles.about_item}>
          <a href="/" className={styles.about_link}>
            Backend Developer
          </a>
          <p className={styles.about_text}>
            I have experience developing fast and optimised back-end systems and
            APIs
          </p>
        </li>
        <li className={styles.about_item}>
          <a href="/" className={styles.about_link}>
            UI Designer
          </a>
          <p className={styles.about_text}>
            I have designed multiple landing pages and have created design
            systems as well
          </p>
        </li>
      </ul>
    </div>
  );
};
