import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Dashboard() {

  return (
    <div className='admin-container'>
      
      <div className='panel'>
        <h1 className='title'>Admin Dashboard</h1>
        <div className='content'>
          <div className='clients column'>
            <h2>Clients</h2>
            <NavLink
              to='/clients'
              className='Nav-Link dashlink'
              >
              See all
            </NavLink>
          </div>
          <div className='exers column'>
            <h2>Exercises</h2>
            <NavLink
              to='/exers'
              className='Nav-Link dashlink'
              >
              See all
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
