import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { artistAction } from '../actions/artistActions';
// import {replaceQueue} from '../actions/queue';
// import {fetchSong, fetchSuggestedSongs} from '../actions/song';
import LazyLoadImage from '../components/LazyLoadImage/index';
import Playlist from '../components/Playlist/index';
import WithBackgroundImage from '../components/WithBackgroundImage/index';
import Pagination from 'react-paginate';

class ArtistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.match.params
    };
  }

  componentDidMount() {
    const { artistName } = this.props.match.params; // check if there is already artist data or not
    console.log(this.props.match.params);
    // if (!artistName || this.props.artistName !== this.props.params.name) {
    console.log(this.props);
    this.props.fetchArtist(artistName, 'songs');
    // }
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.params.name !== this.props.params.name) {
    //   this.props.fetchArtist(nextProps.params.name);
    // }
    //
    // const nextPage = nextProps.location.query.page;
    // const currPage = this.props.location.query.page;
    //
    // if (nextPage && nextPage !== currPage) {
    //   this.props.fetchArtist(this.props.params.name, 'songs', nextPage);
    // }
  }

  handlePageClick = () => {};

  render() {
    const { props } = this;
    console.log(props);
    const {
      avatar,
      cover,
      songs,
      artistName,
      pageChunks,
      pageChunkIndex,
      numberOfPages
    } = this.props;

    return (
      <div className="artist-page">
        <WithBackgroundImage className="artist-page-header" src={cover}>
          <div className="artist-box">
            <LazyLoadImage
              className="artist-avatar image-wrapper"
              src={avatar || ''}
            />
            <div className="aritst-name">{artistName}</div>
          </div>
        </WithBackgroundImage>
        <button
          onClick={() => props.replaceQueue(songs)}
          className="sc-ir"
          title="play"
        >
          <img
            src="/svg/play-button-inside-a-circle.svg"
            className="circle-play-icon"
          />
        </button>

        {songs && (
          <Playlist
            className="artist-playlist"
            songs={songs}
            pathEntry="alias"
          />
        )}
        {numberOfPages && (
          <Pagination
            previousLabel={'<<'}
            nextLabel={'>>'}
            pageCount={numberOfPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={5}
            activeClassName={'pagination-item-active'}
            containerClassName={'pagination'}
            breakLabel={<a href="">...</a>}
            breakClassName={'break-me'}
            subContainerClassName={'pages pagination'}
            onPageChange={e => {
              this.handlePageClick(e);
            }}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cover, avatar, artistName, songs, numberOfPages } =
    state.artistReducer || {};

  return {
    cover,
    avatar,
    songs,
    numberOfPages,
    artistName
    // queueIds: state.queueState.ids,
  };
}
function mapDispatchToProps(dispatch) {
  const { fetchArtist } = artistAction;
  return bindActionCreators({ fetchArtist }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistPage);
