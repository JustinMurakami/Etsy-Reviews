import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const ReviewsForShopStyling = styled.div`
  .ReviewsListForShop {
    padding: 9px;
    margin: 0px 0px 24px;
  }
  .reviews-usertitle {
    align-self: center;
    margin: 0px 0px 6px;
  }
  .reviews-userphoto {
    vertical-align: middle;
    margin: 0px 12px 0px 0px;
    border-radius: 50%;
    overflow: hidden;
    height: 10%;
    width: 4%;
  }
  #review-username {
    font-size: 13px;
    line-height: 18px;
    margin: 0px 6px 0px 0px;
    color: #595959;
    text-decoration: underline;
    transition: opacity 200ms ease-out;
  }
  #review-date {
    vertical-align: middle;
    font-size: 13px;
    line-height: 18px;
    color: #595959;
  }
  .review-rating-text {
    justify-self: space-around;
    flex-direction:row;
    align-self: flex-start;
    padding: 0px 0px 0px 48px;
  }
  #review-stars {
    font-size: 14px;
    margin: 0px 0px 6px;
  }
  #review-shop-title {
    font-size: 13px;
    line-height: 18px;
    margin: 0px 6px 0px 0px;
    color: #595959;
  }
  #review-shop-purchasedPic {
    display:inline-flex;
    vertical-align: middle;
    height:10%;
    width:4%;
  }
  #review-shop-description {
    display:inline-flex;
    vertical-align: middle;
    font-size: 13px;
    line-height: 18px;
    margin: 0px 6px 0px 0px;
    color: #595959;
    text-decoration: underline;
    transition: opacity 200ms ease-out;
  }
`;

const ReviewsForShop = (props) => {
  const { reviewsForShop, getRating, loading } = props;
  if (loading) {
    return <h2> Loading...</h2>;
  }
  return (
    <ReviewsForShopStyling>
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
    </ReviewsForShopStyling>
  );
};
export default ReviewsForShop;
