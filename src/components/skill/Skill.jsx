import React from 'react'
import "./skill.css"
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const Skill = () => {
  return (
    <section id='skill'>
        <h2>My Skills</h2>
        <div className='container skill__container'>
        <div className='skill__frontend'>
            <h3>Frontend Development</h3>
            <div className='skill__content'>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>HTML</h4>
                </article>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>CSS</h4>
                </article>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>JavaScript</h4>
                </article>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>Bootstrap</h4>
                </article>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>React</h4>
                </article>
            </div>
        </div>
        <div className='skill__backend'>
            <h3>Backend Development</h3>
            <div className='skill__content'>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>C++</h4>
                </article>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>Python</h4>
                </article>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>Node Js</h4>
                </article>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>Express Js</h4>
                </article>
                <article className='skill__details'>
                    <IoCheckmarkDoneSharp className='skill__details-icon' />
                    <h4>My SQL</h4>
                </article>
            </div>
        </div>


        </div>
    </section>
  )
}
export default Skill;
