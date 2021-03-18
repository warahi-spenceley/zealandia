import { SET_WAIMARAMA, SET_WAIPATIKI } from '../actions/hawkesBay'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WAIMARAMA:
      return action.data
    case SET_WAIPATIKI:
      return action.data
    default:
      return state
  }
}

export default reducer
