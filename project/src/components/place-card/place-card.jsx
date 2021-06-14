import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PlaceCard ({hotel}) {
  const {
    title,
    type,
    rating,
    isPremium,
    isFavorite,
    price,
    previewImage,
  } = hotel;
  return (
    <article className="cities__place-card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link href="#">
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
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 10}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>s
        <h2 className="place-card__name">
          <Link to="#">{title}</Link>
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
  }),
};

export default PlaceCard;
