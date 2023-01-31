import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Motion from './components/motion/Motion'
import Particle from './components/particleBack/Particle'
import BackSeparator from './components/backSeparator/BackSeparator'
import BackSeparator2 from './components/backSeparator2/BackSeparator2'
import DarkMode from './components/darkMode/DarkMode'



const App = () => {
   
    return (
            <div >
                <DarkMode />
                <Particle/>
                {/* <Motion/>  */}
                <Header/>
                <Nav/>
                <About/>
                <Experience />
                <Portfolio />
                <BackSeparator /> 
                <Services />
                <BackSeparator2/> 
                <Testimonials />
                <Contact />
                <Footer /> 
            </div>
        )
}

export default App	