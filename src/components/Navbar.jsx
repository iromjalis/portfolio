import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={getImageUrl("nav/menuIcon.png")}
          alt="menu button"
        />
        <ul className={styles.menu_list}>
          <li>
            <a
              href="#about"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menu_item}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menu_item}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menu_item}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menu_item}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
