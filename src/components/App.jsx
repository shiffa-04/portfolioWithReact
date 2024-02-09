import React from 'react'
import Header from "./header/Header"
import Nav from "./navbar/Nav"
import About from "./about/About"
import Skill from "./skill/Skill"
import Portfolio from "./portfolio/Portfolio"
import Contact from "./contact/Contact"
import Footer from "./footer/Footer"

function App() {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App