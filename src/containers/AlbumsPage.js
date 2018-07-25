/**
 * Created by hautruong on 7/1/18.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { albumAction } from '../actions/albumActions';
import GenreMenu from '../components/GenreMenu/GenreMenu';
import AlbumsView from '../components/AlbumView/AlbumsView';
import { Genres } from '../seed';
import { isEmpty, isUndefined } from 'lodash';
import { CONST_ALBUM } from '../constants';
import qs from 'querystring';
import ReactPaginate from 'react-paginate';
import { buildQueryString } from '../helper/query';

class AlbumsPage extends Component {
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
    this.onFetchAlbum(this.props.match.params);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.location.pathname !== prevState.pathname) {
      return {
        pathname: nextProps.location.pathname
      };
    }

    return null;
  }

  onFetchAlbum = params => {
    let { genre, id } = params;
    let { page } = this.state;
    this.props.fetchAlbums({ genre, id, page });
    this.setState({ genre, id, page });
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (
      prevProps.location.pathname !== this.props.location.pathname ||
      this.state.page !== prevState.page
    ) {
      this.onFetchAlbum(this.props.match.params);
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
    const { defaultAlbums, albums, numberOfPages = 0 } = props;

    const { genre } = this.state;
    const viewType =
      isUndefined(genre) || isEmpty(genre)
        ? CONST_ALBUM.VIEW_DEFAULT
        : CONST_ALBUM.VIEW_DETAIL;

    return (
      <div className="__albums_page">
        <GenreMenu type="album" genres={Genres} />
        <div className="view">
          <AlbumsView
            chunkSize={4}
            viewType={viewType}
            defaultAlbums={defaultAlbums}
            albums={albums}
          />
          {viewType === CONST_ALBUM.VIEW_DETAIL && (
            <ReactPaginate
              previousLabel={'<<'}
              nextLabel={'>>'}
              pageCount={numberOfPages}
              pageRangeDisplayed={numberOfPages > 5 ? 5 : numberOfPages}
              marginPagesDisplayed={numberOfPages > 5 ? 5 : numberOfPages}
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
  return { ...state.albumReducer, isLoading: false };
}

function mapDispatchToProps(dispatch) {
  const { fetchAlbums } = albumAction;
  return bindActionCreators({ fetchAlbums }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsPage);
