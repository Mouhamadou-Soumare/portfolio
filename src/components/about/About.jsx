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
                            <h5>Projets</h5>
                            <small>+ de 10 projets aboutis </small>
                        </article>
                    </div>
                    <p>Tombé dans une marmite d'octets étant tout petit,
                         je suis aujourdh'ui un passioné de l'informatique.
                          Je m'appelle Mouhamadou, un développeur web. 
                           Né durant l'explosion de la bulle internet et de la high-tech,
                            je me suis formé dans le domaine à Paris Descartes et à Hetic. 
                            Avec 4 années d'expérience, j'ai acquis les compétences et les connaissances 
                            nécessaires pour exceller dans ce domaine, en me plongeant sans cesse dans ce vaste 
                            univers avec curiosité et soif d'apprendre. Mes expériences professionnelles chez Escapade
                             Française et Alliantech m'ont permis d'acquérir une première approche du monde du travail, 
                             ainsi que la capacité à endosser des responsabilités, travailler en équipe et à travailler de manière autonome...
                    </p>

                    <a href="#contact" className='btn btn-primary'>Parlons</a>
                </div>
            </div>

        </section>
    )
}

export default About