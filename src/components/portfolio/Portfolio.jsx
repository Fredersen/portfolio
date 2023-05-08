import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio7.png';
import IMG4 from '../../assets/portfolio9.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes Projets</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="Image Ecommerce" />
          </div>
          <h3>Site E-commerce Fictif</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Fredersen/estiam_react_app" className='btn' target='_blank'>Github</a>
            <a href="https://estiam-ecommerce-front.onrender.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Twitch Clone Image" />
          </div>
          <h3>Twitch Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Fredersen/Twitch" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Image Site Gym Club" />
          </div>
          <h3>Gym Club Fictif</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Fredersen/Gym" className='btn' target='_blank'>Github</a>
            <a href="https://gym-fake.onrender.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Image Site Agence Immobilière" />
          </div>
          <h3>Agence Immobilière Fictive</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Fredersen/AgenceImmo" className='btn' target='_blank'>Github</a>
            <a href="http://heracles.naim-jhuboo.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio