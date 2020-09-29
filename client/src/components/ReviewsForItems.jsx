import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsforItem = (props) => {
  const { reviewsForItem, getRating } = props;
  const fourReviews = reviewsForItem.slice(0, 4);
  return (
    <div>
      {fourReviews.map((review, index) => (
        <div className="ReviewsListForItems" key={index}>
          <p className="reviews-usertitle">
            <img src={review.userPhoto} className="reviews-userphoto" alt="" />
            <span id="review-username">{review.userName}</span>
            <span id="review-date">{review.reviewDate}</span>
          </p>
          <div className="review-rating-text">
            <div id="review-stars">{getRating(review.reviewRating)}</div>
            <p className="review-style">
              Style:
              <span id="review-style-type">
                {review.style}
              </span>
            </p>
            <p id="review-review-text">
              {review.review}
            </p>
            <div>
              <img className="review-review-pic" src={review.reviewPicDog} alt="" />
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ReviewsforItem;
