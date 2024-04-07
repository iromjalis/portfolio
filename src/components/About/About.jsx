import React from "react";
import styles from "./About.module.css";
import about from "../../assets/about/aboutImage.png";
import curcor from "../../assets/about/cursorIcon.png";
import server from "../../assets/about/serverIcon.png";
import ui from "../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.about_title}>About</h2>
      <div className={styles.content}>
        <img
          src={about}
          alt="girl sitting with laptop"
          className={styles.about_img}
        />

        <ul className={styles.about_list}>
          <li className={styles.about_item}>
            <img src={curcor} alt="cursor icon" />

            <div className={styles.about_text}>
              <h3 className={styles.about_itemtitle}> Frontend Developer</h3>
              <p className={styles.about_paragraph}>
                I`m a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>

          <li className={styles.about_item}>
            <img src={server} alt="server icon" />

            <div className={styles.about_text}>
              <h3>Backend Developer</h3>

              <p className={styles.about_paragraph}>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>

          <li className={styles.about_item}>
            <img src={ui} alt="ui icon" />

            <div className={styles.about_text}>
              <h3>UI Designer</h3>
              <p className={styles.about_paragraph}>
                I have designed multiple landing pages and have created design
                systems as well
              </p>{" "}
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
