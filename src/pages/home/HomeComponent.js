import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
/* import Intro from "../../containers/intro/Intro"
import Particles from "../../containers/particles/Particles" */
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
     {/*  <Intro />
      <Particles /> */}
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
