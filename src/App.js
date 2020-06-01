import React from 'react';
import logo from './assets/pbms.webp';
import Hero from './components/Hero';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
          className="App-link"
          href="https://pilatesbodyandmindstudio.com/"
          >
          Pilates Body & Mind Home
          </a>
        </header>
        <Hero />
      </div>
    </div>
  );
}

export default App;
