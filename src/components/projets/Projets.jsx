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
import RapportSaline from "../../assets/SOUMARE_Mouhamadou_SPE2_P2023.pdf";
import { FaCode, FaPhp,FaHandPaper,FaSymfony,FaWordpress, FaReact, FaGlobe,FaDocker,FaPython} from "react-icons/fa";
import {SiTypescript,SiRedux} from "react-icons/si";
import {BsFillFileEarmarkPdfFill} from "react-icons/bs";

// import { RxLink2 } from "react-icons/rx";

const Projets = () => {
  const carrousel = useRef();

  const [maxHeight, setMaxHeight] = useState(0); // Initialize maxHeight state

  // Calculate and update the maximum height among items
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
      title: "Saline Academy, du modèle média au modèle pédagogique",
      description: "Modernisation du site de la Saline Royale Academy en une plateforme de formation interactive avec gamification pour un meilleur engagement des apprenants.",
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
      title: "Charge-in, le comparateur d'offres pour vos projets énergétiques",
      description: "Back-office Charge-In, comprenant un tableau de bord administrateur, un récapitulatif des statistiques...",
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
      title: "AldiBnb, louez votre logement !",
      description: "Site d'annonces de location de biens immobiliers réalisé en groupe. Il y'a 3 types d'utilisateurs, l'administrateur, le loueur et le propriétaire.",
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
      title: "Leaf'Up, la serre connectée",
      description: "Projet d'équipe où l'on a eu pour idée la création d'un potager intelligent. On a joint à celle-ci un site faisant la domotique avec la serre et regroupant la communauté de la main verte.",
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
      title: "JMI Industries, un site de location de voiture",
      description: "Site réalisé sous Symfony et en binôme. L'utilisateur peut louer un véhicule, consulter son historique et gérer son compte. Les loueurs gèrent leurs stocks et la disponibilité des véhicules.",
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
  autoplay: true,          // Enable automatic scrolling
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
