import React from 'react';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../private/private-route';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import * as RoutePath from '../../constants/route-pathes';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner';
import { isCheckedAuth } from '../../utils/common';
import browserHistory from '../../history/browser-history';

function App({ isDataLoaded, authorizationStatus }) {
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Spinner />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route path={ RoutePath.MAIN } exact component={ Main } />
        <Route path={ RoutePath.LOGIN } exact component={ SignIn } />
        <Route path={ RoutePath.OFFER } exact component={ Room } />
        <Route path={ RoutePath.NOT_FOUND } exact component={ NotFound } />
        <PrivateRoute
          render={() => <Favorites />}
          path={ RoutePath.FAVORITES }
          exact
        />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

export { App };
export default connect(
  mapStateToProps,
  null,
)(App);
