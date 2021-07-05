import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getOfferLink } from '../../constants/route-pathes';
import { connect } from 'react-redux';
import { updateCity, updateOffersOfCity } from '../../store/actions';

function PlaceCard ({ hotel, titleHoverHandler, onUpdateCity, onUpdateOffersOfCity }) {
  const {
    id,
    title,
    type,
    rating,
    isPremium,
    isFavorite,
    price,
    previewImage,
    city,
  } = hotel;

  const { name } = city;
  return (
    <article
      className="cities__place-card place-card"
      onMouseOut={titleHoverHandler}
      onMouseOver={() => titleHoverHandler(hotel)}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place"></img>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${isFavorite && '--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 10}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={getOfferLink(id)} onClick={() => {
            onUpdateCity(name.toUpperCase());
            onUpdateOffersOfCity(name.toUpperCase());
          }}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.defaultProps = {
  hotel: {},
};

PlaceCard.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    rating: PropTypes.number,
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
    price: PropTypes.number,
    previewImage: PropTypes.string,
    city: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  titleHoverHandler: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func,
  onUpdateOffersOfCity: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onUpdateCity(city) {
    dispatch(updateCity(city));
  },
  onUpdateOffersOfCity(city) {
    dispatch(updateOffersOfCity(city));
  },
});

export { PlaceCard };

export default connect(
  null,
  mapDispatchToProps,
)(PlaceCard);
