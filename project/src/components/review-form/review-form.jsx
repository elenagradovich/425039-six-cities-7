import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';

const getReviewRatingElements = (clickHandler) => {
  const ratingValues = ['terribly', 'badly', 'not bad', 'good', 'perfect'];
  return ratingValues.map((item, index) => {
    const newIndex = ratingValues.length - index;
    const element = ratingValues[newIndex - 1];
    return (
      <Fragment key={element}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value={newIndex}
          id={`${newIndex}-stars`}
          type="radio"
          onClick={clickHandler}
        >
        </input>
        <label htmlFor={`${newIndex}-stars`} className="reviews__rating-label form__rating-label" title={element}>
          <svg className="form__star-image" width="37" height="33">
            <use href="#icon-star"></use>
          </svg>
        </label>
      </Fragment>
    );
  });
};

function ReviewForm ({ submitReview }) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState(null);

  const clickRatingHandler = (e) => {
    setRating(e.target.value);
  };

  const changeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const submitClickHandler = (e) => {
    e.preventDefault();
    submitReview(
      {
        comment,
        rating,
      },
    );
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getReviewRatingElements(clickRatingHandler)}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={changeCommentHandler}
      >
        {comment}
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
          onClick={submitClickHandler}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

ReviewForm.propTypes = {
  submitReview: PropTypes.func.isRequired,
};

export default ReviewForm;
