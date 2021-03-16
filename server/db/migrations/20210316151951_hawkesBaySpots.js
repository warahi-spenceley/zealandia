exports.up = function (knex) {
  return knex.schema.createTable('hawkesBaySpots', table => {
    table.increments('id')
    table.string('name')
    table.int('latitude')
    table.int('longitude')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('hawkesBaySpots')
}
