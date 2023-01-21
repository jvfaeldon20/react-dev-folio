import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME}/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years working as a web developer.</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>20+ work and freelance clients.</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ completed projects</small>
            </article>
          </div>

          <p>
          Hi! I'm JV -- an object oriented web developer with almost 4 years of demonstrated history working in computer software industry. I am skilled in DevOps, Scrum and Web development. In my years of web application development, I have already acquired the knowledge on how to implement and maximize the use of HTML, CSS and JS framework like VueJS, React, JQuery for building the frontend of the application. I have also implemented several RESTful public and private APIs with embedded authentication and authorization to access the data using the MVVM method. <br/><br/>

          I have also gained professional experience in CI/CD container adoption using Jenkins and perform unit auto testing using JEST. I have also gained experience in backend technologies such as database administration, SQL and RESTful API Integration using PHP. For code versioning, I am currently using GitHub to maintain the service updates and provide the system's future sustainability.<br/><br/>

          Right now, I am constantly learning and immersing myself in different kinds of technology. I'm still enthusiastically grabbing onto any other programming languages, frameworks, or principles where I can fully utilize into my coding experience.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About