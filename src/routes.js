/**
 * Created by hautruong on 6/30/18.
 */
import React from 'react';
import { Route, Switch } from 'react-router';

// Module root components
import UserPage from './containers/UserPage';

import Loadable from 'react-loadable';
import { Loading } from './components/Loading/index';

const LoadableHomePage = Loadable({
  loader: () => import('./containers/HomePage'),
  loading: Loading
});
const LoadableAlbumsPage = Loadable({
  loader: () => import('./containers/AlbumsPage'),
  loading: Loading
});
const LoadablePlaylistPage = Loadable({
  loader: () => import('./containers/PlaylistPage'),
  loading: Loading
});
const LoadableSongPage = Loadable({
  loader: () => import('./containers/SongPage'),
  loading: Loading
});
const LoadableGenreArtistsPage = Loadable({
  loader: () => import('./containers/GenreArtistsPage'),
  loading: Loading
});
const LoadableChartsPage = Loadable({
  loader: () => import('./containers/ChartsPage'),
  loading: Loading
});

export default (
  <Switch>
    <Route exact path="/user-detail" component={UserPage} />
    <Route exact path="/" component={LoadableHomePage} />
    <Route exact path="/albums" component={LoadableAlbumsPage} />
    <Route exact path="/charts" component={LoadableChartsPage} />
    <Route exact path="/genre-artists" component={LoadableGenreArtistsPage} />
    <Route
      exact
      path="/genre-artists/:genre/:id"
      component={LoadableGenreArtistsPage}
    />
    <Route
      exact
      path="/album/playlist/:title/:id"
      component={LoadablePlaylistPage}
    />
    <Route exact path="/song/:title/:id" component={LoadableSongPage} />
  </Switch>
);
