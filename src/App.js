import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Gamecards from './components/Gamecards/Gamecards.js';
import GamecardsList from './components/Gamecards/GamecardsList.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Click Game</h1>
        </header>
        <p className="App-intro">
        Click on an image to earn points, but don't click on any more than once!
        </p>

        <Container>
        <Gamecards/>
        </Container>
      </div>
    );
  }
}

export default App;
