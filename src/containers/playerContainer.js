import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Player from '../components/Player/Player';
import { uiAction } from '../actions/uiActions';
import { queueAction } from '../actions/queueActions';
import { songAction } from '../actions/songActions';
import { playerAction } from '../actions/playerActions';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.songData['id'] || 0
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.log('componentDidCatch');
    console.log({ error, errorInfo });
  }

  render() {
    const {
      songData,
      isFetching,
      queue,
      queueIds,
      updateLyric,
      updateLyricPercent,
      fetchSong,
      toggleQueue,
      togglePushRoute,
      playedPercent,
      lyric1,
      lyric2,
      per1,
      per2
    } = this.props;
    const { name, id, source, thumbnail, artists, lyric, type } =
      songData || {};
    if (typeof id === 'undefined') {
      return null;
    }
    return (
      <Player
        playedPercent={playedPercent}
        lyric1={lyric1}
        lyric2={lyric2}
        per1={per1}
        per2={per2}
        // playerState={playerState}
        updateLyric={updateLyric}
        updateLyricPercent={updateLyricPercent}
        fetchSong={fetchSong}
        queue={queue}
        queueIds={queueIds}
        toggleQueue={toggleQueue}
        togglePushRoute={togglePushRoute}
        isFetching={isFetching}
        name={name}
        id={id}
        source={source}
        thumbnail={thumbnail}
        artists={artists}
        lyric={lyric}
        type={type || 'audio'}
      />
    );
  }
}

function mapStateToProps(state) {
  const { songReducer, playerReducer, queueReducer } = state;
  const { queue, ids } = queueReducer;
  const { songData, isFetching } = songReducer;
  const { playedPercent, lyric1, lyric2, per1, per2 } = playerReducer;

  return {
    playedPercent,
    lyric1,
    lyric2,
    per1,
    per2,
    songData,
    isFetching,
    // routing,
    queue: queue,
    queueIds: ids
  };
}

function mapActionToProps(dispatch) {
  const { toggleQueue } = uiAction;
  const { updateLyric, updateLyricPercent } = playerAction;
  const { togglePushRoute } = queueAction;

  return bindActionCreators(
    {
      toggleQueue,
      togglePushRoute,
      updateLyric,
      updateLyricPercent,
      ...songAction
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(PlayerContainer);
