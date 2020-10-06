const db = require('./index.js');

const dbHelpers = {
  getAllReviewsForItem: (callback) => {
    const queryString = 'Select * from users, reviewsForItemDogs where users.id = reviewsForItemDogs.userID AND users.category=4 LIMIT 28;';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getAllReviewsForShop: (callback) => {
    const queryString = 'Select * from users, reviewsForShopDogs where users.id = reviewsForShopDogs.userID AND users.category=4 LIMIT 44;';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getOrderedReviewsForItem: (callback) => {
    const queryString = 'Select * from users, reviewsForItemDogs where users.id=reviewsForItemDogs.userID AND users.category=4 ORDER BY users.id ASC reviewsForItemDogs.reviewDate DESC LIMIT 28;';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
  getOrderedReviewsForShop: (callback) => {
    const queryString = 'Select * from users, reviewsForShopDogs where users.id=reviewsForShopDogs.userID AND users.category=4 ORDER BY reviewsForShopDogs.reviewDate DESC LIMIT 44;';
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
