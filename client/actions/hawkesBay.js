import { getWaimaramaData, getWaipatikiData } from '../apis/hawkesBay'

export const SET_WAIMARAMA = 'SET_WAIMARAMA'
export const SET_WAIPATIKI = 'SET_WAIPATIKI'

export function setWaimaramaData (data) {
  return {
    type: SET_WAIMARAMA,
    data
  }
}

export function setWaipatikiData (data) {
  return {
    type: SET_WAIPATIKI,
    data
  }
}

export function fetchWaimaramaData () {
  return dispatch => {
    return getWaimaramaData()
      .then(data => {
        dispatch(setWaimaramaData(data))
        return null
      })
  }
}

export function fetchWaipatikiData () {
  return dispatch => {
    return getWaipatikiData()
      .then(data => {
        dispatch(setWaipatikiData(data))
        return null
      })
  }
}
