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
          Tombé dans le monde fascinant des octets dès ma petite enfance, je suis aujourd'hui un passionné inébranlable de l'informatique. Je me nomme Mouhamadou, ayant vu le jour au cours de l'explosion de la bulle Internet et de la révolution high-tech.

Mon parcours de formation s'est déployé entre les bancs de Paris Descartes et d'Hetic, et actuellement, l'aventure se poursuit avec détermination à l'EEMI, où je me consacre à mon mastère application & cybersecurity pour atteindre les sommets.
<br />
Fort de quatre années d'expérience, mon immersion constante dans cet univers infini, animée par la curiosité et une soif inextinguible d'apprendre, m'a permis d'acquérir les compétences essentielles pour exceller dans le domaine de l'informatique. Mes périples professionnels chez Escapade Française et Alliantech ont constitué autant de passerelles vers le monde du travail, me dotant ainsi d'une première expérience pratique. Ces expériences m'ont également conféré la capacité à assumer des responsabilités, à collaborer efficacement en équipe, et à travailler de manière autonome.
          </p>

          {/* <a href="#contact" className='btn btn-primary'>Parlons</a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
