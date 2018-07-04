/**
 * Created by hautruong on 6/30/18.
 */
import React from 'react';
import { Route, Switch } from 'react-router';

// Module root components
import Home from './containers/HomePage';
import UserPage from './containers/UserPage';
import AlbumsPage from './containers/AlbumsPage';
import PlaylistPage from './containers/PlaylistPage';
import ChartsPage from './containers/ChartsPage';
import ArtistsPage from './containers/ArtistsPage';
import SongPage from './containers/SongPage';

export default (
  <Switch>
    <Route exact path="/user-detail" component={UserPage} />
    <Route exact path="/" component={Home} />
    <Route exact path="/albums" component={AlbumsPage} />
    <Route exact path="/charts" component={ChartsPage} />
    <Route exact path="/artists" component={ArtistsPage} />
    <Route exact path="/album/playlist/:title/:id" component={PlaylistPage} />
    <Route exact path="/song/:title/:id" component={SongPage} />
  </Switch>
);
