import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '../Link';
// import { isAuthenticated } from '../../../HOC';
import { changeAlias } from '../../helper/func';

const SongHeader = props => {
  const {
    artist,
    id,
    name,
    artists_names,
    download,
    downloadProgress,
    authenticated,
    redirectTo,
    user
  } = props;
  console.log(props);
  const artists = artists_names && artists_names.split(/\s*,\s*/);

  return (
    <div className="song-header">
      {/* <div className="song-header-img">
       </div> */}
      <div className="song-header-info">
        <div className="song-header-song-title">{name}</div>
        <div className="song-header-song-artist">
          <Link
            to={`/artist/${artists && changeAlias(artists[0])}`}
            className="ellipsis"
            title={artist}
          >
            {artist}
          </Link>
        </div>
      </div>
      <div className="song-header-actions">
        <button
          className="sc-ir"
          title="Dowload the song"
          onClick={() =>
            download({
              songName: changeAlias(name),
              id: id
            })
          }
        >
          <i className="ion-ios-cloud-download" />
        </button>
        <button
          className="sc-ir"
          title="Add this song to your playlists"
          onClick={() => {
            if (!(authenticated && user.username)) {
              // remove the dropdown from the interface
              return redirectTo('/login');
            }

            props.addSongToStoreTemporarily({
              name: name,
              artists: artist,
              id: id,
              thumbnail: 'http://zmp3-photo-td.zadn.vn/noimage'
            });
            props.toggleModal();
          }}
        >
          <i className="ion-ios-add" />
        </button>
      </div>
      {downloadProgress &&
        downloadProgress.isDownloading && (
          <span>The song will be downloaded in a few seconds..</span>
        )}
    </div>
  );
};

SongHeader.propTypes = {
  download: PropTypes.func.isRequired,
  downloadProgress: PropTypes.object.isRequired,
  addSongToStoreTemporarily: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired
};

export default SongHeader;
