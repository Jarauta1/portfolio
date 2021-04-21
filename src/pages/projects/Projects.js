import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { style } from "glamor";

function Projects(props) {
  const theme = props.theme;
  const lenguage = props.lenguage;

  let text

  if (lenguage.name === "spanish") {
    text = "Más proyectos (Github)"
  } else if (lenguage.name === "english") {
    text = "More projects (GitHub"
  }

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} lenguage={lenguage} setLenguage={props.setLenguage}/>
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} lenguage={lenguage}/>
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {lenguage.projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {lenguage.projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {lenguage.projects.data.map((repo) => {
          return <ProjectCard repo={repo} theme={theme} lenguage={lenguage} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn"
        href="https://github.com/Jarauta1"
      >
        {text}
      </a>
      <br />
      <br />
      <Footer theme={props.theme} lenguage={props.lenguage} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
