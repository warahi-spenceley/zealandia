// import nock from 'nock'
// import { getWaimaramaData } from './hawkesBay'

// describe('getWaimaramaData', () => {
//   const fakeWeatherData = [{
//     date: '2021-01-01',
//     astronomy: [{
//       sunrise: '06:45 AM',
//       sunset: '07:10 PM',
//       moonrise: "07:43 PM",
//       moonset: "07:19 AM",
//       moon_phase: "waning gibbous",
//       moon_illumination: "83"
//     }],
//     maxtempC: '23',
//     mintempC: '21'
//   }]
//   const scope = nock('/http://api.worldweatheronline.com/premium/v1/marine.ashx')
//     .get("?&key=e2d788c2011f4c7787c13418211603&format=json&tide=yes&q=-39.8148531,176.9923951")
//     .reply(200, fakeWeatherData)

//   test('returns marine weather data from api', () => {
//     expect.assertions(1)
//     return getWaimaramaData()
//       .then((weatherData) => {
//         expect(status).toBe(200)
//         expect(scope.isDone()).toBe(true)
//         return null
//       })
//   })
// })
