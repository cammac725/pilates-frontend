import React from 'react'
import logo from '../assets/pbms.webp';

export default function Header() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://pilatesbodyandmindstudio.com/">
          Pilates Body & Mind Home
        </a>
      </header>
    </div>
  )
}
