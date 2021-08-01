import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import { connect } from 'react-redux';
import { sortOffers } from '../../utils/common';

function Hotels ({ cityOffers, setActiveCardId, sortType }) {
  const titleHoverHandler = ({id}) => {
    setActiveCardId(id);
  };

  const sortedHotels = sortOffers(cityOffers, sortType);

  return(
    <div className="cities__places-list places__list tabs__content">
      {sortedHotels.map((item) => <PlaceCard hotel={item} titleHoverHandler={titleHoverHandler} key={item.id} />)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityOffers: state.cityOffers,
});

Hotels.defaultProps = {
  cityOffers: [],
};

Hotels.propTypes = {
  cityOffers: PropTypes.arrayOf(
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
  sortType: PropTypes.string,
};

export { Hotels };
export default connect(
  mapStateToProps,
  null,
)(Hotels);
