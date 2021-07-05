import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore } from 'redux'; //инициализируем хранилище
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './store/reducer';
import { hotels, favoriteHotels } from './mocks/hotels';
import { authInfo } from './mocks/auth-info';
import { reviews, submitReview } from './mocks/reviews';
import { nearPlaces } from './mocks/near-places';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        hotels={hotels}
        favoriteHotels={favoriteHotels}
        authInfo={authInfo}
        reviews={reviews}
        nearPlaces={nearPlaces}
        submitReview={submitReview}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
