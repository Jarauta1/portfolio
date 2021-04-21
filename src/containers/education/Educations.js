import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { Fade } from "react-reveal";

function Educations(props) {
  const theme = props.theme;
  const lenguage = props.lenguage;
  console.log(props,lenguage.name)

  let title

  if (lenguage.name === "spanish") {
    title ="Formación recibida"
  } else if (lenguage.name === "english") {
    title = "Formación en ingles"
  }

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            {title}
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {lenguage.degrees.degrees.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} lenguage={lenguage}/>;
        })}
      </div>
    </div>
  );
}

export default Educations;
