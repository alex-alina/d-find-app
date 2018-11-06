import React, { Component } from 'react';
import './App.css';
import MainScreenContainer from './components/MainScreenContainer';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
import UserProfilePage from './components/UserProfilePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainScreenContainer}/>
        <Route path="/userProfile/:id" component={UserProfilePage} />
        <Navbar />
      </div>
    );
  }
}

export default App;
