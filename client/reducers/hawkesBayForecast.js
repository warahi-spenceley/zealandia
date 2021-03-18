import { SET_WAIMARAMA_FORECAST, SET_WAIPATIKI_FORECAST } from '../actions/hawkesBayForecast'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WAIMARAMA_FORECAST:
      return action.data

    case SET_WAIPATIKI_FORECAST:
      return action.data

    default:
      return state
  }
}

export default reducer
