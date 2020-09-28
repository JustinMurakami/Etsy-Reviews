import React from 'react';
import axios from 'axios';

const ReviewsforItem = (props) => {
  const fourReviews = props.reviewsForItem.slice(0,4);
    return(
      <div className="ReviewsListForItems">
        {fourReviews.map((review, index) => {
        return(
         <div key={index}>
             <img src={review.userPhoto}/>
             {review.userName} {review.reviewDate} {review.reviewRating}
             {/* <img src ={review.reviewPicDog} /> */}
         </div>
        )
      })}
      </div>
    )
  };

export default ReviewsforItem;