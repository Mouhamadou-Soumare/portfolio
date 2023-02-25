import React from "react"
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-section">
                        <div className="copyright">
                            <p>@Soumare Mouhamadou</p>
                        </div>
                        <div className="blank-div"></div>
                        <div className="footer-links">
                            <div className="icons-footer">
                                <FaGithub/>
                                <FaLinkedin/>
                                <GrMail />
                            </div>
                        </div>
                    </div>
        </div>
       
    )
}

export default Footer