import React,{useState} from 'react'
import CV from "../../assests/cv.pdf";
import Contact from '../contact/Contact';

const Button = () => {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <div className='button'>
    <a href={CV} download className='btn'>Download CV</a>
    </div>
  )
}
export default Button