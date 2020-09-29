import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsforItem = (props) => {
  const { reviewsForItem } = props;
  const fourReviews = reviewsForItem.slice(0, 4);
  return (
    <div>
      {fourReviews.map((review) => (
        <div className="ReviewsListForItems">
          <p className="reviews-usertitle">
            <img src={review.userPhoto} className="reviews-userphoto" alt="" />
            <span id="review-username">{review.userName}</span>
            <span id="review-date">{review.reviewDate}</span>
          </p>
          <div className="review-rating-text">
            <p id="review-stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
            <p className="review-style">
              Style:
              <span id="review-style-type">
                {review.style}
              </span>
            </p>
            <p>
              {review.review}
            </p>
            <img className="review-review-pic" src={review.reviewPicDog} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsforItem;
