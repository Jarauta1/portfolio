import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
/* import BlogsImg from "./BlogsImg"; */
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { style } from "glamor";


function Contact(props) {
  const theme = props.theme;
  const lenguage = props.lenguage;
  
  const ContactData = lenguage.contactPageData.contactSection;
/*   const blogSection = lenguage.contactPageData.blogSection; */

  let text
 

  if (lenguage.name === "spanish") {
    text = "Visita mi CV"
  } else if (lenguage.name === "english") {
    text = "Visit my CV"
  }
  
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} lenguage={lenguage} setLenguage={props.setLenguage} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia lenguage={lenguage} setLenguage={props.setLenguage}/>
              <br />
              <br />
              <a {...styles} className="general-btn" href={lenguage.greeting.resumeLink}>
                {text}
              </a>
            </div>
          </div>
        </Fade>
 
      </div>
      <Footer theme={props.theme} lenguage={props.lenguage} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;
