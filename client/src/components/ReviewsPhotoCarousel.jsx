import React from 'react';
import styled from 'styled-components';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

const ReviewsPhotoCarouselContainer = styled.div`
  padding: 9px;
  .reviews-carousel {
    flex-flow: row;
    position: relative;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display:flex;
    align-content: center;
    overflow:hidden;
    width: 70vw;
  }
  .reviews-carousel-title {
    margin: 0px 0px 12px;
  }

  .reviews-carousel-item {
    padding: 9px;
    transition: .5s;
  }
  .reviews-carousel-image {
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
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border:none;
    border-radius: 50%;
    outline: none;
    cursor:pointer;
  }
  #reviews-carousel-btn-right {
    font-size: 24px;
    font-color:#222222;
    font-weight:100px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: white;
    border:none;
    border-radius:50%;
    outline: none;
    cursor:pointer;
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
    const { reviewsForItem } = this.props;
    const { x } = this.state;

    const photosArr = [];
    reviewsForItem.map((review) => (
      photosArr.push(review.reviewPicDog)
    ));

    const goLeft = () => {
      if (x === 0) {
        this.setState({
          x: -400 * (photosArr.length - 1),
        });
      } else {
        this.setState({
          x: x + 400,
        });
      }
    };
    const goRight = () => {
      if (x === -400 * (photosArr.length - 1)) {
        this.setState({
          x: 0,
        });
      } else {
        this.setState({
          x: x - 400,
        });
      }
    };

    return (
      <ReviewsPhotoCarouselContainer className="ReviewsPhotoCarouselContainer">
        <div className="reviews-carousel-title">Photos from reviews</div>
        <div className="reviews-carousel">
          {photosArr.map((item, index) => (
            <div className="reviews-carousel-item" key={index} style={{ transform: `translateX(${this.state.x}%)` }}>
              <img className="reviews-carousel-image" src={item} alt="" />
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
  }
};

export default ReviewsPhotoCarousel;
