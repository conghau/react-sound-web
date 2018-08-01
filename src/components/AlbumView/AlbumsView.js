/**
 * Created by hautruong on 7/8/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { chunk, isUndefined } from 'lodash';
import './_AlbumView.sass';
import { CONST_ALBUM } from '../../constants';
import AlbumCard from '../AlbumCard/AlbumCard';

const Default = ({ origins, Card, chunkSize }) => {
  return (
    <div>
      {origins.map(origin => (
        <DefaultCards key={origin.id} {...origin} chunkSize={chunkSize} />
      ))}
    </div>
  );
};

const DefaultCards = ({ title, id, albums, chunkSize }) => {
  return (
    <div className="view-cards">
      <div className="view-cards-title">
        <a>
          {title} <i className="ion-chevron-right" />
        </a>
      </div>
      {chunk(albums, chunkSize).map((chunk, index) => (
        <Row key={`row-chunk${index}`} chunk={chunk} chunkSize={chunkSize} />
      ))}
    </div>
  );
};

const Row = ({ chunk }) => {
  return (
    <div className="view-cards-row">
      {chunk.map(item => (
        <AlbumCard
          key={item.id || item.name}
          title={item.title}
          artists={item.artists}
          cover={item.cover}
          id={item.id}
          alias={item.alias}
        />
      ))}
    </div>
  );
};

const AlbumsView = props => {
  const { isLoading, chunkSize, defaultAlbums, albums, viewType } = props;
  // let { artists } = defaultAlbums || {};
  if (isLoading) return <div className="loader" />;

  if (isUndefined(viewType)) {
    return <div className="view" />;
  }

  if (viewType === CONST_ALBUM.VIEW_DEFAULT) {
    return isUndefined(defaultAlbums) ? null : (
      <Default origins={defaultAlbums} chunkSize={chunkSize} />
    );
  }

  return isUndefined(albums)
    ? null
    : chunk(albums, chunkSize).map((chunk, index) => {
        return <Row key={`row-chunk${index}`} chunk={chunk} />;
      });
};

AlbumsView.propTypes = {
  defaultAlbums: PropTypes.array,
  albums: PropTypes.array,
  pageChunks: PropTypes.array,
  pageChunkIndex: PropTypes.number,
  changePageChunkIndex: PropTypes.func,
  chunkSize: PropTypes.number.isRequired,
  isLoading: PropTypes.bool,
  viewType: PropTypes.string
};

export default AlbumsView;
