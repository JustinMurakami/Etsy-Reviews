const faker = require('faker');
const db = require('./index.js');

const datesArr = ['May 23, 2020', 'Jan 22, 2020', 'Nov 7, 2019', 'Sep 22, 2020', 'Aug 30, 2020', 'Oct 14, 2019', ' Apr 13, 2020', 'Aug 31, 2020', 'Aug 19, 2020', 'Jun 18, 2020', 'Mar 12, 2020', 'Oct 8, 2019', 'Nov 11, 2019'];
const stylesArr = ['Digital Only', 'Canvas 8x10', 'Canvas 12x16', 'Canvas 18x24', 'Poster 8x10', 'Poster 12x16', 'Poster 18x24', 'Poster 30x40'];

const createUser = () => {
  const user = {};
  user.userName = faker.name.findName();
  user.userPhoto = faker.internet.avatar();
  return user;
};

const createReviewForItem = () => {
  const reviewforItem = {};
  reviewforItem.userID = Math.ceil(Math.random() * (100));
  reviewforItem.review = faker.lorem.sentences();
  reviewforItem.reviewPicDog = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(40))}`;
  reviewforItem.reviewPicCat = `http://bit.ly/etsycats${Math.ceil(Math.random() * Math.ceil(40))}`;
  reviewforItem.reviewRating = Math.ceil(Math.random() * (5));
  reviewforItem.reviewDate = `${datesArr[Math.floor(Math.random() * Math.floor(datesArr.length))]}`;
  reviewforItem.style = `${stylesArr[Math.floor(Math.random() * Math.floor(stylesArr.length))]}`;
  return reviewforItem;
};

const createReviewForShop = () => {
  const reviewForShop = {};
  reviewForShop.userID = Math.floor(Math.random() * (100));
  reviewForShop.review = faker.lorem.sentences();
  reviewForShop.reviewPic = faker.image.nature();
  reviewForShop.reviewRating = Math.ceil(Math.random() * (5));
  reviewForShop.reviewDate = `${datesArr[Math.floor(Math.random() * Math.floor(datesArr.length))]}`;
  reviewForShop.purchasedItemDescription = faker.lorem.sentence();
  reviewForShop.purchasedItemPicDog = `http://bit.ly/etsydog${Math.ceil(Math.random() * Math.ceil(40))}`;
  reviewForShop.purchasedItemPicCat = `http://bit.ly/etsycats${Math.ceil(Math.random() * Math.ceil(40))}`;
  return reviewForShop;
};

const createUsers = () => {
  const usersArr = [];
  for (let i = 0; i < 100; i += 1) {
    usersArr.push(createUser());
  }
  return usersArr;
};

const createReviewsForItem = () => {
  const reviewsForItemArr = [];
  for (let i = 0; i < 50; i += 1) {
    reviewsForItemArr.push(createReviewForItem());
  }
  return reviewsForItemArr;
};

const createReviewsForShop = () => {
  const reviewsForShopArr = [];
  for (let i = 0; i < 100; i += 1) {
    reviewsForShopArr.push(createReviewForShop());
  }
  return reviewsForShopArr;
};

function seedMe() {
  const reviewsForItemArr = createReviewsForItem();
  const usersArr = createUsers();
  const reviewsForShopArr = createReviewsForShop();
  usersArr.forEach((user) => {
    db.query(`INSERT INTO users (userName, userPhoto) VALUES ("${user.userName}", "${user.userPhoto}")`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });
  reviewsForItemArr.forEach((review) => {
    db.query(`INSERT INTO reviewsForItem(userID, review, reviewPicDog, reviewPicCat, reviewRating, reviewDate, style) VALUES ( ${review.userID}, "${review.review}", "${review.reviewPicDog}", "${review.reviewPicCat}", "${review.reviewRating}", "${review.reviewDate}", "${review.style}")`, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('seed succeeded');
      }
    });
  });
  reviewsForShopArr.forEach((reviewShop) => {
    db.query(`INSERT INTO reviewsForShop(userID, review, reviewPic, reviewRating, reviewDate, purchasedItemDescription, purchasedItemPic) VALUES ( ${reviewShop.userID}, "${reviewShop.review}", "${reviewShop.reviewPic}", "${reviewShop.reviewRating}", "${reviewShop.reviewDate}", "${reviewShop.purchasedItemDescription}", "${reviewShop.purchasedItemPic}")`, (err) => {
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
