import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Hero from './components/Hero';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddClient from './components/clients/AddClient';
import Clients from './components/clients/Clients';
import Exers from './components/exercises/Exers';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>

        <Route path='/' exact component={Hero} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/clients' component={Clients} />
        <Route path='/add-client' component={AddClient} />
        <Route path='/exers' component={Exers} />

      </Switch>
    </div>
  );
}

export default App;
