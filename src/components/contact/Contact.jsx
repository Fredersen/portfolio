import React from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import contact from './contactInfo';

const Contact = () => {

  const [messageSuccess, setMessageSuccess] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(contact.serviceId, contact.templateId, form.current, contact.userId)
      .then((result) => {
          console.log(result.text);
          setMessageSuccess(true);
      }, (error) => {
          setMessageSuccess(false)
          console.log(error.text);
      });
    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Discutons ensemble</h5>
      <h2>Contactez Moi</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>naim.jhuboo@gmail.com</h5>
            <a href="mailto:naim.jhuboo@gmail.com" target="_blank">Envoyez un message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Naïm Jhuboo</h5>
            <a href="https://m.me/naimyassin.fredersen" target="_blank">Envoyez un message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+33679988012</h5>
            <a href="https://api.whatsapp.com/send?phone=33679988012" target="_blank">Envoyez un message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Votre nom' required />
          <input type="email" name='email' placeholder='Votre email' required />
          <textarea name="message" rows="7" placeholder='Votre message' required ></textarea>
          {messageSuccess && <p className='contact__success'>Votre message a bien été envoyé</p>}
          <button type="submit" className='btn btn-primary'>Envoyez Votre Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact