import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const ReviewsForItemsStyling = styled.div`
  .ReviewsListForItems {
    padding: 9px;
  }
  .reviews-userphoto {
    vertical-align: middle;
    margin: 0px 12px 0px 0px;
    border-radius: 50%;
    overflow: hidden;
    height: 10%;
    width: 4%;
  }
  .reviews-usertitle {
    align-self: center;
    margin: 0px 0px 6px;
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
  .review-style {
    font-size: 13px;
    line-height: 18px;
    font-weight: 500;
    letter-spacing: .1px;
    margin: 0px 0px 12px;
  }
  #review-style-type {
    font-weight:300;
  }
  #review-review-text {
    font-size: 16px;
    padding: 0px 30px 0px 0px;
    margin: 0px 0px;
  }
  .review-review-pic {
    display: inline-flex;
    vertical-align: middle;
    height: 128px;
    width: 128px;
  }
`;

const ReviewsforItem = (props) => {
  const { reviewsForItem, getRating, loading } = props;

  if (loading) {
    return <h2> Loading...</h2>;
  }
  return (
    <ReviewsForItemsStyling>
      {reviewsForItem.map((review) => (
        <div className="ReviewsListForItems" key={review.id}>
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
    </ReviewsForItemsStyling>
  );
};

export default ReviewsforItem;