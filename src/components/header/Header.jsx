import React, { useEffect, useState } from "react";
import "./header.css";
import { FiClock } from "react-icons/fi";
import CTA from "./CTA";
import ME from "../../assets/photo.png";
import HeaderSocials from "./HeaderSocials";

const REDIRECT_URL = "https://www.leportfoliodemouha.fr/";

const Header = () => {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      window.location.href = REDIRECT_URL;
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <header>
      <div className="redirect-banner">
        <div className="redirect-content">
          <FiClock className="redirect-icon" />
          <p>
            <span className="redirect-intro">
              Vous avez atterri ici, mais pour suivre mon véritable parcours en date,
            </span>
            <br />
            <span className="redirect-cta">
              Redirection vers mon nouveau portfolio dans{" "}
              <span className="redirect-timer">{countdown} secondes</span> — 
              <a href={REDIRECT_URL} className="redirect-link"> cliquez ici</a>.
            </span>
          </p>
        </div>
      </div>

      <div className="container header__container">
        <h5>Bonjour, moi c'est</h5>
        <h1>SOUMARE Mouhamadou</h1>
        <h5 className="text-light">Développeur Full Stack</h5>

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
