import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {HiDesktopComputer} from 'react-icons/hi'
import { useState } from 'react';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <div>
      <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''} ><AiOutlineUser /></a>
        <a href="#experience" onClick={() => setActiveNav('#experiences')} className={activeNav === "#experiences" ? 'active' : ''} ><BiBook /></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === "#portfolio" ? 'active' : ''}><HiDesktopComputer /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><BiMessageSquareDetail /></a>
      </nav>
    </div>
  )
}

export default Nav