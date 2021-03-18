import { SET_WAIMARAMA, SET_WAIPATIKI } from '../actions/hawkesBayBeaches'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WAIMARAMA:
      return {
        waimarama: action.stateAvai
      }

    case SET_WAIPATIKI:
      return {
        waipatiki: action.stateAvai
      }

    default:
      return state
  }
}

export default reducer
