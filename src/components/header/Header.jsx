import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/photo.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, moi c'est </h5>
        <h1>SOUMARE Mouhamadou</h1>
        <h5 className="text-light">Chef de projet - Développeur Full Stack</h5>
        <div className="iconsheader">
          <CTA />
        </div>
        <div className="iconsheader">
          <HeaderSocials />
        </div>

        <div className="me">
          <img src={ME} alt="Moi" />
        </div>

        <p className="scroll__down">La suite en bas</p>
      </div>
    </header>
  );
};

export default Header;
