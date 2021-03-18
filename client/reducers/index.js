import { combineReducers } from 'redux'

import hawkesBayForecast from './hawkesBayForecast'
import hawkesBayBeaches from './hawkesBayBeaches'

export default combineReducers({
  hawkesBayForecast,
  hawkesBayBeaches
})
