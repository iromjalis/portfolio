import React, { useState } from "react";
import styles from "./Navbar.module.css";
import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title} title="Go to the main page">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menu_list} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a
              href="#about"
              rel="noopener noreferrer"
              className={styles.menu_item}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              rel="noopener noreferrer"
              className={styles.menu_item}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              rel="noopener noreferrer"
              className={styles.menu_item}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
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
