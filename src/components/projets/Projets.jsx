import React from "react";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import "./projets.css";
import jmi from "../../assets/mobile.gif";
import leafup from "../../assets/LeafUp11.gif";
import jmiweb from "../../assets/jmiweb.gif";
import leafupWeb from "../../assets/leafupweb.gif";
import AldiBnb from "../../assets/AldiBnb.gif";
import AldiBnbWeb from "../../assets/AldiBnbWeb.gif";
import chargeinWeb from "../../assets/chargeinweb.gif";
import chargeinMobile from "../../assets/chargeinmobile.gif";
import salineWeb from "../../assets/SalineWeb.gif";
import SalineMobile from "../../assets/SalineMobile.gif";
import RapportSaline from "../../assets/SOUMARE_Mouhamadou_SPE2_P2023.pdf";
import { FaCode, FaPhp,FaHandPaper,FaSymfony,FaWordpress, FaReact, FaGlobe,FaDocker } from "react-icons/fa";
import {SiTypescript,SiRedux} from "react-icons/si";
import {BsFillFileEarmarkPdfFill} from "react-icons/bs";

// import { RxLink2 } from "react-icons/rx";

const Projets = () => {
  const [width, setWidth] = useState(0);
  const carrousel = useRef();

  useEffect(() => {
    console.log(carrousel);
    setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
  }, []);
  return (
    <section id="projets">
      <div className="titre-projets-section">
        <h5>Slide à droite </h5>
        <h2><FaHandPaper/></h2>
      </div>
      
      <div className="curtain curtain-left">
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element">
          <h5 className="title-service">P</h5>
          <h5>R</h5>
          <h5>O</h5>
          <h5>J</h5>
          <h5>E</h5>
          <h5>T</h5>
          <h5>S</h5>
        </div>
        <div className="curtain-element"></div>
      </div>
      
      <motion.div
        ref={carrousel}
        whileTap={{ cursor: "grabbing" }}
        className="carrousel"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carrousel"
        >
          <motion.div className="item">
            <div className="flex projects">
              <div className="flex card-visuel">
                <img
                  src={SalineMobile}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgmobile"
                  alt="img mobile projet Saline Royale"
                />
                <img
                  src={salineWeb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgweb"
                  alt=" web projet Saline Royale"
                />
              </div>

              <div className="card-text">
                <div className="icons flex">
                  <div>
                    <FaReact />
                  </div>
                  <div>
                    <FaSymfony />
                  </div>
                  <div>
                    <FaDocker />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight titre-projet">
                      Saline Academy, du modèle média au modèle pédagogique
                    </h5>
                    <p className="mb-3 font-normal text-projet">
                    Modernisation du site de la Saline Royale Academy en une plateforme de formation interactive avec gamification pour un meilleur engagement des apprenants.
                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="icons-lien flex">
                    <a
                      className="lien-projet"
                      href="https://github.com/Mouhamadou-Soumare/Projet-Final-WEB3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCode />
                    </a>
                    <a
                      className="lien-projet"
                      href={RapportSaline}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFillFileEarmarkPdfFill />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="item">
            <div className="flex projects">
              <div className="flex card-visuel">
                <img
                  src={chargeinMobile}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgmobile"
                  alt="img mobile projet charge-in"
                />
                <img
                  src={chargeinWeb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgweb"
                  alt=" web projet charge-in"
                />
              </div>

              <div className="card-text">
                <div className="icons flex">
                  <div>
                    <FaReact />
                  </div>
                  <div>
                    <SiRedux />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight titre-projet">
                      Charge-in, le  comparateur d'offres pour vos projets énergétiques
                    </h5>
                    <p className="mb-3 font-normal text-projet">
                      Back-office Charge-In, comprenant un tableau de bord administrateur, un récapitulatif des statistiques...
                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="icons-lien flex">
                    <a
                      className="lien-projet"
                      href="https://github.com/Mouhamadou-Soumare/charge-in-test"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCode />
                    </a>
                    <a
                      className="lien-projet"
                      href="https://charge-in-test.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGlobe />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="item">
            <div className="flex projects">
              <div className="flex card-visuel">
                <img
                  src={AldiBnb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgmobile"
                  alt=" mobile AldiBnb"
                />
                <img
                  src={AldiBnbWeb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgweb"
                  alt=" web AldiBnb"
                />
              </div>

              <div className="card-text">
                <div className="icons flex">
                  <div>
                    <FaWordpress />
                  </div>
                  <div>
                    <FaPhp />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight titre-projet">
                      AldiBnb, louez votre logement !
                    </h5>
                    <p className="mb-3 font-normal text-projet">
                    Site d'annonces de location de biens immobiliers réalisé en groupe. Il y'a 3 types d'utilisateurs, l'administrateur, le loueur et le propriétaire.
                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="icons-lien flex">
                    <a
                      className="lien-projet"
                      href="https://github.com/Mouhamadou-Soumare/AldiBnB"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCode />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="item">
            <div className="flex projects">
              <div className="flex card-visuel">
                <img
                  src={leafup}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgmobile"
                  alt=" mobile LeafUp"
                />
                <img
                  src={leafupWeb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgweb"
                  alt=" web LeafUp"
                />
              </div>

              <div className="card-text">
                <div className="icons flex">
                  <div>
                    <FaReact />
                  </div>
                  <div>
                    <SiTypescript />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight titre-projet">
                      Leaf'Up, la serre connectée
                    </h5>
                    <p className="mb-3 font-normal text-projet">
                    Projet d'équipe où l'on a eu pour idée la création d'un potager intelligent. 
                    On a joint à celle-ci un site faisant la domotique avec la serre et regroupant la communauté de la main verte.
                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="icons-lien flex">
                    <a
                      className="lien-projet"
                      href="https://github.com/Mouhamadou-Soumare/LeafUp-App-Front"
                      target="_blank"
                      rel="noreferrer"
                    >
                     <FaCode />
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="item">
            <div className="flex projects">
              <div className="flex card-visuel">
                <img
                  src={jmi}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgmobile"
                  alt=" mobile jmi"
                />
                <img
                  src={jmiweb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgweb"
                  alt=" web JMI"
                />
              </div>

              <div className="card-text">
                <div className="icons flex">
                  <div>
                    <FaSymfony />
                  </div>
                  <div>
                    <FaPhp  />
                  </div>
                </div>

                <div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight titre-projet">
                      JMI Industries, un site de location de voiture
                    </h5>
                    <p className="mb-3 font-normal text-projet">
                    Site réalisé sous Symfony et en binôme.
                  L'utilisateur peut louer un véhicule, consulter son historique et gérer son compte.
                        Les loueurs gèrent leurs stocks et la disponibilité des véhicules.
                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="icons-lien flex">
                    <a
                      className="lien-projet"
                      href="https://github.com/Mouhamadou-Soumare/JMI-Industries-Soumare-Gamo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaCode />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="item">
            <div className="flex projects">
            <div className="flex card-visuel">
                <img
                  src={leafup}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgmobile"
                  alt=""
                />
              </div>

              <div className="card-text">
        

                <div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                  </div>
                </div>
                <div className="footer-card">
                 
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      <div className="curtain curtain-right">
        <div className="curtain-element"></div>
        <div className="curtain-element"> 
        </div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
        <div className="curtain-element"></div>
      </div>
    </section>
  );
};

export default Projets;
