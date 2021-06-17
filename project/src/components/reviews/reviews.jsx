import React from 'react';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import PropTypes from 'prop-types';

function Reviews ({ reviews, submitReview }) {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <Review review={review} key={review.id}/>)}
      </ul>
      <ReviewForm submitReview={submitReview} />
    </section>
  );
}

Reviews.defaultProps = {
  reviews: [],
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
  submitReview: PropTypes.func.isRequired,
};

export default Reviews;
