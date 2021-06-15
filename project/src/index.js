import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { hotels, favoriteHotels } from './mocks/hotels';
import { authInfo } from './mocks/auth-info';

ReactDOM.render(
  <React.StrictMode>
    <App hotels={hotels} favoriteHotels={favoriteHotels} authInfo={authInfo}/>
  </React.StrictMode>,
  document.getElementById('root'));
