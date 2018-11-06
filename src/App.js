import React, { Component } from 'react';
import './App.css';
import MainScreenContainer from './components/MainScreenContainer';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreenContainer />
        <Navbar />
      </div>
    );
  }
}

export default App;
