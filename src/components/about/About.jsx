import React from "react";
import "./about.css";
import ME from "../../assets/test.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Apprendre à me connaître </h5>
      <h2>À propos de moi !</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expérience</h5>
              <small>+ de 4 ans dans l'informatique </small>
            </article>

            {/* <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide </small>
                        </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projets</h5>
              <small>+ de 10 projets aboutis </small>
            </article>
          </div>
          <p>
            Tombé dans une marmite d'octets étant tout petit, je suis
            aujourd'hui un passionné de l'informatique. Je m'appelle Mouhamadou,
            né durant l'explosion de la bulle internet et de la high-tech, je me
            suis formé dans le domaine informatique à Paris Descartes et à
            Hetic. Avec 4 années d'expérience, en me plongeant sans cesse dans
            ce vaste univers avec curiosité et soif d'apprendre, j'ai acquis les
            compétences nécessaires pour réussir dans ce domaine. Mes
            expériences professionnelles chez Escapade Française et Alliantech
            m'ont permis d'acquérir une première approche du monde du travail,
            ainsi que la capacité à endosser des responsabilités, travailler en
            équipe et à travailler de manière autonome...
          </p>

          {/* <a href="#contact" className='btn btn-primary'>Parlons</a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
