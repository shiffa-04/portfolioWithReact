import React, {useState}from 'react'
import Typewriter from 'typewriter-effect';
import "./header.css"
import HeaderSocials from "./HeaderSocials"

export const Header = () => {
  return (
    <header>
      <div className='container header__container'>
      <h5>Hello</h5>
      <h2>I'm Shiffa</h2>
      <h1 style={{color:"rgba(77,181,255,0.4)"}}>

      <Typewriter
      options={{
        loop: true, // Set loop to true
    }}
           onInit={(typewriter) => {
              typewriter.typeString('Web Developer')
                .callFunction(() => {
                    //console.log('String typed out!');
                })
                .pauseFor(250)
                .deleteAll()
                .callFunction(() => {
                    //console.log('All strings were deleted');
                })
                .start();
            }}   
      />
      </h1>
        <HeaderSocials />
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
      

    </header>
  )
}
export default Header;