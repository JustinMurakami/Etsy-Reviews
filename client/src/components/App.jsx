import React from 'react';
import axios from 'axios';
import ReviewsForItem from './ReviewsForItems.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsForItem: [],
      reviewsForShop: [],
    };
    this.getAllReviewsForItem = this.getAllReviewsForItem.bind(this);
    this.getAllReviewsForShop = this.getAllReviewsForShop.bind(this);
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

  render() {
    const { reviewsForItem, reviewsForShop } = this.state;
    return (
      <div className="reviews">
        <div className="reviews reviewsTotal">
          <h3 className="text-body">{reviewsForShop.length} reviews ★★★★★</h3>
        </div>
        <ReviewsForItem reviewsForItem={reviewsForItem} />
      </div>
    );
  }
}
