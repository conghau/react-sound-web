import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
// import Player from './components/Player/Player';
import Analyzer from './components/Analyzer/index';
import Loadable from 'react-loadable';
import ReactLoading from './components/Loading/index';

const LoadableHeaderNav = Loadable({
  loader: () => import('./components/HeaderNav/HeaderNav'),
  loading: ReactLoading
});
const LoadablePLayer = Loadable({
  loader: () => import('./components/Player/Player'),
  loading: ReactLoading
});

class App extends Component {
  render() {
    return (
      <div className="App" id="app">
        <LoadableHeaderNav />
        {/*<HeaderNav />*/}
        <div className="container animated">{routes}</div>
        {/*<Analyzer />*/}
        {/*<LoadablePLayer />*/}
      </div>
    );
  }
}

export default App;
