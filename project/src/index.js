import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { hotels, favoriteHotels } from './mocks/hotels';
import { authInfo } from './mocks/auth-info';
import { reviews, submitReview } from './mocks/reviews';
import { nearPlaces } from './mocks/near-places';

ReactDOM.render(
  <React.StrictMode>
    <App
      hotels={hotels}
      favoriteHotels={favoriteHotels}
      authInfo={authInfo}
      reviews={reviews}
      nearPlaces={nearPlaces}
      submitReview={submitReview}
    />
  </React.StrictMode>,
  document.getElementById('root'));
