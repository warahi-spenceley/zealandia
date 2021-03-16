const connection = require('./connection')

function getHawkesBaySpots (db = connection) {
  return db('hawkesBaySpots').select()
}

module.exports = {
  getHawkesBaySpots
}
