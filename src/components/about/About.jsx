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
          Plongé dans l'océan mystique des octets dès ma plus tendre enfance, je suis aujourd'hui un enthousiaste inébranlable, naviguant passionnément à travers les méandres de l'informatique. Mon nom est Mouhamadou, né au cœur de l'ère de l'éclosion d'Internet et de la révolution high-tech. Mon voyage éducatif m'a guidé des salles de classe de Paris Descartes à celles d'Hetic, et aujourd'hui, ma quête continue de manière résolue à l'EEMI, où je me dévoue à mon mastère en application & cybersécurité, cherchant à toucher les étoiles.
<br/>
Fort de quatre années d'expérience, mon immersion constante dans ce monde infini, alimentée par une curiosité insatiable et une soif inextinguible de connaissance, m'a façonné en un professionnel doté des compétences essentielles pour briller dans le royaume de l'informatique. Mes aventures professionnelles chez Escapade Française et Alliantech ont été autant de portes d'entrée vers l'univers du travail, m'offrant une première expérience pratique. Ces périples m'ont également conféré la capacité d'endosser des responsabilités, de collaborer harmonieusement au sein d'une équipe, et de travailler de manière autonome. Mon histoire ne fait que commencer, et je suis prêt à écrire les chapitres à venir avec passion et détermination.
          </p>

          {/* <a href="#contact" className='btn btn-primary'>Parlons</a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
