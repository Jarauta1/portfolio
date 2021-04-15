import React from "react";
import "./FeelingProud.css";
import Intro from "../intro/Intro"
import Particles from "../particles/Particles"

function FeelingProud(props) {
  const theme = props.theme;
  return (<>
    <Intro />
    <Particles />
  </>);
}

export default FeelingProud;
