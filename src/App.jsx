import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projets from "./components/projets/Projets";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Particle from "./components/particleBack/Particle";

const App = () => {
  return (
    <div>
      <Particle />
      {/* <Motion/>  */}
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Projets />
      <Footer />
    </div>
  );
};

export default App;
