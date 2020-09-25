const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbhelpers = require('../database/dbhelpers.js');

const server = express();
const port = 8003;

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan('dev'));

server.use(express.static(path.join(__dirname, '../client/dist')));

// routes for getting all users with reviews
server.get('/users/all', (req, res) => {
  dbhelpers.getAllUsers((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

server.get('/reviewsItem/all', (req, res) => {
  dbhelpers.getAllReviewsItem((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});
// routes get for one user's review
// server.get('/api/reveiews/:id', (req, res) => {

// });

server.listen(port, () => console.log(`listening on ${port}`));
