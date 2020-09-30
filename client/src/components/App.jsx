import React from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import ReviewsHeader from './ReviewsHeader.jsx';
import ReviewsForItem from './ReviewsForItems.jsx';
import ReviewsForShop from './ReviewsForShop.jsx';
import ReviewsPhotoCarousel from './ReviewsPhotoCarousel.jsx';
import Pagination from './Pagination.jsx';

const ReviewsContainer = styled.div`
    text-align: left;
    font-family: "Graphik Webfont", -apple-system, system-ui, Roboto, "Helvetica", "Arial", "sans-serif";
    display:flex;
    justify-content: flex-start;
    align-items:flex-start;
    flex-direction:column;
    padding: 0px 0px 0px 30px;
  `;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsForItem: [],
      reviewsForShop: [],
      tab: 'reviewsItem',
      loading: false,
      currentPage: 1,
      reviewsPerPage: 4,
    };
    this.getAllReviewsForItem = this.getAllReviewsForItem.bind(this);
    this.getAllReviewsForShop = this.getAllReviewsForShop.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
      })
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

  getRating(rating) {
    if (rating === 1) {
      return <FaStar />
    }
    if (rating === 2) {
      return <div><FaStar/><FaStar/></div>
    } if (rating === 3) {
      return <div><FaStar/><FaStar/><FaStar/></div>
    } if (rating === 4) {
      return <div><FaStar/><FaStar/><FaStar/><FaStar/></div>
    } 
      return <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
  }

  handleClick(e) {
    this.setState({
      tab: e.target.value,
    });
  }

  render() {
    const {
      reviewsForItem, reviewsForShop, tab, loading, currentPage, reviewsPerPage,
    } = this.state;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviewsForItem = reviewsForItem.slice(indexOfFirstReview, indexOfLastReview);
    const currentReviewsForShop = reviewsForShop.slice(indexOfFirstReview, indexOfLastReview);

    const paginate = (pageNumber) => this.setState({
      currentPage: pageNumber,
    });

    if (tab === 'reviewsItem') {
      return (
        <ReviewsContainer>
          <ReviewsHeader
            reviewsForShop={reviewsForShop}
            reviewsForItem={reviewsForItem}
            handleClick={this.handleClick}
          />
          <ReviewsForItem
            reviewsForItem={currentReviewsForItem}
            getRating={this.getRating}
            loading={loading}
          />
          <Pagination
            reviewsPerPage={reviewsPerPage}
            totalReviews={reviewsForItem.length}
            paginate={paginate}
          />
          <ReviewsPhotoCarousel reviewsForShop={reviewsForShop} />
        </ReviewsContainer>
      );
    }
    return (
      <ReviewsContainer>
        <ReviewsHeader
          reviewsForShop={reviewsForShop}
          reviewsForItem={reviewsForItem}
          handleClick={this.handleClick}
        />
        <ReviewsForShop
          reviewsForShop={currentReviewsForShop}
          getRating={this.getRating}
          loading={loading}
        />
        <Pagination
          reviewsPerPage={reviewsPerPage}
          totalReviews={reviewsForShop.length}
          paginate={paginate}
        />
        <ReviewsPhotoCarousel reviewsForShop={reviewsForShop} />
      </ReviewsContainer>
    );
  }
}
