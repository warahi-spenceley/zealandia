import request from 'superagent'

const baseUrl = 'http://api.worldweatheronline.com/premium/v1/marine.ashx'
const format = '&format=json'
const tide = '&tide=yes'
const key = '?&key=e2d788c2011f4c7787c13418211603'

export function getWaimaramaData () {
  const coors = '&q=-39.8148531,176.9923951'
  return request.get(`${baseUrl}${key}${format}${coors}${tide}`)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}

getWaimaramaData().then(console.log())
