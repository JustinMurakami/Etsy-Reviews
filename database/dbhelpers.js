const db = require('./index.js');

const dbhelpers = {
  getAll: (callback) => {
    const queryString = 'SELECT * FROM reviews';
    db.query(queryString, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },
};

module.exports = dbhelpers;
