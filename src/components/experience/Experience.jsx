import React from "react";
import "./experience.css";
import html from "../../assets/icons/html.svg";
import reactjs from "../../assets/icons/react-js.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import tailwind from "../../assets/icons/tailwind.svg";
import js from "../../assets/icons/js.svg";
import css from "../../assets/icons/css.svg";
import php from "../../assets/icons/PHP.svg";
import mysql from "../../assets/icons/MySQL.svg";
import symfony from "../../assets/icons/symfony.svg";
import cplusplus from "../../assets/icons/c++.svg";
import docker from "../../assets/icons/docker.svg";
import figma from "../../assets/icons/figma.svg";
import wordpress from "../../assets/icons/wordrpess.svg";
import prestashop from "../../assets/icons/Prestashop.svg";

const Experience = () => {
  return (
    <section id="experience">
      <h3>Les technologies que j'utilise</h3>
      <h2>SKILLS</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={reactjs} />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <img src={bootstrap} alt="" />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <img src={tailwind} alt="" />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="experience__details">
              <img src={js} alt="" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <img src={html} alt="" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <img src={css} alt="" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={php} alt="" />
              <div>
                <h4>PHP</h4>
              </div>
            </article>

            <article className="experience__details">
              <img src={mysql} alt="" />
              <div>
                <h4>PhpMyAdmin</h4>
              </div>
            </article>
            <article className="experience__details">
              <img src={symfony} alt="" />
              <div>
                {" "}
                <h4>Symfony</h4>
              </div>
            </article>
            <article className="experience__details">
              <img src={cplusplus} alt="" />
              <div>
                <h4>C++</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Autres</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={docker} alt="" />
              <div>
                <h4>Docker</h4>
              </div>
            </article>

            <article className="experience__details">
              <img src={figma} alt="" />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
            <article className="experience__details">
              <img src={wordpress} alt="" />
              <div>
                {" "}
                <h4>WordPress</h4>
              </div>
            </article>
            <article className="experience__details">
              <img src={prestashop} alt="" />
              <div>
                <h4>Prestashop</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
