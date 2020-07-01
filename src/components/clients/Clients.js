import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Users() {
  return (
    <div className='admin-container'>
      <div className='panel'>
        <h1 className='title'>Client list</h1>
        <div className='clients-list'>
          <ul className='list-group client-list'>
            <NavLink
              to='/client'
              className='client-link'
              >
              <li className='list-group-item list-group-item-action'>Jennifer Lowell</li>
            </NavLink>
            <li className='list-group-item list-group-item-action'>Carmine DiFazio</li>
            <li className='list-group-item list-group-item-action'>Betty White</li>
            <li className='list-group-item list-group-item-action'>Anne Gables</li>
            <li className='list-group-item list-group-item-action'>Marcus Aurelius</li>
            <li className='list-group-item list-group-item-action'>Paula Boreal</li>
          </ul>
        </div>
        <NavLink
          to='/add-client'
          className='Nav-Link add-link'
          >Add a new client</NavLink>
      </div>
    </div>
  )
}
