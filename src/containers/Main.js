import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
/* import { lenguages } from "../portfolio.js"; */

export default function Main(propss) {
  
  const lenguage = propss.lenguage
  if (lenguage.settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Splash
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/inicio"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/experiencia"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/educacion"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}

                />
              )}
            />
            <Route
              path="/contacto"
              render={(props) => (
                <Contact
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/splash"
              render={(props) => (
                <Splash
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/proyectos"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/inicio"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/experiencia"
              exact
              render={(props) => (
                <Experience
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/educacion"
              render={(props) => (
                <Education
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/contacto"
              render={(props) => (
                <Contact
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
            <Route
              path="/proyectos"
              render={(props) => (
                <Projects
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                  lenguage={propss.lenguage}
                  setLenguage={propss.setLenguage}
                />
              )}
            />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}
