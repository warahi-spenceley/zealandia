import { getWaimaramaData, getWaipatikiData, getOceanbeachData, getTeAwangaData } from '../apis/hawkesBay'

export const SET_WAIMARAMA_FORECAST = 'SET_WAIMARAMA_FORECAST'
export const SET_WAIPATIKI_FORECAST = 'SET_WAIPATIKI_FORECAST'
export const SET_OCEANBEACH_FORECAST = 'SET_OCEANBEACH_FORECAST'
export const SET_TEAWANGA_FORECAST = 'SET_TEAWANGA_FORECAST'

export function setWaimaramaForecast (data) {
  return {
    type: SET_WAIMARAMA_FORECAST,
    data
  }
}

export function setWaipatikiForecast (data) {
  return {
    type: SET_WAIPATIKI_FORECAST,
    data
  }
}

export function setOceanbeachForecast (data) {
  return {
    type: SET_OCEANBEACH_FORECAST,
    data
  }
}

export function setTeawangaForecast (data) {
  return {
    type: SET_TEAWANGA_FORECAST,
    data
  }
}

export function fetchWaimaramaForecast () {
  return dispatch => {
    return getWaimaramaData()
      .then(data => {
        dispatch(setWaimaramaForecast(data))
        return null
      })
  }
}

export function fetchWaipatikiForecast () {
  return dispatch => {
    return getWaipatikiData()
      .then(data => {
        dispatch(setWaipatikiForecast(data))
        return null
      })
  }
}

export function fetchOceanbeachForecast () {
  return dispatch => {
    return getOceanbeachData()
      .then(data => {
        dispatch(setOceanbeachForecast(data))
        return null
      })
  }
}

export function fetchTeawangaForecast () {
  return dispatch => {
    return getTeAwangaData()
      .then(data => {
        dispatch(setTeawangaForecast(data))
        return null
      })
  }
}
