import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchFruits } from '../actions'

function App (props) {
  useEffect(() => {
    props.dispatch(fetchFruits())
  }, [])

  return (
    <>
      <div className='app'>
        <div className="logo">
          <img src="/images/logo.png" alt="app-logo"/>
        </div>
        <div className="north island">
          <img src="/images/north_island.png" alt="north-island-link"/>
        </div>
        <div className="south island">
          <img src="/images/south_island.png" alt="south-island-link"/>
        </div>
        <ul>
          {props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
