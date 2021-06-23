import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hotels from '../hotels/hotels';
import Header from '../header/header';
import Map from '../map/map';
import { Link } from 'react-router-dom';
import { Cities } from '../../constants/map';
import { getHotelsOfCity } from '../../utils/common';

const getCitiesLinks = (activeCity, setActiveCity) => (Object.keys(Cities).map((key) => (
  <li className="locations__item" key={key}>
    <Link
      className={`locations__item-link tabs__item ${activeCity === key ? 'tabs__item--active' : ''}`}
      to={'#'}
      onClick={() => setActiveCity(key)}
    >
      <span>{ Cities[key] }</span>
    </Link>
  </li>),
)
);

function Main({ hotels, authInfo }) {
  const [activeCity, setActiveCity] = useState(Object.keys(Cities)[0]);
  const [activeCardId, setActiveCardId] = useState(null);
  const [hotelsOfCity, setHotelsOfCity] = useState(getHotelsOfCity(hotels, activeCity));
  const [hotelsCount, setHotelsCount] = useState(hotelsOfCity.length);

  useEffect(() => {
    setHotelsOfCity(getHotelsOfCity(hotels, activeCity));
    setActiveCardId(null);
  }, [activeCity]);

  useEffect(() => {
    setHotelsCount(hotelsOfCity.length);
  }, [hotelsOfCity]);

  return (
    <Fragment>
      <Header authInfo={authInfo}/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {getCitiesLinks(activeCity, setActiveCity)}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{hotelsCount} {hotelsCount === 1 ? 'place' : 'places'} to stay in {Cities[activeCity]}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0"> Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use href="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <Hotels hotels={hotelsOfCity} setActiveCardId={setActiveCardId} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  hotels={hotelsOfCity}
                  activeCity={activeCity}
                  currentPlaceId={activeCardId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

Main.defaultProps = {
  hotels: [],
  authInfo: {},
};

Main.propTypes = {
  hotels: PropTypes.array,
  authInfo: PropTypes.object,
};

export default Main;
