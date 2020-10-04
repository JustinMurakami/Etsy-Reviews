const db = require('./index.js');

const dbHelpers = {
  getAllReviewsForItem: (callback) => {
    const queryString = 'Select * from users, reviewsForItem where users.id = reviewsForItem.userID;';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getAllReviewsForShop: (callback) => {
    const queryString = 'Select * from users, reviewsForShop where users.id = reviewsForShop.userID;';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getOrderedReviewsForItem: (callback) => {
    const queryString = 'Select * from users, reviewsForItem where users.id=reviewsForItem.userID ORDER BY reviewsForItem.reviewDate DESC;';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getOrderedReviewsForShop: (callback) => {
    const queryString = 'Select * from users, reviewsForShop where users.id=reviewsForShop.userID ORDER BY reviewsForShop.reviewDate DESC;';
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
