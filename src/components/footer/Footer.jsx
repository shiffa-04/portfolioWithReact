import React from 'react';
import "./footer.css"

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => {
 
  return (
    <footer id='footer__copyright'>
    <span>© {getYear()} Shiffa Tariq</span>

    </footer>
  )
}
export default Footer;