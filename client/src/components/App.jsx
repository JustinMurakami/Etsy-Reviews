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
    
  `;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsForItem: [],
      reviewsForItemOrdered: [],
      reviewsForShop: [],
      reviewsForShopOrdered: [],
      reviewsTabItem: 'reviewsItem',
      loading: false,
      currentPage: 1,
      reviewsPerPage: 4,
      isOpen: false,
      currentItemReview: [],
      currentShopReview: [],
    };
    this.getAllReviewsForItem = this.getAllReviewsForItem.bind(this);
    this.getAllReviewsForShop = this.getAllReviewsForShop.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleClickIdItem = this.handleClickIdItem.bind(this);
    this.handleClickIdShop = this.handleClickIdShop.bind(this);
    this.getOrderdReviewsForItem = this.getOrderdReviewsForItem.bind(this);
    this.getOrderdReviewsForShop = this.getOrderdReviewsForShop.bind(this);
  }

  componentDidMount() {
    this.getAllReviewsForItem();
    this.getAllReviewsForShop();
    this.getOrderdReviewsForItem();
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
          reviewsForItemOrdered: results.data,
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
          reviewsForShopOrdered: results.data,
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
      [e.target.className]: e.target.value,
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

  render() {
    const {
      reviewsForItem, reviewsForShop, reviewsTabItem, loading, currentPage,
      reviewsPerPage, isOpen, currentShopReview, currentItemReview,
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

    if (reviewsTabItem === 'reviewsItem') {
      return (
        <ReviewsContainer className="ReviewsContainer">
          <ReviewsHeader
            reviewsForShop={reviewsForShop}
            reviewsForItem={reviewsForItem}
            handleClick={this.handleClick}
          />
          <ReviewsForItem
            reviewsForItem={currentReviewsForItem}
            getRating={this.getRating}
            loading={loading}
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
        />
        <ReviewsForShop
          reviewsForShop={currentReviewsForShop}
          getRating={this.getRating}
          loading={loading}
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
        />
      </ReviewsContainer>
    );
  }
}
