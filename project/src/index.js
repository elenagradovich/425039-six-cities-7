import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './store/reducer';
import { favoriteHotels } from './mocks/hotels';
import { authInfo } from './mocks/auth-info';
import { reviews, submitReview } from './mocks/reviews';
import { nearPlaces } from './mocks/near-places';
import thunk  from 'redux-thunk';
import { loadHotels } from './store/actions';
import { createAPI } from './services/api';

const api = createAPI();

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(loadHotels());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        favoriteHotels={favoriteHotels}
        authInfo={authInfo}
        reviews={reviews}
        nearPlaces={nearPlaces}
        submitReview={submitReview}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
