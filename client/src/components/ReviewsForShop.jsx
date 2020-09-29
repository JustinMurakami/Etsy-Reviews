import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsForShop = (props) => {
  const { reviewsForShop, getRating, loading } = props;
  if (loading) {
    return <h2> Loading...</h2>;
  }
  return (
    <div>
      {reviewsForShop.map((review) => (
        <div className="ReviewsListForShop" key={review.id}>
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
            <p id="review-shop-title">Purchased Item: </p>
            <div className="review-shop-pic/description">
              <img id="review-shop-purchasedPic" src={review.purchasedItemPicDog} alt="" />
              <span id="review-shop-description">
                {review.purchasedItemDescription}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ReviewsForShop;
