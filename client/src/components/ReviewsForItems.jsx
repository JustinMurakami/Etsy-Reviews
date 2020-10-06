import React from 'react';
import styled from 'styled-components';
import ReviewsModal from './ReviewsModal.jsx'

const ReviewsForItemsContainer = styled.div`
  .ReviewsListForItems {
    padding: 9px;
  }
  #review-style-type {
    font-weight:300;
  }
`;

const ReviewsforItem = (props) => {
  const {
    reviewsForItem, getRating, loading, isOpen, handleModalClick,
    handleClick, handleClickIdItem, correctDate,
  } = props;

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
            <span id="review-date">{correctDate(review.reviewDate)}</span>
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
            <a  className="review-review-pic"  onClick={() => {handleModalClick(); handleClickIdItem(review.id);}} >
              <img className="review-review-pic" src={review.reviewPic} alt="" />
              <ReviewsModal />
            </a>
          </div>
        </div>
      ))}
    </ReviewsForItemsContainer>
  );
};

export default ReviewsforItem;
