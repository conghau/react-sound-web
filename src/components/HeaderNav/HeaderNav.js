import React from 'react';
import { Link } from '../Link';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import SearchMenu from '../SearchMenu';
import './_HeaderNav.scss';
import loginImg from '../../themes/assets/login.svg';
import { searchApi } from '../../api/searchApi';

class HeaderNav extends React.PureComponent {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor() {
    super();
    this.state = { term: '', searchResult: {} };
    this.debounceSearch = debounce(this.search, 300);
  }

  search(term) {
    console.log('search');
    // let resp = songAction.searchMedia(term);
    searchApi
      .searchMedia(term)
      .then(resp => {
        let { data } = resp;
        if (this.state.term.length) {
          this.setState({ searchResult: data });
        }
        return data;
      })
      .catch(err => {
        throw err;
      });
  }

  handleOnChange = e => {
    let term = e.target.value;
    if (!term) return this.setState({ term: '' });
    this.setState({ term });
    term = term.replace(/\s+/g, '+');
    return this.debounceSearch(term);
  };

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState);
    if (this.state.searchResult.result && !nextState.term.length) {
      this.setState({ searchResult: {} });
    }
  }

  clearSearchResult = () => {
    this.setState({ term: '', searchResult: {} });
  };

  logOut(e) {
    e.preventDefault();
    // this.props.dispatch(clearUserPlaylist());
    // this.props.dispatch(logout());
    this.context.router.push('/');
  }

  render() {
    const { authenticated, user } = this.props.auth || {};

    return (
      <nav className="header_nav">
        <div className="header_nav__logo">
          <Link to="/">iSound</Link>
        </div>
        <div className="header_nav__searchBar">
          <div className="header_nav__search-wrapper">
            <i className="ion-search" />
            <input
              type="text"
              placeholder="search for songs"
              value={this.state.term}
              onChange={this.handleOnChange}
            />
          </div>
          {}
          {this.state.searchResult.result && (
            <SearchMenu
              searchResult={this.state.searchResult}
              clearSearchResult={this.clearSearchResult}
            />
          )}
        </div>
        <div className="header_nav__navRight">
          <ul className="header_nav__nav-menu">
            <li>
              <Link
                to="/"
                className="animating_link"
                activeClassName="nav-menu-link-active"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/charts"
                className="animating_link"
                activeClassName="nav-menu-link-active"
              >
                Charts
              </Link>
            </li>
            <li>
              <Link
                to="/albums"
                className="animating_link"
                activeClassName="nav-menu-link-active"
              >
                Albums
              </Link>
            </li>
            <li>
              <Link
                to="/genre-artists"
                className="animating_link"
                activeClassName="nav-menu-link-active"
              >
                Artists
              </Link>
            </li>
          </ul>
        </div>
        {!authenticated ? (
          <div className="header_nav__auth-btns">
            <Link to="/login" className="animating_link">
              <img src={loginImg} alt={'Login'} />
              Log In
            </Link>
            <Link to="/signup" className="animating_link">
              Sign Up
            </Link>
          </div>
        ) : (
          <div className="user">
            <Link
              to={`/user/${user.username}`}
              className="animating_link ellipsis"
            >
              {user.username}
            </Link>
            <a
              title="Log Out"
              onClick={this.logOut.bind(this)}
              className="animating_link"
            >
              <img src="/svg/sign-out-option.svg" alt="sign-out" />
            </a>
          </div>
        )}
      </nav>
    );
  }
}

HeaderNav.propTypes = {
  auth: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired
  })
  // dispatch: PropTypes.func.isRequired
};

export default HeaderNav;
