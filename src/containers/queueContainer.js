import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Queue from '../components/Queue';
import { queueAction } from '../actions/queueActions';
import { uiAction } from '../actions/uiActions';
import { isUndefined } from 'lodash';

class QueueContainer extends Component {
  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    let { songs } = this.props;
    return !isUndefined(songs) ? <Queue {...this.props} /> : null;
  }
}

function mapStateToProps(state) {
  return {
    songs: state.queueReducer.queue
  };
}

function mapAction(dispatch) {
  const { toggleQueue } = uiAction;
  const { clearQueue, removeSongFromQueue } = queueAction;
  return bindActionCreators(
    {
      clearQueue,
      toggleQueue,
      removeSongFromQueue
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapAction
)(QueueContainer);
