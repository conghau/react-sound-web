import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'lodash';
import Playlist from '../components/Playlist';
// import { Karaoke } from '../containers/karaokeContainer';
import Karaoke from '../components/Karaoke/index';

import { albumAction } from '../actions/albumActions';
import { queueAction } from '../actions/queueActions';

class AlbumsPlaylistPage extends React.Component {
  constructor(props) {
    super(props);

    const { title, id } = this.props.match.params;
    console.log(this.props.match.params);
    this.state = {
      pathname: this.props.location.pathname || '',
      title,
      id
    };
  }

  componentWillMount() {
    let { title, id } = this.state;
    console.log(this.state);
    if (!isEmpty(this.props.playlist)) {
      // Clear the the previous playlist data in the store
      this.props.clearPlaylist();
    }
    this.props.fetchAlbumPlaylist({ title, id });
  }

  showArtistInfo = () => {
    this.setState({ showArtistInfo: true });
  };

  truncateInfo = info => {
    if (info && info.length > 100) {
      return info.substring(0, 100) + '...';
    } else {
      return info;
    }
  };

  render() {
    const { showArtistInfo } = this.state;
    const { playlist, isPlaying } = this.props || {};
    const {
      genres,
      artist,
      release_year,
      album_playlist_thumb,
      album_title,
      songs,
      artist_thumb,
      artist_info
    } = playlist;
    return (
      <div className="album-playlist">
        <div className="album-playlist-header">
          <div className="album-playlist-thumb image-wrapper">
            <img src={album_playlist_thumb} alt="" />
          </div>
          <div className="ap-info">
            <div className="ap-title">{album_title}</div>
            <div className="ap-artist">{artist}</div>
            <div className="ap-releaseY">
              <span>Release:</span> {release_year}
            </div>
            <div>Genres: {genres ? genres.join(', ') : null}</div>
          </div>
        </div>
        <div className="album-playlist-content">
          {isPlaying && (
            <Karaoke className="karaoke-album-playlist" fontSize="23px" />
          )}
          <div className="playlist-play-btn">
            <a
              onClick={() => this.props.replaceQueue(songs)}
              className=""
              title="play"
            >
              <i className="ion-ios-play-circle" style={{ fontSize: `40px` }} />
            </a>
          </div>

          <Playlist songs={songs} className="ap" pathEntry="alias" />

          <div className="album-playlist-artist-info">
            <div className="album-laylist-artist-thumb image-wrapper">
              <img src={artist_thumb} />
            </div>
            <div className="album-playlist-artist-description">
              <p>
                {!showArtistInfo ? this.truncateInfo(artist_info) : artist_info}
              </p>
              {!showArtistInfo && (
                <button
                  className="sc-ir show-info-btn"
                  onClick={this.showArtistInfo}
                >
                  Show full description
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const playlist = state.albumReducer.playlist;
  const isPlaying = !isEmpty(state.songReducer.songData);
  return { playlist, isPlaying };
}

function mapDispatchToProps(dispatch) {
  const { replaceQueue } = queueAction;
  return bindActionCreators({ ...albumAction, replaceQueue }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsPlaylistPage);
