import React from 'react'
import './about.css'
import ME from '../../assets/test.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Apprendre à me connaitre </h5>
            <h2>A propos de moi !</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                     </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>+ de 3 ans dans l'informatique </small>
                        </article>

                        {/* <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide </small>
                        </article> */}

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>+ de 10 projets aboutis </small>
                        </article>
                    </div>
                    <p>Tombé dans une marmite d'octets étant tout petit et né à la période de l'explosion
                         de la bulle internet et de la high-tech, j'en fais aujourd'hui ma passion et mon métier.
                          Je m'appelle Mouhamadou et je suis développeur web, je me suis lancé dans le domaine tout de suite après mon Baccalauréat. Le DUT Informatique à Paris Descartes 
                          et le bachelor développeur web à Hetic sont deux formations qui m'ont permis d'acquérir les fondations et compétences 
                          individuelles et collectives nécessaires pour occuper ce rôle. Durant ces 4 dernières années,
                           je n'ai cessé de me plonger dans ce vaste univers, toujours avec curiosité et soif d'en apprendre plus.
                            Mes deux expériences professionnelles à Escapade Française et Alliantech m'ont quant à eux permis d'entrer 
                            et d'avoir une première approche du monde du travail, la capacité a endossé des responsabilités, de l'autonomie ...
                    </p>

                    <a href="#contact" className='btn btn-primary'>Parlons</a>
                </div>
            </div>

        </section>
    )
}

export default About