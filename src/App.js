import React, { Component } from 'react';
import './App.css';
import MainScreenContainer from './components/MainScreenContainer';
import CurrentUserProfilePage from './components/CurrentUserProfilePage';
import { Route } from 'react-router-dom';
import MatchScreenContainer from './components/MatchScreenContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={MainScreenContainer}/>
        <Route path="/match/:id" component={MatchScreenContainer} />
        <Route path="/currentUser/:id" component={CurrentUserProfilePage}/>
      </div>
    );
  }
}
export default App;
