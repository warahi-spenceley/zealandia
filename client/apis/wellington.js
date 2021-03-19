import request from 'superagent'

const baseUrl = 'http://api.worldweatheronline.com/premium/v1/marine.ashx'
const format = '&format=json'
const tide = '&tide=yes'
const key = '?&key=e2d788c2011f4c7787c13418211603'

export function getLyallbayData () {
  const coors = '&q=-41.333553,174.798925'
  return request.get(`${baseUrl}${key}${format}${coors}${tide}`)
    .then(res => {
      return res.body.data.weather
    })
}
