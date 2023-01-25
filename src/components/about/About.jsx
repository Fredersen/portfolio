import React, {useState, useRef, useMemo, useEffect} from 'react';
import useElementOnScreen from '../../hooks/useElementOnScreen';
import './about.css'
import ME from '../../assets/moi.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {

  // const targetRef = useRef(null);

  // const isVisible = useElementOnScreen({
  //   root: null,
  //   rootMargin: '0px',
  //   thresoholt: 1
  // },targetRef)

  return (
    <section id="about">
      <h5>Faisons Connaissance</h5>
      <h2>À propos de moi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card" >
              <FaAward className='about__icon' />
              <h5>Développeur Web et Mobile</h5>
              <small>Formation 5 mois</small><br></br>
              <small>Wild Code School</small>
            </article>
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Data & Application Development </h5>
              <small>Titre de niveau Bac +3</small><br></br>
              <small>Estiam</small>
            </article>
          </div>
          <p>
              Bonjour ! Je m'appelle Naïm, je suis un développeur Web Full Stack passionné par les nouvelles technologies. Actuellement en formation à l'Estiam, je commence mon chemin dans le monde passionnant du développement.
          </p>
          <a href="#contact" className="btn btn-primary">Échangez avec moi</a>
        </div>
      </div>
      </section>
  )
}

export default About;