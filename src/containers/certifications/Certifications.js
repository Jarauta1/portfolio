import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function Certifications(props) {
  const theme = props.theme;
  const lenguage = props.lenguage;

  let title

  if (lenguage.name === "spanish") {
    title = "Certificaciones"
  } else if (lenguage.name === "english") {
    title = "Certifications"
  }

  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header" style={{ color: theme.text }}>
            {title}
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {lenguage.certifications.certifications.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} lenguage={lenguage} />;
        })}
      </div>
    </div>
  );
}

export default Certifications;
