/**
 * Created by hautruong on 6/30/18.
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SongHeader from '../components/Song/SongHeader';
import SongPageBody from '../components/Song/SongPageBody';
import KaraokeContainer from './karaokeContainer';
import { songAction } from '../actions/songActions';
import { uiAction } from '../actions/uiActions';

class SongPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.match.params,
      pathname: this.props.location.pathname || ''
    };
  }

  componentDidMount() {
    const { name, id } = this.props.match.params; // check if there is already artist data or not
    this.props.fetchSong({ name, id });
    this.props.showAnalyzer();
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps');
  //   if (nextProps.location.pathname !== prevState.pathname) {
  //     console.log(nextProps);
  //     console.log(prevState);
  //     const {name, id} = nextProps.match.params;
  //     return {
  //       pathname: nextProps.location.pathname,
  //       ...{name, id}
  //     };
  //   }
  //
  //   return null;
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const { name, id } = this.props.match.params;
      this.props.fetchSong({ name, id });
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.log('componentDidCatch');
    console.log({ error, errorInfo });
  }

  render() {
    let {
      songData,
      download,
      downloadProgress,
      toggleModal,
      addSongToStoreTemporarily,
      suggestedSongs
    } = this.props;
    let { id, name, artists_names } = songData || {};
    return (
      <div className="__song_page">
        {songData.source && (
          <div>
            <SongHeader
              id={id}
              name={name}
              artists_names={artists_names}
              download={download}
              downloadProgress={downloadProgress}
              toggleModal={toggleModal}
              addSongToStoreTemporarily={addSongToStoreTemporarily}
            />
            <KaraokeContainer className="karaoke-song-page" />
            <SongPageBody suggestedSongs={suggestedSongs['items'] || []} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { songReducer, UIReducer, queueReducer } = state || {};
  return {
    suggestedSongs: songReducer.suggestedSongs || [],
    songData: songReducer.songData || {},
    downloadProgress: UIReducer.downloadProgress,
    // routing: state.routing,
    canPushRoute: queueReducer.pushRoute
  };
}

function mapDispatchToProps(dispatch) {
  const { fetchSong, fetchSuggestSong } = songAction;
  const { showAnalyzer, toggleModal } = uiAction;
  return bindActionCreators(
    { fetchSong, fetchSuggestSong, showAnalyzer, toggleModal },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongPage);
