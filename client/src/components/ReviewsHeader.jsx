import React from 'react';
import styled from 'styled-components';
import { FaStar, FaCaretDown } from 'react-icons/fa';

const ReviewsHeaderStyle = styled.div`
  .reviews-total {
    font-family: "Guardian-EgypTT", serif;
    font-weight: 10;
    letter-spacing: 0.35px;
    font-size: 20px;
    line-height: 32px;
  }
  .reviews-title {
    font-size: 26px;
    font-weight: 300;
    line-height: 42px;
    color: #222222;
    margin: 0px 0px;
  }
  #reviews-title-stars {
    font-size: 20px;
  }
  .reviews-tab-item {
    font-size: 16px;
    line-height: 22.4px;
    text-align:left;
    margin: 0px 12px 0px 0px;
    padding: 12px 0px;
    background: white;
    border: none;
    cursor: pointer;
  }
  #reviews-ratings {
    font-size:13px;
    line-height: 13px;
  }
  .reviews-sort-list {
    font-size: 13px;
    line-height: 18.2px;
    margin: 0px 12px 0px 0px;
    padding: 12px 0px;
  }
  .reviews-sort-list-button {
    background: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`;

const ReviewsHeader = (props) => {
  const { reviewsForItem, reviewsForShop, handleClick } = props;
  return (
    <ReviewsHeaderStyle>
      <div className="reviews-total">
        <h3 className="reviews-title">{reviewsForShop.length} reviews <a id="reviews-title-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </a></h3>
      </div>
      <div className="reviews-tab-item">
        <div className="reviews-tab-list" id="reviews-tab-list-1">
          <button type="button" className="reviews-tab-item" tabIndex="0" role="tab" value="reviewsItem" onClick={handleClick} >Reviews for this item <span id="reviews-ratings">{reviewsForItem.length}</span></button>
          <button type="button" className="reviews-tab-item" tabIndex="0" role="tab" value="reviewsShop" onClick={handleClick}>Reviews for this shop <span id="reviews-ratings">{reviewsForShop.length}</span></button>
        </div>
        <div className="reviews-sort-list">
          <button type="button" className="reviews-sort-list-button">Sort by: Recommended </button>
        </div>
      </div>
    </ReviewsHeaderStyle>
  );
};

export default ReviewsHeader;
