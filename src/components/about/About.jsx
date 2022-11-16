import React from 'react'
import './about.css'
import ME from '../../assets/photo.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                     </div>
                </div>


                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2 ans de travail </small>
                        </article>

                        <article className="about__card">
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>200+ Worldwide </small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Projects</h5>
                            <small>80 + completed </small>
                        </article>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat interdum ante, quis luctus diam posuere eget.
                        Proin congue varius nulla, non scelerisque nisi fermentum vel. Praesent mi erat, fermentum in erat at, finibus ornare massa.
                        Duis interdum libero et lorem vehicula accumsan. Nulla at accumsan urna, vitae suscipit tortor.
                        Nulla id sapien quis magna cursus feugiat. Suspendisse sit amet dui vitae ipsum placerat sagittis.
                        Sed non suscipit velit. Vivamus tincidunt leo sed lacus porttitor, vel pharetra mauris mattis.       
                    </p>

                    <a href="#contact" className='btn btn-primary'>Parlons</a>
                </div>
            </div>

        </section>
    )
}

export default About