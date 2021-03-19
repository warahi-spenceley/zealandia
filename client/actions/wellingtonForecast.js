import { getLyallbayData } from '../apis/wellington'

export const SET_LYALLBAY_FORECAST = 'SET_LYALLBAY_FORECAST'

export function setLyallbayForecast (data) {
  return {
    type: SET_LYALLBAY_FORECAST,
    data
  }
}

export function fetchLyallbayForecast () {
  return dispatch => {
    return getLyallbayData()
      .then(data => {
        dispatch(setLyallbayForecast(data))
        return null
      })
  }
}
