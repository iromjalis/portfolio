import React from "react";
import styles from "./ToTop.module.css";

export default function ToTop() {
  const ToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.topBtn} onClick={() => ToTop()} width="40px">
      &#x2191;
    </div>
  );
}
