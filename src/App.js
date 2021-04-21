import React, { useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { lenguages } from "./portfolio";

import { GlobalStyles } from "./global";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [lenguage, setLenguage] = useState(localStorage.getItem("lenguage") || "spanish");

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
            <Main theme={themes[theme]} setTheme={setTheme} lenguage={lenguages[lenguage]} setLenguage={setLenguage}/>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
