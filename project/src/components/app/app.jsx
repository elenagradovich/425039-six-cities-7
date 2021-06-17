import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import * as RoutePath from '../../constants/route-pathes';

function App({ hotels, favoriteHotels, authInfo, reviews, submitReview }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ RoutePath.MAIN } exact>
          <Main hotels={ hotels } authInfo={ authInfo } />
        </Route>
        <Route path={ RoutePath.LOGIN } exact>
          <SignIn authInfo={ authInfo } />
        </Route>
        <Route path={ RoutePath.FAVORITES } exact>
          <Favorites hotels={ favoriteHotels } authInfo={ authInfo } />
        </Route>
        <Route path={ RoutePath.OFFER } exact>
          <Room hotels={ hotels } authInfo={ authInfo } reviews={ reviews } submitReview={ submitReview }/>
        </Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}


App.defaultProps = {
  hotels: [],
  favoriteHotels: [],
  authInfo: {},
  reviews: [],
};

App.propTypes = {
  hotels: PropTypes.array,
  favoriteHotels: PropTypes.array,
  authInfo: PropTypes.object,
  reviews: PropTypes.array,
  submitReview: PropTypes.func.isRequired,
};

export default App;
