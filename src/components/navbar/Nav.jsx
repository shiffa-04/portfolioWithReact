import React, { useState } from 'react'
import "./nav.css"
import { FaHome } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { MdLibraryBooks } from "react-icons/md";
import { TiMessages } from "react-icons/ti"
import { GoGraph } from "react-icons/go";


export const Nav = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><FaHome /></a>
      <a href='#about' onClick={() => setActiveNav("#about")}  className={activeNav === "#about" ? "active" : ""}><FaUser /></a>
      <a href='#skill' onClick={() => setActiveNav("#skill")} className={activeNav === "#skill" ? "active" : ""}><GoGraph /></a>
      <a href='#portfolio' onClick={() => setActiveNav("#portfolio")} className={activeNav ===" #portfolio" ? "active" : ""}><MdLibraryBooks /></a>
      <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><TiMessages /></a>
    </nav>
  )
}
export default Nav;