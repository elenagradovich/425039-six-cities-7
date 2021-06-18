import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const DateTypes = {
  MONTH_YEAR: 'month_year',
  YEAR_MONTH_DAY: 'year_month_day',
};

const getDateInFormat = (date, type) => {
  switch (type) {
    case DateTypes.MONTH_YEAR:
      return dayjs(date).format('MMMM YYYY');
    case DateTypes.YEAR_MONTH_DAY:
      return dayjs(date).format('YYYY-MM-DD');
    default:
      return dayjs(date).format('YYYY-MM-DD');
  }
};

function Review ({ review }) {
  const { comment, date, rating, user } = review;
  const { avatarUrl, name } = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"></img>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 10}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={getDateInFormat(date, DateTypes.YEAR_MONTH_DAY)}>{getDateInFormat(date, DateTypes.MONTH_YEAR)}</time>
      </div>
    </li>
  );
}

Review.defaultProps = {
  review: {},
};

Review.propTypes = {
  review: PropTypes.shape({
    comment: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string,
      id: PropTypes.number,
      isPro: PropTypes.bool,
      name: PropTypes.string,
    }),
  }),
};

export default Review;
