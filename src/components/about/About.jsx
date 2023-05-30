import React from 'react'
import "./About.css"
import ME from "../../assets/img/fotoportfolioexe.jpg"
import {FaAward} from 'react-icons/Fa'
import {FiUsers} from 'react-icons/Fi'
import {VscNewFolder} from 'react-icons/Vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="about img" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Users</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about_card'>
              <VscNewFolder className='about_icon'/>
              <h5>Proyects</h5>
              <small>+50 proyects completed</small>
            </article>
          </div>  
          <p>
            Soy un desarrollador de sofware en desarrollo que comenzo como un hobby y termino siendo una pasion.
            Mi interes se centra en el desarrollo de paginas y aplicacion web y movil,la idea es elaborar productos de calidad con diseños simples y elegantes.
            En base a proyectos he mejorado mis habilidades como desarrollador, lo que me motiva a seguir aprendiendo cada dia y mejorar mis conocimientos, sin miedo pero con respeto para nuevos desafios.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
         
        </div>
      </div>
    </section>
  )
}

export default About