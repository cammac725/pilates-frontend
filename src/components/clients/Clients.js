import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Client from './Client';

class Clients extends Component {

  render() {
    return (
      <div className='admin-container'>
        <div className='panel'>
          <h1 className='title'>Client list</h1>
          <div className='clients-list'>
            {this.props.clients.map((client, key) =>{
              return (

                <ul className='list-group client-list' key={client.id}>
                  <NavLink
                    to='/client'
                    className='client-link'
                    >
                    <li className='list-group-item list-group-item-action'>{client.first_name + ' ' + client.last_name}</li>
                  </NavLink>
                  
                </ul>
              )
            })}
          </div>
          <NavLink
            to='/add-client'
            className='Nav-Link add-link'
            >Add a new client</NavLink>
        </div>
      </div>
    )
  }
}

export default Clients
