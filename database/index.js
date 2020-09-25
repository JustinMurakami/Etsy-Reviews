const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'etsyReviewsDB',
});

db.connect();

module.exports = db;
