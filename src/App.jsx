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
import Particle from './components/particleBack/Particle'

const App = () => {
   
    return (
            <div >
                <Particle/>
                {/* <Motion/>  */}
                <Header/>
                <Nav/>
                <About/>
                <Experience />
                <Portfolio />
                <Services />
                {/* <Testimonials /> */}
                {/* <Contact /> */}
                <Footer /> 
            </div>
        )
}

export default App	