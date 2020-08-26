import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Hero from './components/Hero';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddClient from './components/clients/AddClient';
import Clients from './components/clients/Clients';
import Exers from './components/exercises/Exers';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/clients')
      .then(res => {
        console.log('clients',res.data)
        this.setState({ clients: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <Switch>
  
          <Route path='/' exact component={Hero} />
          <Route path='/dashboard' component={Dashboard} />
          <Route
            path='/clients'
            render={props =>
              <Clients {...props} clients={this.state.clients} />}
            />
          <Route path='/add-client' component={AddClient} />
          <Route path='/exers' component={Exers} />
  
        </Switch>
      </div>
    );
  }
}

export default App;
