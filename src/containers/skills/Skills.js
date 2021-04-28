import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const theme = props.theme;
  const lenguage = props.lenguage;

  let title

  if (lenguage.name === "spanish") {
    title = "Esto es lo que hago"
  } else if (lenguage.name === "english") {
    title = "Here's what I do"
  }

  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            {title}
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} lenguage={lenguage} />
    </div>
  );
}
