import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './store/reducer';
import thunk  from 'redux-thunk';
import {loadHotels, checkAuth, requireAuthorization, redirectToRoute} from './store/actions';
import { createAPI } from './services/api';
import { AuthorizationStatus } from './constants/authorization-status';
import { NOT_FOUND } from './constants/route-pathes';
import { redirect } from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
  ()  => store.dispatch(redirectToRoute(NOT_FOUND)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

store.dispatch(checkAuth());
store.dispatch(loadHotels());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
