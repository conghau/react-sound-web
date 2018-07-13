import React from 'react';
import { Link } from '../Link';
import { changeAlias } from '../../helper/func';
// import LazyLoadImage from '../../LazyLoadImage';
import './ArtistCard';

const ArtistCard = props => {
  const url = `/artist/${changeAlias(props.name)}`;

  return (
    <div className="artist-card">
      <Link to={url}>
        <img src={props.thumb} />
        {/*<LazyLoadImage className="artist-image" src={props.thumb}/>*/}
      </Link>
      <div className="artist-detail">
        <div className="artist-title">
          <Link to={url}>{props.name}</Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
