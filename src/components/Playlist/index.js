import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinksByComma from '../LinksByComma';
import { getSongUrl } from '../../helper/func';
import './index.sass';
import qs from 'querystring';

const Playlist = props => {
  const { songs, className, pathEntry } = props;
  console.log(props);
  const page = qs.parse(props.location.search).page || 1;

  return (
    <ul className={`${className} playlist-tracks`}>
      {songs &&
        songs.map((song, index) => (
          <li className="playlist-track" key={`playlist-${song.id}`}>
            <span className="playlist-track-order">
              {page ? (page - 1) * 20 + index + 1 : index + 1}
            </span>
            <div className="playlist-track-title ellipsis">
              <Link to={getSongUrl(song[pathEntry] || song.title, song.id)}>
                {song.title}
              </Link>
            </div>
            <div className="playlist-track-artist">
              {song.artist_text || (
                <LinksByComma
                  data={song.artists}
                  titleEntry="name"
                  pathEntry="alias"
                  definePath={alias => `/artist/${alias}`}
                />
              )}
            </div>
            {/* <div className="playlist-track-actions">
           <button
           className="sc-ir"
           title="download this song"
           ><i className="ion-ios-download-outline"></i></button>
           </div> */}
          </li>
        ))}
    </ul>
  );
};

Playlist.propTypes = {
  songs: PropTypes.array.isRequired,
  className: PropTypes.string,
  pathEntry: PropTypes.string
};

export default withRouter(Playlist);
