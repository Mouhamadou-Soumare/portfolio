import React from "react";
import CV from "../../assets/CV_Soumare _Developpeur _Web.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank" rel="noreferrer">
      Téléchargez mon CV
      </a>
      <a
        href="mailto:mouhamadou-soumare@hotmail.com "
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer"
      >
        Contactez-moi
      </a>
    </div>
  );
};

export default CTA;
