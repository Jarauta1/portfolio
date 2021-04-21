import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { style } from "glamor";
import spa from "../../assests/images/spanish.png"
import eng from "../../assests/images/english.png"

function Header(props) {
  const theme = props.theme;
  const lenguage = props.lenguage;
  console.log(props)

  let section1
  let section2
  let section3
  let section4
  let section5

  if (lenguage.name === "spanish") {
    section1 = "Inicio"
    section2 = "Educación y Certificaciones"
    section3 = "Experiencia"
    section4 = "Proyectos"
    section5= "Contacto y CV"
  } else if (lenguage.name === "english") {
    section1 = "Home"
    section2 = "Education and Certifications"
    section3 = "Experience"
    section4 = "Projects"
    section5= "Contact and Resume"
  }


  const styles = style({
    cursor: "pointer",
    height: "45px",
    width: "45px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    borderRadius: "50%",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: props.theme.name === "light" ? "#7CD1F7" : "#292C3F",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `0 3px 8px ${
        props.theme.name === "light" ? "#F7D774" : "#646464"
      }`,
    },
  });

  const styles2 = style({
    cursor: "pointer",
    height: "35px",
    width: "35px",
    marginRight: "5px",
    marginLeft: "15px",
    paddingTop: "5px",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
    backgroundColor: props.theme.name === "light" ? "#FFFFFF" : "#1d1d1d",
  });

  const link = lenguage.settings.isSplash ? "/splash" : "home";

  const [currTheme, setCurrTheme] = useState(props.theme);
  /* const [currLenguage, setCurrLenguage] = useState(props.lenguage); */

  function changeTheme() {
    if (currTheme === "dark") {
      props.setTheme("light");
      localStorage.setItem("theme", "light");
      setCurrTheme("light");
    } else {
      props.setTheme("dark");
      localStorage.setItem("theme", "dark");
      setCurrTheme("dark");
    }
  }

  function changeLenguageSpa() {
      props.setLenguage("spanish");
      localStorage.setItem("lenguage", "spanish");
    /*   setCurrLenguage("spanish"); */
  }

  function changeLenguageEng() {
      props.setLenguage("english");
      localStorage.setItem("lenguage", "english");
    /*   setCurrLenguage("english"); */
  }

  const icon =
    props.theme.name === "dark" ? (
      <HiMoon
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    ) : (
      <CgSun
        strokeWidth={1}
        size={20}
        color={props.theme.name === "light" ? "#F9D784" : "#A7A7A7"}
      />
    );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {lenguage.greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="homei"
                to="/inicio"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {section1}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/educacion"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {section2}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/experiencia"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {section3}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects"
                to="/proyectos"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {section4}
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr"
                to="/contacto"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                {section5}
              </NavLink>
            </li>
            <button {...styles} onClick={changeTheme}>
              {icon}
            </button>
           
            <img
                    {...styles2}
                    onClick={changeLenguageSpa}
                    src={spa}
                    alt="spanish"
                  />
            
           
            <img
                    {...styles2}
                    onClick={changeLenguageEng}
                    src={eng}
                    alt="english"
                  />
           
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
