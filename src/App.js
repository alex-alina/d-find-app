import React, { Component } from 'react';
import './App.css';
import MainScreenContainer from './components/MainScreenContainer';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainScreenContainer}/>
        <Navbar />
      </div>
    );
  }
}

export default App;
