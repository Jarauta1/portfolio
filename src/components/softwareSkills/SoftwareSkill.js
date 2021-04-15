import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  console.log(props)
  const skills = props.logos;
  console.log(skills)
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li className="software-skill-inline" name={logo.skillName}>
                  <img
                    className="logo_img"
                    data-icon={logo.fontAwesomeClassname}
                    data-inline="false"
                    src={require(`../../assests/images/${logo.logo_path}`)}
                    alt=""
                  />
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
