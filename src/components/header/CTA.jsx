import React from "react"
import CV from '../../assets/cv.pdf'

const CTA= ()=> {

    return (
        <div className="cta">
            <a href={CV} className="btn">Télécharger mon CV</a>
            <a href="mailto:mouhamadou-soumare@hotmail.com " className="btn btn-primary">Contactez moi</a>
        </div>
    )
}

export default CTA