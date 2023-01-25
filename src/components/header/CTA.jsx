import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Mon CV</a>
        <a href="#contact" className='btn btn-primary'>Contactez Moi</a>
    </div>
  )
}

export default CTA