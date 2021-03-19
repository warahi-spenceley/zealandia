import { combineReducers } from 'redux'

import hawkesBayForecast from './hawkesBayForecast'
import hawkesBayBeaches from './hawkesBayBeaches'
import wellingtonForecast from './wellingtonForecast'
import wellingtonSpots from './wellingtonSpots'

export default combineReducers({
  hawkesBayForecast,
  hawkesBayBeaches,
  wellingtonForecast,
  wellingtonSpots
})
