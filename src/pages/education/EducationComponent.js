import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

function Education(props) {
  const theme = props.theme;
  const lenguage = props.lenguage;

  let title
  let subtitle
  let description
  
  if (lenguage.name === "spanish") {
    title = "Educación"
    subtitle = "Titulaciones y certificados"
    description = "Aunque he participado como voluntario en muchas formaciones, aquí están mis titulaciones y mis mayores certificados."
  } else if (lenguage.name === "english") {
    title = "Education"
    subtitle = "Qualifications and certificates"
    description = "Although I have participated as a volunteer in many trainings, here are my qualifications and my highest certificates."
  }


  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} lenguage={props.lenguage} setLenguage={props.setLenguage}/>
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                {title}
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                {subtitle}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {description}
              </p>
            </div>
          </div>
        </Fade>
        <Educations theme={props.theme} lenguage={props.lenguage} />
        <Certifications theme={props.theme} lenguage={props.lenguage} />
      </div>
      <Footer theme={props.theme} lenguage={props.lenguage} />
    </div>
  );
}

export default Education;
