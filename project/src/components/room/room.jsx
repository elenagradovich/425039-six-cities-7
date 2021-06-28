import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Reviews from '../reviews/reviews';
import NearPlaces from '../near-places/near-places';
import Map from '../map/map';

function Room({ hotels, authInfo, reviews, submitReview, nearPlaces }) {
  const { id } = useParams();
  const hotel = hotels.find((item) => item.id === +id);

  const {
    rating,
    images,
    isPremium,
    isFavorite,
    price,
    goods,
    host = {},
    description,
    maxAdults,
    bedrooms,
    type,
    city = '',
  } = hotel;

  const { name: cityName } = city;
  const { avatarUrl, isPro, name } = host;

  return (
    <div className="page">
      <Header authInfo={authInfo}/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images && images.map((source) => (
                <div className="property__image-wrapper" key={source}>
                  <img className="property__image" src={source} alt="Photo studio"></img>
                </div>))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className={`property__bookmark-button ${isFavorite && 'property__bookmark-button--active'} button`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use href="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 10}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {`${bedrooms} Bedrooms`}
                </li>
                <li className="property__feature property__feature--adults">
                  {`Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods && goods.map((item) => <li className="property__inside-item" key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar"></img>
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <Reviews reviews={reviews} submitReview={submitReview}/>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={[...nearPlaces, hotel]}
              activeCity={cityName && cityName.toUpperCase()}
              currentOfferId={+id}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaces places={nearPlaces} />
          </section>
        </div>
      </main>
    </div>
  );
}

Room.defaultProps = {
  hotels: {},
  authInfo: {},
  reviews: [],
  nearPlaces: [],
};

Room.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number,
      images: PropTypes.arrayOf(PropTypes.string),
      isPremium: PropTypes.bool,
      isFavorite: PropTypes.bool,
      price: PropTypes.number,
      goods: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string,
      maxAdults: PropTypes.number,
      bedrooms: PropTypes.number,
      type: PropTypes.string,
      host: PropTypes.shape({
        avatarUrl: PropTypes.string,
        isPro: PropTypes.bool,
        name: PropTypes.string,
      }),
    }),
  ),
  authInfo: PropTypes.object,
  reviews: PropTypes.array,
  nearPlaces: PropTypes.array,
  submitReview: PropTypes.func.isRequired,
};

export default Room;
