import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard/ProjectCard.jsx";

export const Projects = ({ projects }) => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.projects_title}>Projects</h2>
      <div className={styles.projects}>
        <ProjectCard projects={projects} />
      </div>
    </section>
  );
};
