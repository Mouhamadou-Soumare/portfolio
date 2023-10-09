import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projets from "./components/projets/Projets";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Particle from "./components/particleBack/Particle";
import {Helmet} from "react-helmet"


const App = () => {
  return (
   <div>
      <Helmet>
          <meta name="google-site-verification" content="RPJ10h6OebH_2mTxlSTfpRXtuJIYMkzIyHBvxSJ4afY" />
      </Helmet>
      <Particle />
      {/* <Motion/>  */}
      <Header />
      <Nav />
      <About />
      <Projets />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
