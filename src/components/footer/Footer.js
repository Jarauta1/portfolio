import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  const lenguage = props.lenguage;

  let part1
  let part2

  if (lenguage.name === "spanish") {
    part1 = "Hecho con"
    part2 = "por"
  } else if (lenguage.name === "english") {
    part1 = "Made with"
    part2 = "by"
  }

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          {part1} <span role="img">❤️</span> {part2} {lenguage.greeting.title2}
        </p>
      </Fade>
    </div>
  );
}
