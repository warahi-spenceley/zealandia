import { SET_LYALLBAY } from '../actions/wellingtonSpots'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LYALLBAY:
      return {
        lyallbay: action.stateAvai
      }

    default:
      return state
  }
}

export default reducer
