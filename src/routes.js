/**
 * Created by hautruong on 6/30/18.
 */
import React from 'react';
import { Route, Switch } from 'react-router';
// Module root components

import Loadable from 'react-loadable';
import { Loading } from './components/Loading/index';

const LoadableApp = Loadable({
  loader: () => import('./App'),
  loading: Loading
});

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
const LoadableArtistPage = Loadable({
  loader: () => import('./containers/ArtistPage'),
  loading: Loading
});
const LoadableChartsPage = Loadable({
  loader: () => import('./containers/ChartsPage'),
  loading: Loading
});

export default (
  <Switch>
    <LoadableApp>
      <Route exact path="/" component={LoadableHomePage} />
      <Route exact path="/albums" component={LoadableAlbumsPage} />
      <Route exact path="/charts" component={LoadableChartsPage} />
      <Route exact path="/genre-artists" component={LoadableGenreArtistsPage} />
      <Route exact path="/artist/:artistName" component={LoadableArtistPage} />
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
      <Route exact path="/song/:name/:id" component={LoadableSongPage} />
    </LoadableApp>
  </Switch>
);
