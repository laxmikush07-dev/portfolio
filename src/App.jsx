import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Services from './components/Services'
import Certificates from './components/Certificates'
import SoftSkills from './components/SoftSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Projects from './components/Projects'
import ContentCreator from './components/ContentCreator'

function App() {
  return (
    <>
    <Preloader/>
    <Navbar/>
    <Hero/>
    <About/>
    <TechnicalSkills/>
    <Services/>
    <Projects/>
    <ContentCreator/>
    <Certificates/>
    <SoftSkills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App