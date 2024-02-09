import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__Socials'>
        <a href='https://www.linkedin.com/in/shiffa-tariq-782a3a299/' target='_blank'><FaLinkedin /></a>
        <a href='https://github.com/shiffa-04' target='_blank'><FaGithub /></a>
    </div>
  )
}
export default HeaderSocials;
