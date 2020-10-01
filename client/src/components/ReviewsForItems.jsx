import React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const ReviewsForItemsContainer = styled.div`
  .ReviewsListForItems {
    padding: 9px;
  }
  .reviews-userphoto {
    vertical-align: middle;
    margin: 0px 12px 0px 0px;
    border-radius: 50%;
    overflow: hidden;
    height: 36px;
    width: 36px;
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
  .review-rating-pic {
    display:flex;
    justify-content:flex-start;
  }
  .review-rating-text {
    justify-self: space-around;
    flex-direction:row;
    align-self: flex-start;
    padding: 0px 0px 0px 48px;
  }
  #review-stars {
    font-size: 18px;
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
    justify-content: flex-start;
    font-size: 16px;
    padding: 0px 30px 0px 0px;
    margin: 0px 0px;
  }
  .review-review-pic {
    justify-content: flex-end;
    vertical-align: middle;
    height: 14vw;
    width: 14vw;
    border-radius: 10%;
  }
`;

const ReviewsforItem = (props) => {
  const { reviewsForItem, getRating, loading } = props;

  if (loading) {
    return <h2> Loading...</h2>;
  }
  return (
    <ReviewsForItemsContainer className="ReviewsForItemsContainer">
      {reviewsForItem.map((review) => (
        <div className="ReviewsListForItems" key={review.id}>
          <p className="reviews-usertitle">
            <img src={review.userPhoto} className="reviews-userphoto" alt="" />
            <span id="review-username">{review.userName}</span>
            <span id="review-date">{review.reviewDate}</span>
          </p>
          <div className="review-rating-pic">
            <div className="review-rating-text">
              <div id="review-stars">{getRating(review.reviewRating)}</div>
              <p className="review-style">
                Style: <span id="review-style-type">{review.style}</span>
              </p>
              <p id="review-review-text">
                {review.review}
              </p>
            </div>
            <img className="review-review-pic" src={review.reviewPicDog} alt="" />
          </div>

        </div>
      ))}
    </ReviewsForItemsContainer>
  );
};

export default ReviewsforItem;
