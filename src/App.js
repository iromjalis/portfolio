import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import history from "./data/history.json";
import skills from "./data/skills.json";
import projects from "./data/projects.json";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import ToTop from "./components/ToTop/ToTop.jsx";

function App() {
  return (
    <div className={styles.App_container} id="style-1">
      <Navbar />
      <Hero />
      <About />
      <Experience skills={skills} history={history} />
      <Projects projects={projects} />
      <Contact />
      <ToTop />
    </div>
  );
}

export default App;
