import { SET_WAIMARAMA, SET_WAIPATIKI, SET_OCEANBEACH, SET_TEAWANGA } from '../actions/hawkesbayPlaces'

import { SET_LYALLBAY } from '../actions/wellingtonPlaces'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Hawke's Bay
    case SET_WAIMARAMA:
      return {
        waimarama: action.stateAvai
      }
    case SET_WAIPATIKI:
      return {
        waipatiki: action.stateAvai
      }
    case SET_OCEANBEACH:
      return {
        oceanbeach: action.stateAvai
      }
    case SET_TEAWANGA:
      return {
        teawanga: action.stateAvai
      }
      
    // Wellington
    case SET_LYALLBAY:
      return {
        lyallbay: action.stateAvai
      }

    default:
      return state
  }
}

export default reducer
