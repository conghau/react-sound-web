import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { HeaderNav } from './themes/HeaderNav';
import Player from './components/Player/_Player';

class App extends Component {
  render() {
    return (
      <div className="App">
        {HeaderNav()}
        <div className="container animated">{routes}</div>
        <Player />
      </div>
    );
  }
}

export default App;
