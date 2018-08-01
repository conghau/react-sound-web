import React from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import TopResult from './TopResult';
import SongResult from './SongResult';
import AlbumResult from './AlbumResult';
import ArtistResult from './ArtistResult';
import './_SearchMenu.sass';

class SearchMenu extends React.PureComponent {
  handleClickOutside = () => {
    this.props.clearSearchResult();
  };

  render() {
    const { data } = this.props.searchResult;
    if (!data) return null;
    const { top, song, video, artist, album } = data || {};
    return (
      <ul className="search-menu">
        {top && (
          <TopResult
            {...top}
            clearSearchResult={this.props.clearSearchResult}
          />
        )}
        <SongResult
          songs={song || []}
          clearSearchResult={this.props.clearSearchResult}
        />
        <SongResult
          songs={video || []}
          clearSearchResult={this.props.clearSearchResult}
          type="video"
        />
        <ArtistResult
          artists={artist || []}
          clearSearchResult={this.props.clearSearchResult}
        />
        <AlbumResult
          albums={album || []}
          clearSearchResult={this.props.clearSearchResult}
        />
      </ul>
    );
  }
}

SearchMenu.propTypes = {
  searchResult: PropTypes.object.isRequired,
  clearSearchResult: PropTypes.func.isRequired
};

export default onClickOutside(SearchMenu);
