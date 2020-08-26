import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/pbms.webp';

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavLink to='/dashboard' className='header-link'>Dashboard</NavLink>
        <a href="https://pilatesbodyandmindstudio.com/">
          Pilates Body & Mind Home
        </a>
      </header>
    </div>
  )
}
