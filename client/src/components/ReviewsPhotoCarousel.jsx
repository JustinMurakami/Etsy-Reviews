import React from 'react';
import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const ReviewsPhotoCarouselStyling = styled.div`
  .reviews-carousel {
    flex-flow: row;
    position: relative;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display:flex;
    align-content: center;
    overflow:hidden;
  }
  .reviews-carousel-title {
    margin: 0px 0px 12px;
  }

  .reviews-carousel-item {
    width: 154px;
    height: 154px;
    padding: 9px;
    transition: .5s;
    overflow: hidden;
  }
  .reviews-carousel-image {
    height:100%;
    width:auto;
    cursor:pointer;
  }

  #reviews-carousel-btn-left {
    position: absolute;
    left: 0;
    top: 7%;
    transform: translateY(-50%);
    background-color: white;
    border-radius:50%;
    outline: none;
    cursor:pointer;
    font-size: 2vw;

  }
  #reviews-carousel-btn-right {
    position: absolute;
    right: 0;
    top: 7%;
    transform: translateY(-50%);
    background-color: white;
    border-radius:50%;
    outline: none;
    cursor:pointer;
    font-size: 2vw;
  }
`;

class ReviewsPhotoCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
    };
  }

  render() {
    const { reviewsForShop } = this.props;
    const { x } = this.state;
    const photosArr = [];
    reviewsForShop.map((review) => (
      photosArr.push(review.purchasedItemPicDog)
    ));
    reviewsForShop.map((review) => (
      photosArr.push(review.purchasedItemPicCat)
    ));
    const photosUsed = photosArr.slice(0, 25);
    const goLeft = () => {
      if (x === 0) {
        this.setState({
          x: -100 * (photosUsed.length - 1),
        });
      } else {
        this.setState({
          x: x + 100,
        });
      }
    };
    const goRight = () => {
      if (x === -100 * (photosUsed.length - 1)) {
        this.setState({
          x: 0,
        });
      } else {
        this.setState({
          x: x - 100,
        });
      }
    };
    return (
      <ReviewsPhotoCarouselStyling>
        <div className="reviews-carousel-title">Photos from reviews</div>
        <div className="reviews-carousel">
          {photosUsed.map((item, index) => {
            return (
              <div className="reviews-carousel-item" key={index} style={{ transform: `translateX(${this.state.x}%)` }}>
                <img className="reviews-carousel-image" src={item} alt="" />
              </div>
            )
          })}
          <button type="button" id="reviews-carousel-btn-left" onClick={goLeft}>
            <FaAngleLeft />
          </button>
          <button type="button" id="reviews-carousel-btn-right" onClick={goRight}>
            <FaAngleRight />
          </button>
        </div>

      </ReviewsPhotoCarouselStyling>
    );
  }
};

export default ReviewsPhotoCarousel;
