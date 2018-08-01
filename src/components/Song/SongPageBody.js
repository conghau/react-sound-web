import React from 'react';
import PropTypes from 'prop-types';
import SuggestedSection from './SuggestedSection';
import './_Song.sass';

const propTypes = {
  suggestedSongs: PropTypes.array.isRequired
};

const SongPageBody = props => {
  const { suggestedSongs } = props;
  console.log(suggestedSongs);
  if (suggestedSongs) {
    return (
      <div className="song-body">
        <SuggestedSection songs={suggestedSongs} />
      </div>
    );
  }
  return null;
};

SongPageBody.propTypes = propTypes;

export default SongPageBody;
