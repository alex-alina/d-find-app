import React, { Component } from 'react';
import './App.css';
import MainScreenContainer from './components/MainScreenContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>D.find</h1>
        <MainScreenContainer />
      </div>
    );
  }
}

export default App;
