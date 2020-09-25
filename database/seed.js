const faker = require('faker');
const db = require('./index.js');

const datesArr = ['May 23, 2020', 'Jan 22, 2020', 'Nov 7, 2019', 'Sep 22, 2020', 'Aug 30, 2020', 'Oct 14, 2019', ' Apr 13, 2020', 'Aug 31, 2020', 'Aug 19, 2020', 'Jun 18, 2020', 'Mar 12, 2020', 'Oct 8, 2019', 'Nov 11, 2019'];

const createReview = () => {
  const review = {};
  review.userName = faker.internet.userName();
  review.userPhoto = faker.internet.avatar();
  review.review = faker.lorem.sentence();
  review.reviewPic = faker.image.cats();
  review.reviewRating = Math.floor(Math.random() * (5));
  review.reviewDate = `${datesArr[Math.floor(Math.random() * Math.floor(datesArr.length))]}`;
  review.purchasedItemDescription = faker.lorem.sentence();
  review.purchasedItemPic = faker.image.cats();
  review.itemShop = faker.company.companyName();

  return review;
};

const createReviews = () => {
  const reviewsArr = [];
  for (let i = 0; i < 10; i += 1) {
    reviewsArr.push(createReview());
  }
  return reviewsArr;
};

function seedMe() {
  const reviewsArr = createReviews();
  reviewsArr.forEach((review) => {
    db.query(`INSERT INTO reviews (userName, userPhoto, review, reviewPic, reviewRating, reviewDate, purchasedItemDescription, purchasedItemPic, itemShop) VALUES ("${review.userName}", "${review.userPhoto}", "${review.review}", "${review.reviewPhoto}", "${review.reviewRating}", "${review.reviewDate}", "${review.purchasedItemDescription}", "${review.purchasedItemPic}", "${review.itemShop}")`, (err) => {
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

// let userName1 = faker.internet.userName();
// let userPhoto1 = faker.internet.avatar();
// let review1 = faker.lorem.sentence();
// let reviewPhoto1 = faker.image.cats();
// let reviewDate1 = faker.date.recent();
// let reviewRating1 = Math.floor(Math.random() *(5))
// let purchasedItemDescription1 = faker.lorem.sentence();
// let purchasedItemPic1 = faker.image.cats();
// let itemShop1 = faker.company.companyName();

// const userNames = [];

// product.image = `http://lorempixel.com/400/400/technics/${Math.ceil(Math.random() * Math.ceil(10))}`
