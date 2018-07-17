import React from 'react';
import { Link } from '../Link';
import { changeAlias } from '../../helper/func';

function ArtistResult(props) {
  return (
    <ul className="artist-result">
      <div className="search-li-title">Artist</div>
      {props.artists.map(artist => (
        <li key={artist.id}>
          <div className="search-li-detail">
            <img
              src={`http://image.mp3.zdn.vn/thumb/94_94/${artist.thumb}`}
              alt=""
            />
            <div className="search-li-info">
              <div className="search-li-artist">
                <Link
                  to={`/artist/${artist.aliasName}`}
                  onClick={() => props.clearSearchResult()}
                >
                  {artist.name}
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ArtistResult;
