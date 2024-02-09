import React from 'react'
import "./about.css"
import Button from "../about/Button"
import Me from "../../assests/shiffa.jpg"

export const About = () => {
  return (
   <section id='about'>
    <h5>Get to Know</h5>
    <h2>ABout Me</h2>

    <div className='container about__container'>
      <div className='about-me'>
         <div className='about-me-image'>
            <img src={Me} alt='MyImage' />
          </div>
      </div>
          <div className="about__content">
          <p> I'm Shiffa, a seasoned Full Stack Web Developer dedicated to transforming innovative concepts into polished, high-performance digital solutions. With a meticulous approach to coding and a comprehensive skill set covering both front-end and back-end technologies<br></br><br></br>I’m always down for hearing about new projects, so feel free to drop me a line.</p>
          <Button /> 

           </div>
      
    </div>
   </section>
  )
}
export default About