import { SET_LYALLBAY_FORECAST } from '../actions/wellingtonForecast'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LYALLBAY_FORECAST:
      return action.data

    default:
      return state
  }
}

export default reducer
