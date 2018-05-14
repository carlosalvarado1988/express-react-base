const mysql = require('promise-mysql');

pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'cloudcare',
  connectionLimit: 10
});

exports.query = function (query, values) {
  return new Promise(function (resolve, reject) {
    const start = Date.now()
    // query = string with pointers ?
    // values = [with order positions]
    pool.query(query, values)
    .then(function (data) {
      const duration = (Date.now() - start) / 1000
      console.log('executed query', {duration, rows: data.length })
      return resolve(data)
    })
    .catch(function (err) { return reject(err) })
  })
}

// pool.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
//   if (error) throw error;
//   // ...
// });