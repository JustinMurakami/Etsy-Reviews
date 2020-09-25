import React from 'react';
import axios from 'axios';

const Reviews = (props) => {
    return(
      <div>
        {props.users.map((user, index) => {
        return(
         <div>
             <img src={user.userPhoto}/>
             {user.userName}
         </div>
        )
      })}
      </div>
    )
  };

 export default Reviews;