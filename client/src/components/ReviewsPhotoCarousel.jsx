import React from 'react';
import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import ReviewsModal from './ReviewsModal.jsx'

const ReviewsPhotoCarouselContainer = styled.div`
  padding: 9px;
  .reviews-carousel {
    position: relative;
    display:flex;
    align-content: center;
    overflow:hidden;
    width: 71vw;
  }
  .reviews-carousel-title {
    margin: 0px 0px 12px;
  }

  .reviews-carousel-item {
    padding: 9px;
    transition: .5s;
  }
  .reviews-carousel-pic {
    width:16vw;
    height:16vw;
    cursor:pointer;
    border-radius:10%;
  }

  #reviews-carousel-btn-left {
    font-size: 24px;
    font-color:#222222;
    position: absolute;
    left: 0;
    margin: 0px 0px 0px 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border:none;
    border-radius: 50%;
    outline: none;
    cursor:pointer;
    display: ${(props) => (props.x === 0 ? 'none;' : 'block;')};
  }
  #reviews-carousel-btn-right {
    font-size: 24px;
    font-color:#222222;
    font-weight:100px;
    position: absolute;
    right: 0;
    margin: 0px 10px 0px 0px;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border:none;
    border-radius:50%;
    outline: none;
    cursor:pointer;
    display: ${(props) => (props.x === -3600 ? 'none' : '')};
  }
`;

const ReviewsPhotoCarousel = (props) => {
  const {
    reviewsForItem, handleModalClick, handleClickIdItem, x, goLeft, goRight,
  } = props;

  return (
    <ReviewsPhotoCarouselContainer x={x} className="ReviewsPhotoCarouselContainer">
      <div className="reviews-carousel-title">Photos from reviews</div>
      <div className="reviews-carousel">
        {reviewsForItem.map((review) => (
          <div className="reviews-carousel-item" key={review.id} style={{ transform: `translateX(${x}%)` }}>
            <a className="reviews-carousel-pic"  onClick={() => {handleModalClick(); handleClickIdItem(review.id);}} >
              <img className="reviews-carousel-pic" src={review.reviewPicDog} alt="" />
              <ReviewsModal />
            </a>
          </div>
        ))}
        <button type="button" id="reviews-carousel-btn-left" onClick={goLeft}>
          <FaAngleLeft />
        </button>
        <button
          type="button"
          id="reviews-carousel-btn-right"
          onClick={() => {
            goRight();
          }}
        >
          <FaAngleRight />
        </button>
      </div>

    </ReviewsPhotoCarouselContainer>
  );
};

export default ReviewsPhotoCarousel;
