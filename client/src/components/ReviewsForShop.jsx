import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsForShop = (props) => {
  const { reviewsForShop, getRating } = props;
  const fourReviews = reviewsForShop.slice(0, 4);
  return (
    <div>
      {fourReviews.map((review, index) => (
        <div className="ReviewsListForShop" key={index}>
          <p className="reviews-usertitle">
            <img src={review.userPhoto} className="reviews-userphoto" alt="" />
            <span id="review-username">{review.userName}</span>
            <span id="review-date">{review.reviewDate}</span>
          </p>
          <div className="review-rating-text">
            <div id="review-stars">{getRating(review.reviewRating)}</div>
            <p>
              {review.review}
            </p>
          </div>
          <div>
            <p>Purchased Item: </p>
            <img id="review-shop-purchasedPic" src={review.purchasedItemPicDog} alt="" />
            <p>
              {review.purchasedItemDescription}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ReviewsForShop;
