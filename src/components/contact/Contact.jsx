import React from 'react'
import "./contact.css"
import { IoIosArrowForward } from "react-icons/io";
import { useRef } from 'react';
import emailjs from "emailjs-com";


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_9wd66ws', 'template_1k1wb4n', form.current, process.env.REACT_APP_USER_ID)
      .then(
        (response) => {
          console.log('SUCCESS!',response);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section id='contact'>
       <h2>Contact Me</h2>

       <div className='container contact__container'>
          <form ref={form} onSubmit={sendEmail}>
              <input type='text' name="name" placeholder='Your Name' required />
              <input type='email' name="email" placeholder='Your Email' required /> 
              <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary'><IoIosArrowForward /> Send message</button>
          </form>
       </div>
    
    </section>
  )
}


export default Contact;