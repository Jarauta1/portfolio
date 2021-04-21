import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home(props) {
  console.log(props)
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} lenguage={props.lenguage} setLenguage={props.setLenguage}/>
      <Greeting theme={props.theme} lenguage={props.lenguage} />
      <Skills theme={props.theme} lenguage={props.lenguage} />
      <Footer theme={props.theme} lenguage={props.lenguage} />
    </div>
  );
}

export default Home;
