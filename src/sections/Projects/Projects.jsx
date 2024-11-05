import * as styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import proshop from '../../assets/proshop1.png';
import github from '../../assets/github.png';
import propertyLogo from '../../assets/yubra.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={propertyLogo}
          link="https://github.com/IqbalAhmadi/Property-Pulse"
          h3="YUBRA™"
          p="Property Search App"
        />
        <ProjectCard
          src={proshop}
          link="https://github.com/IqbalAhmadi/proshop-v2.0"
          h3="ProShop v2.0"
          p="E-commerce App"
        />
        <ProjectCard
          src={github}
          link="https://iqbalahmadi.github.io/github-profiles/"
          h3="Github Profiles"
          p="Github Profile Finder"
        />
        <ProjectCard
          src={viberr}
          link="https://iqbalahmadi.github.io/movie-app/"
          h3="Movie App"
          p="Movie App"
        />
      </div>
    </section>
  );
}

export default Projects;
