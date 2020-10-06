import React from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import ReviewsHeader from './ReviewsHeader.jsx';
import ReviewsForItem from './ReviewsForItems.jsx';
import ReviewsForShop from './ReviewsForShop.jsx';
import ReviewsPhotoCarousel from './ReviewsPhotoCarousel.jsx';
import ReviewsModal from './ReviewsModal.jsx'
import Pagination from './Pagination.jsx';

const ReviewsContainer = styled.div`
    font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Helvetica", "Arial", "sans-serif";
    display:flex;
    flex-direction: column;
    padding: 0px 0px 0px 30px;
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
    #review-review-text {
      justify-content: flex-start;
      font-size: 16px;
      padding: 0px 30px 0px 0px;
      margin: 0px 0px;
    }
    .review-review-pic {
      cursor:pointer;
      justify-content: flex-end;
      vertical-align: middle;
      height: 14vw;
      width: 14vw;
      border-radius: 10%;
    }
  `;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsForItem: [],
      reviewsForShop: [],
      reviewsTab: 'reviewsItem',
      currentPage: 1,
      reviewsPerPage: 4,
      isOpen: false,
      x: 0,
      dropdown: false,
      sortName: 'Recommended',
      currentItemReview: [],
      currentShopReview: [],
    };
    this.getAllReviewsForItem = this.getAllReviewsForItem.bind(this);
    this.getAllReviewsForShop = this.getAllReviewsForShop.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleClickIdItem = this.handleClickIdItem.bind(this);
    this.handleClickIdShop = this.handleClickIdShop.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleSortNewest = this.handleSortNewest.bind(this);
    this.handleSortRecommended = this.handleSortRecommended.bind(this);
  }

  componentDidMount() {
    this.getAllReviewsForItem();
    this.getAllReviewsForShop();
  }

  getAllReviewsForItem() {
    axios.get('/reviewsItem/all')
      .then((results) => {
        this.setState({
          reviewsForItem: results.data,
        });
      }, () => console.log(this.state))
      .catch((err) => {
        console.error(err);
      });
  }

  getOrderdReviewsForItem() {
    axios.get('/reviewsItem/all/newest')
      .then((results) => {
        this.setState({
          reviewsForItem: results.data,
        });
      }, () => console.log(this.state))
      .catch((err) => {
        console.error(err);
      });
  }

  getAllReviewsForShop() {
    axios.get('/reviewsShop/all')
      .then((results) => {
        this.setState({
          reviewsForShop: results.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getOrderdReviewsForShop() {
    axios.get('/reviewsShop/all/newest')
      .then((results) => {
        this.setState({
          reviewsForShop: results.data,
        });
      }, () => console.log(this.state))
      .catch((err) => {
        console.error(err);
      });
  }

  getRating(rating) {
    if (rating === 1) {
      console.log(this.state);
      return <FaStar />;
    }
    if (rating === 2) {
      return <div><FaStar/> <FaStar/></div>;
    } if (rating === 3) {
      return <div><FaStar/> <FaStar/> <FaStar/></div>;
    } if (rating === 4) {
      return <div><FaStar/> <FaStar/> <FaStar/> <FaStar/></div>;
    }
    return <div><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/></div>;
  }

  handleClick(e) {
    this.setState({
      reviewsTab: e.target.value,
      currentPage: 1,
    });
  }

  handleClickIdItem(id) {
    const { reviewsForItem } = this.state;
    for (let i = 0; i < reviewsForItem.length; i += 1) {
      if (reviewsForItem[i].id === id) {
        this.setState({
          currentItemReview: reviewsForItem[i],
        });
      }
    }
  }

  handleClickIdShop(id) {
    const { reviewsForShop } = this.state;
    for (let i = 0; i < reviewsForShop.length; i += 1) {
      if (reviewsForShop[i].id === id) {
        this.setState({
          currentShopReview: reviewsForShop[i],
        });
      }
    }
  }

  handleModalClick() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  handleDropdown() {
    const { dropdown } = this.state;
    this.setState({
      dropdown: !dropdown,
    });
  }

  handleSortNewest() {
    this.setState({
      sortName: 'Newest',
      currentPage: 1,
    });
    this.getOrderdReviewsForItem();
    this.getOrderdReviewsForShop();
    this.handleDropdown();
  }

  handleSortRecommended() {
    this.setState({
      sortName: 'Recommended',
      currentPage: 1,
    });
    this.getAllReviewsForItem();
    this.getAllReviewsForShop();
    this.handleDropdown();
  }

  render() {
    const {
      reviewsForItem, reviewsForShop, reviewsTab, currentPage,
      reviewsPerPage, isOpen, currentShopReview, currentItemReview, x, dropdown,
      sortName,
    } = this.state;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviewsForItem = reviewsForItem.slice(indexOfFirstReview, indexOfLastReview);
    const currentReviewsForShop = reviewsForShop.slice(indexOfFirstReview, indexOfLastReview);
    const paginate = (pageNumber) => this.setState({
      currentPage: pageNumber,
    });
    const correctDate = (date) => {
      let result = '';
      const dateArr = date.split(' ');
      result = `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
      return result;
    };
    const goLeft = () => {
      if (x === 0) {
        this.setState({
          x: 0,
        });
      } else {
        this.setState({
          x: x + 400,
        });
      }
    };
    const goRight = () => {
      if (x === -100 * (reviewsForItem.length) + 400) {
        this.setState({
          x: -100 * (reviewsForItem.length) + 400,
        });
      } else {
        this.setState({
          x: x - 400,
        });
      }
    };

    if (reviewsTab === 'reviewsItem') {
      return (
        <ReviewsContainer className="ReviewsContainer">
          <ReviewsHeader
            reviewsForShop={reviewsForShop}
            reviewsForItem={reviewsForItem}
            handleClick={this.handleClick}
            handleSortNewest={this.handleSortNewest}
            handleSortRecommended={this.handleSortRecommended}
            handleDropdown={this.handleDropdown}
            reviewsTab={reviewsTab}
            dropdown={dropdown}
            sortName={sortName}
          />
          <ReviewsForItem
            reviewsForItem={currentReviewsForItem}
            getRating={this.getRating}
            isOpen={isOpen}
            handleModalClick={this.handleModalClick}
            handleClickIdItem={this.handleClickIdItem}
            correctDate={correctDate}
          />
          <ReviewsModal
            isOpen={isOpen}
            handleModalClick={this.handleModalClick}
            currentReview={currentItemReview}
            getRating={this.getRating}
            correctDate={correctDate}
          />
          <Pagination
            reviewsPerPage={reviewsPerPage}
            totalReviews={reviewsForItem.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <ReviewsPhotoCarousel
            reviewsForItem={reviewsForItem}
            isOpen={isOpen}
            handleModalClick={this.handleModalClick}
            handleClickIdItem={this.handleClickIdItem}
            correctDate={correctDate}
            x={x}
            goLeft={goLeft}
            goRight={goRight}
          />
        </ReviewsContainer>
      );
    }
    return (
      <ReviewsContainer className="ReviewsContainer">
        <ReviewsHeader
          reviewsForShop={reviewsForShop}
          reviewsForItem={reviewsForItem}
          handleClick={this.handleClick}
          handleSortNewest={this.handleSortNewest}
          handleSortRecommended={this.handleSortRecommended}
          handleDropdown={this.handleDropdown}
          reviewsTab={reviewsTab}
          dropdown={dropdown}
          sortName={sortName}
        />
        <ReviewsForShop
          reviewsForShop={currentReviewsForShop}
          getRating={this.getRating}
          isOpen={isOpen}
          handleModalClick={this.handleModalClick}
          handleClickIdShop={this.handleClickIdShop}
          correctDate={correctDate}
        />
        <ReviewsModal
          isOpen={isOpen}
          handleModalClick={this.handleModalClick}
          currentReview={currentShopReview}
          getRating={this.getRating}
          correctDate={correctDate}
        />
        <Pagination
          reviewsPerPage={reviewsPerPage}
          totalReviews={reviewsForShop.length}
          paginate={paginate}
          currentPage={currentPage}
          correctDate={correctDate}
        />
        <ReviewsPhotoCarousel
          reviewsForItem={reviewsForItem}
          isOpen={isOpen}
          handleModalClick={this.handleModalClick}
          handleClickIdItem={this.handleClickIdItem}
          correctDate={correctDate}
          x={x}
          goLeft={goLeft}
          goRight={goRight}
        />
      </ReviewsContainer>
    );
  }
}
