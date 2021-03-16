exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('hawkesBaySpots').del()
    .then(function () {
      // Inserts seed entries
      return knex('hawkesBaySpots').insert([
        { id: 1, name: 'Waimarama Beach', latitude: -39.8197074, longitude: 176.9949216 },
        { id: 2, name: 'Ocean Beach', latitude: -39.743167, longitude: 177.0099003 },
        { id: 3, name: 'Waipatiki Beach', latitude: -39.3001521, longitude: 176.97404 },
        { id: 4, name: 'Te Awanga Point', latitude: -39.6143705, longitude: 176.9592222 }
      ])
    })
}
