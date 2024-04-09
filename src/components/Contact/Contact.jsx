import React from "react";
import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";

export const Contact = () => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.footer}>
        <h2 className={styles.contact_title}>Contact</h2>
        <p className={styles.contact_par}>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="email icon" width="64" />
          <a href="mailto:romjalis.irina@gmail.com">romjalis.irina@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="github icon" width="64" />
          <a
            href="https://github.com/iromjalis"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/iromjalis
          </a>
        </li>
        <li className={styles.link}>
          <img src={linkedinIcon} alt="linkedin icon" width="64" />
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGPKk2qFQN3TgAAAY7EfU2Q1-id069n2gZNX_sCa_zYnKEkWHPi8sXFvGMjFfHKEtm2pktUlTg62B4RhvzjIpF6ZknEI_KPON7EJb-oeEg-X6axu5EP4k6onmTHBztSkXAXVsw=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Firomjalis%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/iromjalis
          </a>
        </li>
      </ul>
    </footer>
  );
};
