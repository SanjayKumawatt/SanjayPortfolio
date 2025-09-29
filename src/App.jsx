import React from "react";
import ThemeProvider from "./Components/Context/ThemeContext"
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Email from "./Components/Email";
import Footer from "./Components/UI/Footer";

function App() {

  return (
    <ThemeProvider >
      <Home />
      <Skills/>
      <Projects/>
      <Email/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;