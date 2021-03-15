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
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src="/images/logo.png" alt="app-logo" className="logo"/>
            </div>
            <div className="search-bar col-sm-10 pe-3 py-3 ps-3 ps-md-0">
              <form className="bg-white shadow-sm rounded-3 px-3 pb-3 pt-2 text-midnight">
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  placeholder="search"
                />
              </form>
            </div>
          </div>
        </div>

        <div className="north-island float-end">
          <img src="/images/north_island.png" alt="north-island-link"/>
        </div>
        <div className="south-island float-end">
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
