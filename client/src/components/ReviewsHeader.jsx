import React from 'react';
import styled from 'styled-components';
import { FaStar, FaCaretDown } from 'react-icons/fa';

const ReviewsHeaderContainer = styled.div`
  .reviews-total {
    display:flex;
    font-family: "Guardian-EgypTT", serif;
    letter-spacing: 0.35px;
    font-size: 26px;
    font-weight: 300;
    color: #222222;
  }
  #reviews-title-stars {
    margin: 0px 0px 0px 12px;
    font-size:20px;
    font-weight:300;
  }
  .reviews-tab-list {
    border-bottom: 2px solid rgba(34, 34, 34, 0.15);
  }
  .reviewsTabItem {
    font-size: 16px;
    line-height: 22.4px;
    margin: 0px 12px 0px 0px;
    padding: 12px 0px;
    background: white;
    border: none;
    cursor: pointer;
    border-bottom:  ${(props) => (props.reviewsTab === 'reviewsItem' ? '2px solid;' : '2px solid rgba(34, 34, 34, 0.15);')};
    border-color: ${(props) => (props.reviewsTab === 'reviewsItem' ? '#222222;' : 'none')};
    margin-bottom: -1px;
    outline: none;
  }
  .reviewsTabShop {
    font-size: 16px;
    line-height: 22.4px;
    margin: 0px 12px 0px 0px;
    padding: 12px 0px;
    background: white;
    border: none;
    cursor: pointer;
    border-bottom:  ${(props) => (props.reviewsTab === 'reviewsShop' ? '2px solid;' : '2px solid rgba(34, 34, 34, 0.15);')};
    border-color: ${(props) => (props.reviewsTab === 'reviewsShop' ? '#222222;' : 'none')};
    margin-bottom: -1px;
    outline: none;
  }
  .reviewsTabShop:hover{
    border-bottom: 2px solid;
    border-color: #222222;
    margin-bottom: -1px;
    transition: 1s;
  }
  .reviewsTabItem:hover{
    border-bottom: 2px solid;
    border-color: #222222;
    margin-bottom: -1px;
    transition: 1s;
  }
  

  #reviews-ratings {
    font-size:13px;
    line-height: 13px;
    background-color: #2222;
    margin: 0px 0px 0px 12px;
    padding: 6px 9px;
    border-radius: 45%;
  }
  .reviews-sort {
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 13px;
    line-height: 18.2px;
    margin: 0px 12px 0px 0px;
    padding: 9px 15px;
    background: white;
    font-weight: bold;
    border:none;
  }
  .reviews-sort-title:hover {
    cursor: pointer;
    background-color: #2222;
    transition: transform 200ms cubic-bezier(0.345, 0.115, 0.135, 1.42),background 150ms ease-out,box-shadow 200ms ease-out;
  }
  .reviews-dropdown-content{
    display:flex;
    justify-content: flex-end;
    flex-direction:row;
    font-weight: normal;
    font-color: #222222;
    display: ${(props) => (props.dropdown === false ? 'none;' : 'block;')};
    cursor:pointer;
  }
`;

const ReviewsHeader = (props) => {
  const {
    reviewsForItem, reviewsForShop, reviewsTab, handleClick, handleSortClick,
    handleDropdown, dropdown, handleSortNewest, handleSortRecommended,
  } = props;
  return (
    <ReviewsHeaderContainer reviewsTab={reviewsTab} dropdown={dropdown} className="ReviewsHeaderContainer">
      <div>
        <h3 className="reviews-total">
          {reviewsForShop.length} reviews <span id="reviews-title-stars"><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></span>
        </h3>
        <div className="reviews-tab-items">
          <div className="reviews-tab-list" id="reviews-tab-list">
            <button type="button" className="reviewsTabItem" tabIndex="0" role="tab" value="reviewsItem" onClick={handleClick}>Reviews for this item <span id="reviews-ratings">{reviewsForItem.length}</span></button>
            <button type="button" className="reviewsTabShop" tabIndex="0" role="tab" value="reviewsShop" onClick={handleClick}>Reviews for this shop <span id="reviews-ratings">{reviewsForShop.length}</span></button>
          </div>
        </div>
      </div>
      <div className="reviews-sort">
        <div className="reviews-sort-title" onClick={handleDropdown}>
          Sort by: Recommended <FaCaretDown />
        </div>
        <div className="reviews-dropdown-content">
          <a id="reviews-sort-dropdown-1" onClick={handleSortRecommended}>Recommended</a>
          <br></br>
          <a id="reviews-sort-dropdown-2"onClick={handleSortNewest}>Newest</a>
        </div>
      </div>
    </ReviewsHeaderContainer>
  );
};

export default ReviewsHeader;
