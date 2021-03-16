import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchWaimaramaData } from '../actions/hawkesBay'

import Home from './Home'
import NorthIslandList from './NorthIslandList'
import SouthIslandList from './SouthIslandList'
import HawkesBay from './HawkesBay'

import { Switch, Route } from 'react-router-dom'

function App ({ dispatch }) {
  useEffect(() => {
    dispatch(fetchWaimaramaData())
  }, [])

  return (
    <div className="app">
      <Switch>
        <Route path="/northisland/hawkesbay" component={HawkesBay} />
        <Route path="/northisland" component={NorthIslandList} />
        <Route path="/southisland" component={SouthIslandList} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default connect()(App)
