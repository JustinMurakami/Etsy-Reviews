DROP DATABASE IF EXISTS etsyReviewsDB;
CREATE DATABASE etsyReviewsDB;

USE etsyReviewsDB;

CREATE TABLE users(
    id int not null auto_increment primary key,
    userName varchar(255) not null,
    userPhoto varchar(255) not null
);

CREATE TABLE reviewsItem(
    id int not null auto_increment primary key,
    userID int not null,
    review varchar(255) not null,
    reviewPic varchar(255) not null,
    reviewRating int not null,
    reviewDate varchar(255) not null,
    style varchar(255) not null
);

CREATE TABLE reviewsShop(
    id int not null auto_increment primary key,
    userID int not null,
    purchasedItemDescription varchar(255) not null,
    purchasedItemPic varchar(255) not null
);
