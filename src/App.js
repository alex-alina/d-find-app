import React, { Component } from 'react';
import './App.css';
import MainScreenContainer from './components/MainScreenContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainScreenContainer />
        <div className="navbar"></div>
      </div>
    );
  }
}

export default App;
