import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Hero from './components/Hero';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>

        <Route path='/' exact component={Hero} />
        
        <Route path='/dashboard' component={Dashboard} />

      </Switch>
    </div>
  );
}

export default App;
