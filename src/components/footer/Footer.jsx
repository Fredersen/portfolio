import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Naïm Jhuboo</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">À propos de moi</a></li>
        <li><a href="#experience">Mon Expérience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contactez Moi</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/na%C3%AFm-jhuboo/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/Fredersen" target="_blank"><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Naïm Jhuboo All rights reserverved</small>
      </div>
    </footer>
  )
}

export default Footer