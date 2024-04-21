/* eslint-disable jsx-a11y/img-redundant-alt */
//rafc
import heroImage from "../../assets/hero/heroImage.png";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>Hi, I`m Irina</h1>
          <p className={styles.description}>
            I am a full-stack developer, who loves to write code using React and
            NodeJS. Reach out, if you like to know more!
          </p>
        </div>
        <a className={styles.contactBtn} href="#contact">
          Contact me
        </a>
        <img src={heroImage} alt="hero image" className={styles.heroImg} />
      </div>
    </section>
  );
};
