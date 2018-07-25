import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Karaoke from '../components/Karaoke/index';
import { isEqual, isEmpty } from 'lodash';
// import {updatePlayedPercent} from '../actions/player';

class KaraokeContainer extends React.Component {
  //
  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(nextProps, this.props);
  }

  render() {
    const {
      per1,
      per2,
      lyric1,
      lyric2,
      isFetching,
      cover,
      artists_names,
      name,
      showInfo
    } = this.props;

    // if (isEmpty(lyric1) && isEmpty(lyric2)) {
    //   return null;
    // }
    return (
      <Karaoke
        lyric1={lyric1}
        lyric2={lyric2}
        per1={per1}
        per2={per2}
        isFetching={isFetching}
        cover={cover}
        artists_names={artists_names}
        name={name}
        showInfo={showInfo}
      />
    );
  }
}

function mapStateToProps(state) {
  const { songReducer, playerReducer } = state;
  const { cover, artists_names, name, lyric, isFetching, thumbnail } =
    songReducer.songData || {};

  const { per1, per2, lyric1, lyric2 } = playerReducer;

  return {
    per1,
    per2,
    lyric1,
    lyric2,
    isFetching,
    cover: cover || thumbnail || '',
    artists_names,
    name,
    showInfo: lyric && !lyric.length
  };
}

KaraokeContainer.propTypes = {
  className: PropTypes.string.isRequired,
  fontSize: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(KaraokeContainer);
