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

import { FaCode, FaPhp,FaHandPaper,FaSymfony,FaWordpress, FaReact } from "react-icons/fa";
import {SiTypescript} from "react-icons/si";

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
                  src={AldiBnb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgmobile"
                  alt=""
                />
                <img
                  src={AldiBnbWeb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgweb"
                  alt=""
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
                    Site d'annonces de location de biens immobilierrs réaliser en groupe.
                     Il y'a 3 types d'utilisateurs, l'administrateur, le loueur et le propriétaire.
                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="icons-lien flex">
                    <a
                      class="lien-projet"
                      href="https://github.com/choeurtis18/AldiBnB"
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
                <img
                  src={leafupWeb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgweb"
                  alt=""
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
                    On a joint à celle-ci un site faisant domotique avec la serre et regroupant la
                    communauté de la main verte.
                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="icons-lien flex">
                    <a
                      class="lien-projet"
                      href="https://github.com/choeurtis18/LeafUp-App-Front"
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
                  alt=""
                />
                <img
                  src={jmiweb}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgweb"
                  alt=""
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
                      Site réaliser sous symfony et en binome.
                       L'utilisateur peut louer un véhicule, consulter son historique et gérer son compte.
                       Les loueurs gérent leurs stocks et la disponibilité des véhicules.

                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="icons-lien flex">
                    <a
                      class="lien-projet"
                      href="https://github.com/Mouhamadou-Soumare/JMI-Industries-Soumare-Gamo"
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
