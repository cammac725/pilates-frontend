import React from 'react';

export default function Dashboard() {
  return (
    <div className='admin-dashboard'>
      
      <div className='panel'>
        <h1 className='title'>Admin Dashboard</h1>
        <div className='content'>
          <div className='clients'>
            <h2>Clients</h2>
            <button className='hero-btn'>See all</button>
          </div>
          <div className='exers'>
            <h2>Exercises</h2>
            <button className='hero-btn'>See all</button>
          </div>
        </div>
      </div>
    </div>
  )
}
