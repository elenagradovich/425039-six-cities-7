import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hotels from '../hotels/hotels';
import Header from '../header/header';
import Map from '../map/map';
import Sorting from '../sorting/sorting';
import CitiesList from '../cities-list/cities-list';
import { Cities } from '../../constants/map';
import { connect } from 'react-redux';

function Main({ cityOffers, city }) {
  const [activeCardId, setActiveCardId] = useState(null);
  const [hotelsCount, setHotelsCount] = useState(cityOffers.length);
  const [sortType, setSortType] = useState('POPULAR');
  useEffect(() => {
    setActiveCardId(null);
  }, [city]);

  useEffect(() => {
    setHotelsCount(cityOffers.length);
  }, [cityOffers]);

  return (
    <Fragment>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{hotelsCount} {hotelsCount === 1 ? 'place' : 'places'} to stay in {Cities[city].name}</b>
              <Sorting sortType={sortType} setSortType={setSortType} />
              <Hotels setActiveCardId={setActiveCardId} sortType={sortType} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  currentOfferId={activeCardId}
                  cityOffers={cityOffers}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  city: state.city,
  cityOffers: state.cityOffers,
});

Main.propTypes = {
  cityOffers: PropTypes.array,
  city: PropTypes.string,
};

export { Main };
export default connect(
  mapStateToProps,
  null,
)(Main);
