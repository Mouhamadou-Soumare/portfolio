import React, { useRef, useEffect, useState  } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
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
import mangiWeb from "../../assets/mangi_desktop.gif";
import mangiMobile from "../../assets/mangi_mobile.gif";
import sportSyncWeb from "../../assets/sportsyncweb.gif";
import sportSyncMobile from "../../assets/sportsyncmobile.gif";


import RapportSaline from "../../assets/SOUMARE_Mouhamadou_SPE2_P2023.pdf";
import { FaCode, FaPhp,FaHandPaper,FaSymfony,FaWordpress, FaReact, FaGlobe,FaDocker,FaPython, FaNodeJs} from "react-icons/fa";
import {SiTypescript,SiRedux} from "react-icons/si";
import {BsFillFileEarmarkPdfFill} from "react-icons/bs";
import { TbApi } from "react-icons/tb";


const Projets = () => {
  const carrousel = useRef();

  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const itemElements = document.querySelectorAll(".item");
    let maxItemHeight = 0;
    itemElements.forEach((item) => {
      const itemHeight = item.clientHeight;
      maxItemHeight = Math.max(maxItemHeight, itemHeight);
    });
    setMaxHeight(maxItemHeight);
  }, []);

  const projects = [
    {
      title: "SportSync - La meilleur app pour suivre vos sports préférés ",
      description: "Projet de création d'un site web utilisant une stack Node.js, React et une API pour les données. SportSync vous permet de rester toujours connecté(e) aux événements et actualités sportives.",
      icons: [<FaReact />, <FaNodeJs />,  <TbApi />],
      images: [sportSyncMobile , sportSyncWeb ],
      links: [
        {
          icon: <FaCode />,
          url: "https://github.com/Mouhamadou-Soumare/sportsync",
        },
        // {
        //   icon: <FaGlobe />,
        //   url: "https://mangi-client.vercel.app/",
        // },
      ],
    },
    {
      title: "Manĝi : Votre Réalité Augmentée Alimentaire",
      description: "Workshop, création d'un site pour une solution AR. Découvrez une nouvelle façon de connaître vos produits alimentaires avec Manĝi, notre solution révolutionnaire de réalité augmentée.      ",
      icons: [<FaReact />, <FaNodeJs />, <TbApi /> ],
      images: [mangiMobile, mangiWeb],
      links: [
        {
          icon: <FaCode />,
          url: "https://github.com/Mouhamadou-Soumare/mangi_ar_app",
        },
        {
          icon: <FaGlobe />,
          url: "https://mangi-client.vercel.app/",
        },
      ],
    },
    {
      title: "Saline Academy : passage au modèle pédagogique",
      description: "Transformation du site de la Saline Royale Academy en une plateforme de formation interactive avec gamification pour améliorer l'engagement des apprenants",
      icons: [<FaReact />, <FaSymfony />, <FaDocker />],
      images: [SalineMobile, salineWeb],
      links: [
        {
          icon: <FaCode />,
          url: "https://github.com/Mouhamadou-Soumare/Projet-Final-WEB3",
        },
        {
          icon: <BsFillFileEarmarkPdfFill />,
          url: RapportSaline,
        },
      ],
    },
    {
      title: "Charge-in : comparateur d'offres énergétiques",
      description: "Mise en place du back-office Charge-In, comprenant un tableau de bord administrateur, un récapitulatif des statistiques, et une page de configuration du profil",
      icons: [<FaReact />, <SiRedux />],
      images: [chargeinMobile, chargeinWeb],
      links: [
        {
          icon: <FaCode />,
          url: "https://github.com/Mouhamadou-Soumare/charge-in-test",
        },
        {
          icon: <FaGlobe />,
          url: "https://charge-in-test.vercel.app/",
        },
      ],
    },
    {
      title: "AldiBnb : location de logements",
      description: "Développement d'un site d'annonces de location de biens immobiliers en collaboration. Il comprend trois types d'utilisateurs : administrateur, loueur et propriétaire",
      icons: [<FaWordpress />, <FaPhp />],
      images: [AldiBnb, AldiBnbWeb],
      links: [
        {
          icon: <FaCode />,
          url: "https://github.com/Mouhamadou-Soumare/AldiBnB",
        },
      ],
    },
    {
      title: "Leaf'Up : serre connectée",
      description: "Conception d'un projet d'équipe axé sur la création d'un potager intelligent, complété par une interface de domotique pour la serre et une communauté d'amateurs de jardinage",
      icons: [<FaReact />, <SiTypescript />, <FaPython />],
      images: [leafup, leafupWeb],
      links: [
        {
          icon: <FaCode />,
          url: "https://github.com/Mouhamadou-Soumare/LeafUp-App-Front",
        },
      ],
    },
    {
      title: "JMI Industries : location de voitures",
      description: "Création d'un site sous Symfony. Les utilisateurs peuvent louer des véhicules, consulter leur historique et gérer leur compte. Les loueurs gèrent les stocks et la disponibilité des véhicules",
      icons: [<FaSymfony />, <FaPhp />],
      images: [jmi, jmiweb],
      links: [
        {
          icon: <FaCode />,
          url: "https://github.com/Mouhamadou-Soumare/JMI-Industries-Soumare-Gamo",
        },
      ],
    },
  ];

  const settings = {
    dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  centerMode: true,
  focusOnSelect: true,
  draggable: true,
  autoplay: false,          
  autoplaySpeed: 3000, 
  
  };

  



  return (
    <section id="projets">
      <div className="titre-projets-section">
      <h2><FaHandPaper/></h2>
        <h5>Maintenez le bouton gauche de la souris enfoncé et faites glisser le slider  </h5>
      
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
      
      <Slider ref={carrousel} {...settings} className="carrousel">

          {projects.map((project, index) => (
      <motion.div className={'item'} key={index} style={{ height: `${maxHeight}px` }}>
        <div className="flex projects" >
               <div className="flex card-visuel">
                <img
                  src={project.images[0]}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgmobile"
                  alt="img mobile "
                />
                <img
                  src={project.images[1]}
                  className="card-body-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg imgweb"
                  alt=" web projet "
                />
              </div>

              <div className="card-text">
                <div className="icons flex">
                {project.icons.map((icon, iconIndex) => (
                   <div key={iconIndex}>{icon}</div>
                  ))}
                </div>

                <div>
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight titre-projet">
                      {project.title}
                    </h5>
                    <p className="mb-3 font-normal text-projet">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="footer-card">
                  <div className="icons-lien flex">
                  {project.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              className="lien-projet"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
           ))}
         
  
      </Slider>
     
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
