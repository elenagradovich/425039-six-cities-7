import React from 'react';
import PropTypes from 'prop-types';
import {MAIN} from '../../constants/route-pathes';
import {Link} from 'react-router-dom';
import PlaceCardFavorite from '../place-card-favorite/place-card-favorite';
import { getFavoriteCards } from '../../utils/common';

function Favorites (props) {
  const {data, header} = props;
  const isEmpty = !(data && data.length !== 0);
  const hotels = !isEmpty ? getFavoriteCards(data) : [];

  return (
    <div className={`page ${isEmpty && 'pages--favorites-empty'}`}>
      {header}
      <main className={`page__main page__main--favorites ${isEmpty && 'page__main--favorites-empty'}`}>
        <div className="page__favorites-container container">
          {!isEmpty && (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {[...hotels.keys()].map((place) => {
                  place = `${place[0].toUpperCase()}${place.slice(1)}`;
                  return (
                    <li className="favorites__locations-items" key={place}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link" to="#">
                            <span>{place}</span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {hotels.get(place).map((hotel) => <PlaceCardFavorite data={hotel} key={hotel.id}/>)}
                      </div>
                    </li>);
                })}
              </ul>
            </section>)}
          {isEmpty &&
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
        </Link>
      </footer>
    </div>
  );
}

Favorites.defaultProps = {
  data: [],
  header: {},
};

Favorites.propTypes = {
  data: PropTypes.array,
  header: PropTypes.object,
};

export default Favorites;
