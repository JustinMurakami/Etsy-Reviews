import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsForShop = (props) => {
  const { reviewsForShop } = props;
  const fourReviews = reviewsForShop.slice(0, 4);
  return (
    <div>
      {fourReviews.map((review) => (
        <div className="ReviewsListForShop">
          <p className="reviews-usertitle">
            <img src={review.userPhoto} className="reviews-userphoto" alt="" />
            <span id="review-username">{review.userName}</span>
            <span id="review-date">{review.reviewDate}</span>
          </p>
          <div className="review-rating-text">
            <p id="review-stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
            <p>
              {review.review}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ReviewsForShop;
