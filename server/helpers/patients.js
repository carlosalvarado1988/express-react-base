const db = require('../db')
const knex = require('../knex/knex.js')

function _getPatientsList() {
  // return new Promise(function (resolve, reject) {
  //   const queryString = 'SELECT * FROM patients ORDER BY last_name'
  //   db.query(queryString, [])
  //     .then(data => { return resolve(data) })
  //     .catch(err => { return reject(err) })
  // })
  console.log('we are in _getPatientsList')
  return knex
          .select('*')
          .from('patients')
          // .then(rows => {
          //   console.log('whats rows', rows)
          //   return rows
          // })
}

module.exports.getPatientsList = _getPatientsList