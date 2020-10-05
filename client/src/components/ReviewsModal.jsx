import React from 'react';
import styled from 'styled-components';

const ReviewsModalContainer = styled.div`
  position:fixed;
  height: 600px;
  width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  background-color: white;
  z-index: 5;
  border-radius: 10%;
  display: flex;
  flex-direction:row;
  overflow: hidden;

  .reviews-popup-info {
    padding: 18px 18px 18px 18px;
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
  .reviews-popup-image {
    height:100%;
    width:60%;
  }
`;

const OverlayStyle = styled.div`
  position:fixed;
  pointer-events:${(props) => (props.isOpen === true ? 'all' : 'none')};
  opacity: ${(props) => (props.isOpen === true ? '1' : '0')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 1;
`;

const ReviewsModal = (props) => {
  const { isOpen, handleModalClick, currentReview, getRating, correctDate} = props;
  if (!isOpen) return null;
  return (
    <div>
      <ReviewsModalContainer>
        <img className="reviews-popup-image" src={currentReview.reviewPicDog} alt="" />
        <div className="reviews-popup-info">
          <div className="ReviewsListForItems" key={currentReview.id}>
            <p className="reviews-usertitle">
              <img src={currentReview.userPhoto} className="reviews-userphoto" alt="" />
              <span id="review-username">{currentReview.userName}</span>
              <span id="review-date">{correctDate(currentReview.reviewDate)}</span>
            </p>
            <div className="review-rating-pic">
              <div className="review-rating-text">
                <div id="review-stars">{getRating(currentReview.reviewRating)}</div>
                <p id="review-review-text">
                  {currentReview.review}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ReviewsModalContainer>
      <OverlayStyle isOpen={isOpen} onClick={handleModalClick} />
    </div>
  );
};

export default ReviewsModal;
