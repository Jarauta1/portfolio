import React from "react";
import "./Greeting.css";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
/* import { style } from "glamor"; */

export default function Greeting(props) {
  const theme = props.theme;

 /*  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  }); */

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
