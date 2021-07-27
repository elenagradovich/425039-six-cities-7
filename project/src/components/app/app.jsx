import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import * as RoutePath from '../../constants/route-pathes';
import { connect } from 'react-redux';
import Spinner from '../spinner/spinner';

function App({ favoriteHotels, authInfo, reviews, nearPlaces, submitReview, isDataLoaded }) {
  if (!isDataLoaded) {
    return (
      <Spinner />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ RoutePath.MAIN } exact>
          <Main authInfo={ authInfo } />
        </Route>
        <Route path={ RoutePath.LOGIN } exact>
          <SignIn authInfo={ authInfo } />
        </Route>
        <Route path={ RoutePath.FAVORITES } exact>
          <Favorites hotels={ favoriteHotels } authInfo={ authInfo } />
        </Route>
        <Route path={ RoutePath.OFFER } exact>
          <Room
            authInfo={ authInfo }
            reviews={ reviews }
            nearPlaces={nearPlaces}
            submitReview={ submitReview }
          />
        </Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  favoriteHotels: PropTypes.array,
  authInfo: PropTypes.object,
  reviews: PropTypes.array,
  nearPlaces: PropTypes.array,
  submitReview: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

export { App };
export default connect(
  mapStateToProps,
  null,
)(App);
