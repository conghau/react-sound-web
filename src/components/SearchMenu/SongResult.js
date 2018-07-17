import React from 'react';
import { Link } from '../Link';
import { getSongUrl } from '../../helper/func';

function SongResult({ songs, clearSearchResult, type = 'audio' }) {
  return (
    <ul className="song-result">
      <div className="search-li-title search-song-title">
        {type === 'audio' ? `Songs` : `Video`}
      </div>
      {songs.map(song => (
        <li key={`song-result${song.id}`}>
          <div className="search-li-detail search-song-detail">
            <div className="search-li-info search-song">
              <div>
                <Link
                  to={getSongUrl(song.name, song.id)}
                  onClick={() => clearSearchResult()}
                >
                  {song.name}
                </Link>
              </div>
              <div className="search-li-artist">{song.artist}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SongResult;
