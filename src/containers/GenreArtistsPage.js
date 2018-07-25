/**
 * Created by hautruong on 6/30/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { genreArtistAction } from '../actions/genreArtistActions';
import GenreMenu from '../components/GenreMenu/GenreMenu';
import GenreArtistView from '../components/GenderArtistView/GenreArtistView';
import ArtistCard from '../components/ArtistCard/ArtistCard';
import { Genres } from '../seed';
import { isEmpty, isUndefined } from 'lodash';
import { CONST_GENRE_ARTIST } from '../constants';
import qs from 'querystring';
import ReactPaginate from 'react-paginate';
import { buildQueryString } from '../helper/query';

class GenreArtistsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathname: this.props.location.pathname || '',
      genre: '',
      id: '',
      page: qs.parse(props.location.search).page || 1
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.onFetchGenreArtists(this.props.match.params);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.location.pathname !== prevState.pathname) {
      return {
        //previousChildren: nextProps.children,
        //pointerEvents: false,
        pathname: nextProps.location.pathname
      };
    }

    return null;
  }

  onFetchGenreArtists = params => {
    let { genre, id } = params;
    let { page } = this.state;
    this.props.fetchGenreArtists({ genre, id, page });
    this.setState({ genre, id, page });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (
      prevProps.location.pathname !== this.props.location.pathname ||
      this.state.page !== prevState.page
    ) {
      this.onFetchGenreArtists(this.props.match.params);
    }
  }

  handlePageClick = data => {
    let selected = data.selected + 1;
    this.setState({ page: selected });
    let query = buildQueryString({ page: selected });
    let { pathname } = this.state;
    this.props.history.push(`${pathname}?${query}`);
    console.log(this);
  };

  render() {
    const { props } = this;
    const { genreArtists } = props;
    let { numberOfPages } = genreArtists || {};
    const { genre } = this.state;
    const viewType =
      isUndefined(genre) || isEmpty(genre)
        ? CONST_GENRE_ARTIST.VIEW_DEFAULT
        : CONST_GENRE_ARTIST.VIEW_DETAIL;
    return (
      <div className="__artists_page">
        <GenreMenu type="genre-artist" genres={Genres} />
        <div className="view">
          <GenreArtistView
            chunkSize={5}
            {...props}
            Card={ArtistCard}
            viewType={viewType}
          />
          {viewType === CONST_GENRE_ARTIST.VIEW_DETAIL && (
            <ReactPaginate
              previousLabel={'<<'}
              nextLabel={'>>'}
              pageCount={numberOfPages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={5}
              activeClassName={'pagination-item-active'}
              containerClassName={'pagination'}
              breakLabel={<a href="">...</a>}
              breakClassName={'break-me'}
              subContainerClassName={'pages pagination'}
              onPageChange={e => {
                this.handlePageClick(e);
              }}
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state.genreArtistReducer, isLoading: false };
}

function mapDispatchToProps(dispatch) {
  const { fetchGenreArtists } = genreArtistAction;
  return bindActionCreators({ fetchGenreArtists }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreArtistsPage);
