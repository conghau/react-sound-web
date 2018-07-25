import React from 'react';
import { Link } from '../Link';
import LazyLoadImage from '../LazyLoadImage';
import LinksByComma from '../LinksByComma';
import PropTypes from 'prop-types';

class AlbumCard extends React.PureComponent {
  render() {
    const { props } = this;
    if (typeof props !== 'undefined' && props.hasOwnProperty('id')) {
      return (
        <div className="album-card">
          <Link to={`/album/playlist/${props.alias}/${props.id}`}>
            <LazyLoadImage className="album-image" src={props.cover} />
          </Link>
          <div className="__album-detail">
            <div className="__album-title">
              <Link to={`/album/playlist/${props.alias}/${props.id}`}>
                {props.title}
              </Link>
            </div>
            <div className="__album-artists">
              <LinksByComma
                data={props.artists}
                titleEntry="name"
                pathEntry="alias"
                // definePath={(alias) => `/artist/${alias}`}
              />
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

AlbumCard.propTypes = {
  alias: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  cover: PropTypes.string,
  artists: PropTypes.array
};

export default AlbumCard;
