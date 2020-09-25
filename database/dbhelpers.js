const db = require('./index.js');

const dbhelpers = {
  getAllUsers: (callback) => {
    const queryString = 'SELECT * FROM users';
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
