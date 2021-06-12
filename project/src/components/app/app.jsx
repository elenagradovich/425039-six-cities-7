import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import * as RoutePath from '../../constants/route-pathes';

function App({hotels, favoriteHotels, authInfo}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={RoutePath.MAIN} exact>
          <Main data={hotels} authInfo={authInfo} />
        </Route>
        <Route path={RoutePath.LOGIN} exact>
          <SignIn authInfo={authInfo} />
        </Route>
        <Route path={RoutePath.FAVORITES} exact>
          <Favorites data={favoriteHotels} authInfo={authInfo} />
        </Route>
        <Route path={RoutePath.OFFER} exact>
          <Room data={hotels[0]} authInfo={authInfo} />
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
};

App.propTypes = {
  hotels: PropTypes.array,
  favoriteHotels: PropTypes.array,
  authInfo: PropTypes.object,
};

export default App;
