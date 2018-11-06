import React, { Component } from 'react';
import './App.css';
import MainScreenContainer from './features/mainscreen/MainScreenContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Paul, I'm D.find</h1>
        <MainScreenContainer />
      </div>
    );
  }
}

export default App;
