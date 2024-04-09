import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ projects }) => {
  return (
    <div className={styles.container}>
      {projects.map((project, id) => (
        <div key={id} className={styles.card}>
          <img
            src={project.imageSrc}
            alt={project.title}
            className={styles.project_image}
            width="100%"
          />
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.desc}>{project.description}</p>
          <ul className={styles.skills}>
            {project.skills.map((skill, id) => (
              <li key={id} className={styles.skill_item}>
                {skill}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            <a
              href={project.demo}
              title={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Demo
            </a>
            <a
              href={project.source}
              title={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Source
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
