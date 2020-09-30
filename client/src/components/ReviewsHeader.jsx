import React from 'react';
import { FaStar, FaCaretDown } from 'react-icons/fa';

const ReviewsHeader = (props) => {
  const { reviewsForItem, reviewsForShop, handleClick } = props;
  return (
    <div>
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
    </div>
  );
};

export default ReviewsHeader;
