/**
 * Created by hautruong on 7/8/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { chunk, isUndefined } from 'lodash';
import './_GenreArtistView.sass';
import { CONST_GENRE_ARTIST } from '../../constants';

const Default = ({ origins, Card, chunkSize }) => (
  <div>
    {origins.map(origin => (
      <DefaultCards
        key={origin.id}
        {...origin}
        Card={Card}
        chunkSize={chunkSize}
      />
    ))}
  </div>
);

const DefaultCards = ({ title, id, albums, artists, Card, chunkSize }) => (
  <div className="view-cards">
    <div className="view-cards-title">
      <a>
        {title} <i className="ion-chevron-right" />
      </a>
    </div>
    {chunk(albums || artists, chunkSize).map((chunk, index) => (
      <Row
        key={`row-chunk${index}`}
        chunk={chunk}
        Card={Card}
        chunkSize={chunkSize}
      />
    ))}
  </div>
);

const Row = ({ chunk, Card }) => (
  <div className="view-cards-row">
    {chunk.map(item => <Card key={item.id || item.name} {...item} />)}
  </div>
);

const GenreArtistView = props => {
  const { chunkSize, defaultArtists, genreArtists, Card, viewType } = props;
  let { artists } = genreArtists || {};

  if (isUndefined(viewType)) {
    return <div className="view" />;
  }
  if (viewType === CONST_GENRE_ARTIST.VIEW_DEFAULT) {
    return isUndefined(defaultArtists) ? null : (
      <Default origins={defaultArtists} Card={Card} chunkSize={chunkSize} />
    );
  }

  return isUndefined(artists)
    ? null
    : chunk(artists, chunkSize).map((chunk, index) => {
        return <Row key={`row-chunk${index}`} chunk={chunk} Card={Card} />;
      });
};

GenreArtistView.propTypes = {
  defaultAlbums: PropTypes.array,
  albums: PropTypes.array,
  pageChunks: PropTypes.array,
  pageChunkIndex: PropTypes.number,
  changePageChunkIndex: PropTypes.func,
  chunkSize: PropTypes.number.isRequired,
  // type: PropTypes.string.isRequired,
  viewType: PropTypes.string
};

export default GenreArtistView;
