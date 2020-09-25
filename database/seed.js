const faker = require('faker');
const db = require('./index.js');

const datesArr = ['May 23, 2020', 'Jan 22, 2020', 'Nov 7, 2019', 'Sep 22, 2020', 'Aug 30, 2020', 'Oct 14, 2019', ' Apr 13, 2020', 'Aug 31, 2020', 'Aug 19, 2020', 'Jun 18, 2020', 'Mar 12, 2020', 'Oct 8, 2019', 'Nov 11, 2019'];
const stylesArr = ['Digital Only', 'Canvas 8x10', 'Canvas 12x16', 'Canvas 18x24', 'Poster 8x10', 'Poster 12x16', 'Poster 18x24', 'Poster 30x40'];

const createUser = () => {
  const user = {};
  user.userName = faker.internet.userName();
  user.userPhoto = faker.internet.avatar();
  return user;
};

const createReview = () => {
  const review = {};
  review.userID = Math.ceil(Math.random() * (100));
  review.review = faker.lorem.sentence();
  review.reviewPic = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(41))}`;
  review.reviewRating = Math.ceil(Math.random() * (5));
  review.reviewDate = `${datesArr[Math.floor(Math.random() * Math.floor(datesArr.length))]}`;
  review.style = `${stylesArr[Math.floor(Math.random() * Math.floor(stylesArr.length))]}`;
  return review;
};

const createItemReview = () => {
  const itemReview = {};
  itemReview.userID = Math.floor(Math.random() * (100));
  itemReview.purchasedItemDescription = faker.lorem.sentence();
  itemReview.purchasedItemPic = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(41))}`;
  return itemReview;
};

const createUsers = () => {
  const usersArr = [];
  for (let i = 0; i < 100; i += 1) {
    usersArr.push(createUser());
  }
  return usersArr;
};

const createReviews = () => {
  const reviewsArr = [];
  for (let i = 0; i < 10; i += 1) {
    reviewsArr.push(createReview());
  }
  return reviewsArr;
};

const createItemReviews = () => {
  const itemsReviewArr = [];
  for (let i = 0; i < 10; i += 1) {
    itemsReviewArr.push(createItemReview());
  }
  return itemsReviewArr;
};

function seedMe() {
  const reviewsArr = createReviews();
  const usersArr = createUsers();
  const itemsReviewArr = createItemReviews();
  usersArr.forEach((user) => {
    db.query(`INSERT INTO users (userName, userPhoto) VALUES ("${user.userName}", "${user.userPhoto}")`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });
  reviewsArr.forEach((review) => {
    db.query(`INSERT INTO reviewsItem(userID, review, reviewPic, reviewRating, reviewDate, style) VALUES ( ${review.userID}, "${review.review}", "${review.reviewPic}", "${review.reviewRating}", "${review.reviewDate}", "${review.style}")`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });
  itemsReviewArr.forEach((itemReview) => {
    db.query(`INSERT INTO reviewsShop(userID, purchasedItemDescription, purchasedItemPic) VALUES ( ${itemReview.userID}, "${itemReview.purchasedItemDescription}", "${itemReview.purchasedItemPic}")`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });

  db.end();
}

seedMe();

// product.image = `http://lorempixel.com/400/400/technics/${Math.ceil(Math.random() * Math.ceil(10))}`
