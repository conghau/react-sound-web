import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
// import Player from './containers/playerContainer';
import Loadable from 'react-loadable';
import ReactLoading from './components/Loading/index';
import { ToastContainer } from 'react-toastify';
import { isEmpty } from 'lodash';

const LoadableHeaderNav = Loadable({
  loader: () => import('./components/HeaderNav/HeaderNav'),
  loading: ReactLoading
});

const LoadableAnalyzer = Loadable({
  loader: () => import('./components/Analyzer/index'),
  loading: ReactLoading
});
const LoadablePLayer = Loadable({
  loader: () => import('./containers/playerContainer'),
  loading: ReactLoading
});

const LoadableQueue = Loadable({
  loader: () => import('./containers/queueContainer'),
  loading: ReactLoading
});

if (process.env.NODE_ENV === 'development') {
  const { whyDidYouUpdate } = require('why-did-you-update');
  whyDidYouUpdate(React);
}

class App extends Component {
  // playerState: PropTypes.object.isRequired,
  // updateLyric: PropTypes.func.isRequired,
  // updateLyricPercent: PropTypes.func.isRequired,
  // songData: PropTypes.object.isRequired,
  // fetchSong: PropTypes.func.isRequired,
  // queue: PropTypes.array.isRequired,
  // queueIds: PropTypes.array,
  // toggleQueue: PropTypes.func.isRequired,
  // togglePushRoute: PropTypes.func.isRequired,
  // isFetching: PropTypes.bool.isRequired
  render() {
    const { showPlayer, showAnalyzer, showQueue, slideInRight } = this.props;
    const className = `container animated ${slideInRight && 'slideInRight'}`;
    return (
      <div className="App" id="app">
        <LoadableHeaderNav />
        <div className={className}>{this.props.children}</div>

        {showAnalyzer && <LoadableAnalyzer show={showAnalyzer} />}

        {showQueue && <LoadableQueue show={showQueue} />}

        {/*<queueContainer show={showQueue}/>*/}

        {showPlayer && <LoadablePLayer />}

        <ToastContainer position="top-right" autoClose={1000} />
      </div>
    );
  }
}

function mapStateToProps({ songReducer, UIReducer }) {
  const { showQueue, showAnalyzer, slideInRight } = UIReducer || {};
  const { songData } = songReducer || {};
  return {
    showPlayer: !isEmpty(songData.id || ''),
    showQueue,
    showAnalyzer,
    slideInRight
  };
}

export default connect(
  mapStateToProps,
  null
)(App);
