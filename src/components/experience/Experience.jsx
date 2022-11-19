import React from "react"
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h3>What Skills I have</h3>
            <h2>Mon experiece</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend</h3>
                    <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details_icon" />
                        <div>
                        <h4>Bootstrap</h4>
                        <small className="text-light"> Experienced </small>
                        </div>
                       
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon" />
                    <div>
                    <h4>Bootstrap</h4>
                        <small className="text-light"> Experienced </small>
                    </div>
                      
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon" />
                    <div>
                    <h4>Tailwind</h4>
                        <small className="text-light"> Experienced </small>
                    </div>
                       
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon" />
                    <div>
                    <h4>React</h4>
                        <small className="text-light"> Experienced </small>
                    </div>
                      
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon" />
                    <div>
                    <h4>HTML</h4>
                        <small className="text-light"> Experienced </small>
                    </div>
                      
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon" />
                    <div>
                    <h4>CSS</h4>
                        <small className="text-light"> Experienced </small>
                    </div>
                      
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon" />
                    <div>
                    <h4>Javascript</h4>
                        <small className="text-light"> Experienced </small>
                    </div>
                      
                    </article>
                  
                </div>
                </div>
                <div className="experience__backend">
                <h3>Backend</h3>
                <div className="experience__content">
                    <article className="experience__details">
                        <BsPatchCheckFill className="experience__details_icon" />
                        <div>
                        <h4>PHP</h4>
                        <small className="text-light"> Experienced </small>
                        </div>   
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon"   />
                    <div>
                    <h4>MSQL</h4>
                        <small className="text-light"> Experienced </small>
                    </div>
                       
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon" />
                    <div>
                    <h4>PhpMyAdmin</h4>
                        <small className="text-light"> Experienced </small>
                    </div>
                      
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon" />
                    <div> <h4>Symfony</h4>
                        <small className="text-light"> Experienced </small>
                        </div>
                       
                    </article>
                    <article className="experience__details">
                    <BsPatchCheckFill className="experience__details_icon" />
                    <div>
                    <h4>MongoDb</h4>
                        <small className="text-light"> Experienced </small>
                    </div>
                       
                    </article>
                    
                </div>
                </div>
            </div>
        </section>
    )
}

export default Experience