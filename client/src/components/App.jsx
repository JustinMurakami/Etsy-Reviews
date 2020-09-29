import React from 'react';
import axios from 'axios';
import ReviewsForItem from './ReviewsForItems.jsx';
import ReviewsForShop from './ReviewsForShop.jsx';
import { FaStar, FaCaretDown } from 'react-icons/fa';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsForItem: [],
      reviewsForShop: [],
      tab: 'reviewsItem',
    };
    this.getAllReviewsForItem = this.getAllReviewsForItem.bind(this);
    this.getAllReviewsForShop = this.getAllReviewsForShop.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getRating = this.getRating.bind(this);
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
        }, () => console.log(this.state));
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
    } else if (rating === 2) {
      return <div><FaStar/><FaStar/></div>
    } else if (rating === 3) {
      return <div><FaStar/><FaStar/><FaStar/></div>
    } else if (rating === 4) {
      return <div><FaStar/><FaStar/><FaStar/><FaStar/></div>
    } else {
      return <div><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
    }
  }

  handleClick(e) {
    this.setState({
      tab: e.target.value,
    }, () => console.log(this.state));
  }

  render() {
    const { reviewsForItem, reviewsForShop, tab } = this.state;
    if (tab === 'reviewsItem') {
      return (
        <div className="reviews">
          <div className="reviews-total">
            <h3 className="reviews-title">{reviewsForShop.length} reviews <a id="reviews-title-stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> </a></h3>
          </div>
          <div className="reviews-tab-item">
            <div className="reviews-tab-list" id="reviews-tab-list-1">
              <button type="button" className="reviews-tab-item" tabIndex="0" role="tab" value="reviewsItem">Reviews for this item <span id="reviews-ratings">{reviewsForItem.length}</span></button>
              <button type="button" className="reviews-tab-item" tabIndex="0" role="tab" value="reviewsShop" onClick={this.handleClick}>Reviews for this shop <span id="reviews-ratings">{reviewsForShop.length}</span></button>
            </div>
            <div className="reviews-sort-list">
              <button type="button" className="reviews-sort-list-button">Sort by: Recommended <FaCaretDown /></button>
            </div>
          </div>
          <ReviewsForItem reviewsForItem={reviewsForItem} getRating={this.getRating} />
        </div>
      );
    }
    return (
      <div className="reviews">
        <div className="reviews-total">
          <h3 className="reviews-title">{reviewsForShop.length} reviews <a id="reviews-title-stars"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> </a></h3>
        </div>
        <div className="reviews-tab-item">
          <div className="reviews-tab-list" id="reviews-tab-list-1">
            <button className="reviews-tab-item" tabIndex="0" role="tab" value="reviewsItem" onClick={this.handleClick} >Reviews for this item <span id="reviews-ratings">{reviewsForItem.length}</span></button>
            <button className="reviews-tab-item" tabIndex="0" role="tab" value="reviewsShop">Reviews for this shop <span id="reviews-ratings">{reviewsForShop.length}</span></button>
          </div>
          <div className="reviews-sort-list">
            <button type="button" className="reviews-sort-list-button">Sort by: Recommended </button>
          </div>
        </div>
        <ReviewsForShop reviewsForShop={reviewsForShop} getRating={this.getRating} />
      </div>
    );
  }
}

//   if (tab === "reviewsItem") {
//     return(
//       <div>
//         <ReviewsForItem reviewsForItem={reviewsForItem} />
//       </div>
//     )
//   } else {
//     return(
//       <div>
//         <ReviewsForShop reviewsForShop={reviewsForShop} />
//       </div>
//     )
//   }
