import React from "react";
import CV from "../../assets/CV_Alternance_Soumare_WEB.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank" rel="noreferrer">
        Télécharger mon CV
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
