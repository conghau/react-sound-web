/**
 * Created by hautruong on 6/30/18.
 */
import React from 'react';
import './scss/_HeaderNav.scss';
import imgLoginSvg from './assets/login.svg';

export const HeaderNav = () => {
  return (
    <nav className="header_nav">
      <div className="header_nav__logo">
        <a href="/">Echo</a>
      </div>
      <div className="header_nav__searchBar">
        <div className="header_nav__search-wrapper">
          <i className="ion-search" />
          <input type="text" placeholder="search for songs" />
        </div>
      </div>
      <div className="header_nav__navRight">
        <ul className="header_nav__nav-menu">
          <li>
            <a className="animating_link nav-menu-link-active" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="animating_link" href="/charts">
              Charts
            </a>
          </li>
          <li>
            <a className="animating_link" href="/albums">
              Albums
            </a>
          </li>
          <li>
            <a className="animating_link" href="/artists">
              Artists
            </a>
          </li>
        </ul>
      </div>
      <div className="header_nav__auth-btns">
        <a className="animating_link" href="/login">
          <img src={imgLoginSvg} />LogIn
        </a>
        <a className="animating_link" href="/signup">
          Sign Up
        </a>
      </div>
    </nav>
  );
};
