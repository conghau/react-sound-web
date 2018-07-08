import React from 'react';
import { Link } from 'react-router-dom';
import { changeAlias } from '../../helper/func';
// import LazyloadImage from '../../LazyloadImage';
import './ArtistCard';

const ArtistCard = props => {
  const url = `/artist/${changeAlias(props.name)}`;

  return (
    <div className="artist-card">
      <Link to={url}>
        <img src={props.thumb} />
        {/*<LazyloadImage className="artist-image" src={props.thumb}/>*/}
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
