import React from 'react';
import axios from 'axios';
import Reviews from './Reviews.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    // const { reviews } = this.state;
    // this.setState({
    //   review: reviews[0],
    // });
  }

  getReviews() {
    axios.get('/reviews/all')
      .then((results) => {
        this.setState({
          reviews: results.data,
        }, () => console.log(this.state));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className="reviews">
        <Reviews reviews={reviews} />
      </div>
    );
  }
}
