import React from 'react';
import { Cities } from '../../constants/map';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCity, updateOffersOfCity } from '../../store/actions';
import PropTypes from 'prop-types';

const getCitiesLinks = (activeCity, updateData) => (Object.keys(Cities).map((key) => (
  <li className="locations__item" key={key}>
    <Link
      className={`locations__item-link tabs__item ${activeCity === key ? 'tabs__item--active' : ''}`}
      to={'#'}
      onClick={() => updateData(key)}
    >
      <span>{ Cities[key] }</span>
    </Link>
  </li>),
));

function CitiesList ({ city: activeCity, onUpdateCity, onUpdateOffersOfCity }) {
  const updateData = (city) => {
    onUpdateCity(city);
    onUpdateOffersOfCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {getCitiesLinks(activeCity, updateData)}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateCity(city) {
    dispatch(updateCity(city));
  },
  onUpdateOffersOfCity(city) {
    dispatch(updateOffersOfCity(city));
  },
});

CitiesList.propTypes = {
  city: PropTypes.string,
  onUpdateCity: PropTypes.func,
  onUpdateOffersOfCity: PropTypes.func,
};

export { CitiesList };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CitiesList);

