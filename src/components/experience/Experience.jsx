import React from "react";
import "./experience.css";
import { ReactComponent as HtmlIcon } from "../../assets/icons/html.svg";
import { ReactComponent as ReactJsIcon } from "../../assets/icons/react-js.svg";
import { ReactComponent as BootstrapIcon } from "../../assets/icons/bootstrap.svg";
import { ReactComponent as TailwindIcon } from "../../assets/icons/tailwind.svg";
import { ReactComponent as JsIcon } from "../../assets/icons/js.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/css.svg";
import { ReactComponent as PhpIcon } from "../../assets/icons/PHP.svg";
import { ReactComponent as MysqlIcon } from "../../assets/icons/MySQL.svg";
import { ReactComponent as SymfonyIcon } from "../../assets/icons/symfony.svg";
import { ReactComponent as CPlusPlusIcon } from "../../assets/icons/c++.svg";
import { ReactComponent as DockerIcon } from "../../assets/icons/docker.svg";
import { ReactComponent as FigmaIcon } from "../../assets/icons/figma.svg";
import { ReactComponent as WordpressIcon } from "../../assets/icons/wordrpess.svg";
import { ReactComponent as PrestashopIcon } from "../../assets/icons/Prestashop.svg";
import { ReactComponent as JavaIcon } from "../../assets/icons/java.svg";
import { ReactComponent as NodeIcon } from "../../assets/icons/node.svg";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Les technologies que j'utilise</h5>
      <h2>SKILLS</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ReactJsIcon />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experience__details">
              <BootstrapIcon />
              <div>
                <h4>Bootstrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <TailwindIcon />
              <div>
                <h4>Tailwind</h4>
              </div>
            </article>
            <article className="experience__details">
              <JsIcon />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <HtmlIcon />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <CssIcon />
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
              <PhpIcon />
              <div>
                <h4>PHP</h4>
              </div>
            </article>
            <article className="experience__details">
              <SymfonyIcon />
              <div>
                <h4>Symfony</h4>
              </div>
            </article>
            <article className="experience__details">
              <CPlusPlusIcon />
              <div>
                <h4>C++</h4>
              </div>
            </article>
            <article className="experience__details">
              <NodeIcon />
              <div>
                <h4>Node</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Autres</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DockerIcon />
              <div>
                <h4>Docker</h4>
              </div>
            </article>
            <article className="experience__details">
              <FigmaIcon />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
            <article className="experience__details">
              <WordpressIcon />
              <div>
                <h4>WordPress</h4>
              </div>
            </article>
            <article className="experience__details">
              <PrestashopIcon />
              <div>
                <h4>Prestashop</h4>
              </div>
            </article>
            <article className="experience__details">
              <MysqlIcon />
              <div>
                <h4>PhpMyAdmin</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
