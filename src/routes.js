/**
 * Created by hautruong on 6/30/18.
 */
import React from 'react';
import {Route, Switch} from 'react-router';

// Module root components
import Home from './containers/HomePage';
import UserPage from './containers/UserPage';

export default (
    <Switch>
        <Route exact path="/user-detail" component={UserPage}/>
        <Route exact path="/" component={Home}/>
    </Switch>
);