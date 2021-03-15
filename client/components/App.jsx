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
        <div className="container">
          <img src="/images/logo.png" alt="app-logo" className="logo"/>
        </div>

        <div className="col pe-3 py-3 ps-3 ps-md-0">
          <form className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-2 text-midnight"> 
          <input
            type="text"
            className="form-control"
            name="search"
            placeholder="search"
          />  
          </form>
        </div>

        <div className="north-island img-fluid rounded float-end">
          <img src="/images/north_island.png" alt="north-island-link"/>
        </div>
        <div className="container">
          <p>agsdrvsdrvsdrv sdbrsd rbvsdr bsdr b sdrb dsrb dsr bsdr b sdrb sdr b sdrb sdr bsdr bs drb sdr bsdr bsd rb sdrb sd bdsr bdsr bds rb dsrb sdr bsdr bsd rb dsrb sdrb sdb dsr bdsr bsd rb sdrb</p>
        </div>
        <div className="south-island img-fluid rounded float-end">
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
