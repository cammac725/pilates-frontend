import React from 'react';
import { NavLink } from 'react-router-dom';


function Hero() {
  return (
    <div className='hero'>
      <NavLink to='./dashboard' className='Nav-Link'>Admin portal</NavLink>
      <NavLink to='#' className='Nav-Link'>User portal</NavLink>
    </div>
  )
}

export default Hero;