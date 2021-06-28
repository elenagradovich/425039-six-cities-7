import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

function Hotels ({ hotels, setActiveCardId }) {

  const titleHoverHandler = ({id}) => {
    setActiveCardId(id);
  };

  return(
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((item) => <PlaceCard hotel={item} titleHoverHandler={titleHoverHandler} key={item.id} />)}
    </div>
  );
}

Hotels.defaultProps = {
  hotels: [],
};

Hotels.propTypes = {
  hotels: PropTypes.arrayOf(
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
  setActiveCardId: PropTypes.func,
};

export default Hotels;
