import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";

export default function Contact(props) {
  const lenguage = props.lenguage
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{lenguage.contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">{lenguage.contactInfo.subtitle}</p>

          <div className="contact-text-div">
            <a className="contact-detail" href={"tel:" + lenguage.contactInfo.number}>
              {lenguage.contactInfo.number}
            </a>
            <br />
            <br />
            <a
              className="contact-detail-email"
              href={"mailto:" + lenguage.contactInfo.email_address}
            >
              {lenguage.contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia lenguage={lenguage}/>
          </div>
        </div>
        <div className="contact-image-div">
          <img
            alt=""
            src={require("../../assests/images/contactMail.png")}
          ></img>
        </div>
      </div>
    </div>
  );
}
