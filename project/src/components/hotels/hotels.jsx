import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

function Hotels ({data}) {
  return(
    <div className="cities__places-list places__list tabs__content">
      {data.map((item) => <PlaceCard data={item} key={item.id}/>)}
    </div>
  );
}

Hotels.defaultProps = {
  data: [],
};

Hotels.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      type: PropTypes.string,
      rating: PropTypes.number,
      isPremium: PropTypes.bool,
      isFavorite: PropTypes.bool,
      price: PropTypes.number,
      previewImage: PropTypes.string,
    }),
  ),
};

export default Hotels;
