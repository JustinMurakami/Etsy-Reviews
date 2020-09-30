import React from 'react';
import styled from 'styled-components';
import { FaStar, FaCaretDown } from 'react-icons/fa';

const ReviewsHeaderContainer = styled.div`
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
  .reviews-tab-list {
    display: flex;
    justify-content:flex-start;
    border-bottom: 2px solid rgba(34, 34, 34, 0.15);
  }
  .reviews-tab-item {
    font-size: 16px;
    line-height: 22.4px;
    margin: 0px 12px 0px 0px;
    padding: 12px 0px;
    background: white;
    border: none;
    cursor: pointer;
  }
  #reviews-ratings {
    font-size:13px;
    line-height: 13px;
    background-color: #2222;
    margin: 0px 0px 0px 12px;
    padding: 6px 9px;
    border-radius: 45%;
  }
  .reviews-sort-list {
    dislay:flex;
    justify-content: flex-end;
    font-size: 13px;
    line-height: 18.2px;
    margin: 0px 12px 0px 0px;
    padding: 12px 0px;
  }
  .reviews-sort-list-button {
    padding: 0px 0px;
    background: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`;

const ReviewsHeader = (props) => {
  const { reviewsForItem, reviewsForShop, handleClick } = props;
  return (
    <ReviewsHeaderContainer className="ReviewsHeaderContainer">
      <div className="reviews-total">
        <h3 className="reviews-title">{reviewsForShop.length} reviews <a id="reviews-title-stars"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </a></h3>
      </div>
      <div className="reviews-tab-items">
        <div className="reviews-tab-list" id="reviews-tab-list">
          <button type="button" className="reviews-tab-item" tabIndex="0" role="tab" value="reviewsItem" onClick={handleClick} >Reviews for this item <span id="reviews-ratings">{reviewsForItem.length}</span></button>
          <button type="button" className="reviews-tab-item" tabIndex="0" role="tab" value="reviewsShop" onClick={handleClick}>Reviews for this shop <span id="reviews-ratings">{reviewsForShop.length}</span></button>
        </div>
        <div className="reviews-sort-list">
          <button type="button" className="reviews-sort-list-button">Sort by: Recommended <FaCaretDown/> </button>
        </div>
      </div>
    </ReviewsHeaderContainer>
  );
};

export default ReviewsHeader;
