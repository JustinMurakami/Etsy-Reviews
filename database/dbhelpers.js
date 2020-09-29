const db = require('./index.js');

const dbHelpers = {
  getAllReviewsForItem: (callback) => {
    const queryString = 'Select * from users, reviewsForItem where users.id = reviewsForItem.userID ORDER BY RAND() LIMIT 35;';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getAllReviewsForShop: (callback) => {
    const queryString = 'Select * from users, reviewsForShop where users.id = reviewsForShop.userID ORDER BY RAND() LIMIT 65;';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
};

module.exports = dbHelpers;
