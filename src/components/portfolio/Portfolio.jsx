import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assests/pro1.jpg"
import IMG2 from "../../assests/pro2.jpg"
import IMG3 from "../../assests/pro3.jpg"
import IMG4 from "../../assests/pro4.jpg"

const data =[
  {
    id:1,
    image:IMG1,
    title:"Innovate-Tech",
    demo:"https://github.com/shiffa-04/responsivewebsite"
  },
  {
    id:2,
    image:IMG2,
    title:"Cara",
    demo:"https://github.com/shiffa-04/EcommerceWebsite"
  },
  {
    id:3,
    image:IMG3,
    title:"Tim Dog",
    demo:"https://github.com/shiffa-04/timDog"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
       <h5>My Recent Work</h5>
       <h2>Projects</h2>

       <div className='container portfolio__container'>
         {
          data.map(({id, image, title, demo}) => {
            return  (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                 <img src={image}alt='' />
              </div>
              <h3>{title}</h3>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
             </article>)
            })
         }
        
       </div>
     
    </section>
  )
}
export default Portfolio;