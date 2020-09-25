import React from 'react';
// import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1> {this.props.reviews.length} Reviews </h1>
        {this.props.reviews.map((review) => {
          return (
            <div>
              <img src={review.userPhoto} />
              <h3>{review.userName} {review.reviewDate}</h3>
              <br></br>
              <h3> {review.review}</h3>
              <img src={review.purchasedItemPic} />
            </div>
          )
        })}
      </div>
    );
  }
}

export default Reviews;
