import React from 'react'
import { connect } from 'react-redux'

import Home from './Home'
import NorthIslandList from './NorthIslandList'
import SouthIslandList from './SouthIslandList'
import HawkesBay from './HawkesBay'
import Forecast from './Forecast'
import Wellington from './Wellington'
import Nav from './Nav'

import { Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div className="app">
      <Nav />
      <Switch>

        <Route path="/northisland/hawkesbay/waimaramabeach" component={Forecast} />
        <Route path="/northisland/hawkesbay/waipatikibeach" component={Forecast} />
        <Route path="/northisland/hawkesbay/oceanbeach" component={Forecast} />
        <Route path="/northisland/hawkesbay/teawanga" component={Forecast} />

        <Route path="/northisland/wellington/lyallbay" component={Forecast} />

        <Route path="/northisland/hawkesbay" component={HawkesBay} />
        <Route path="/northisland/wellington" component={Wellington} />

        <Route path="/northisland" component={NorthIslandList} />
        <Route path="/southisland" component={SouthIslandList} />

        <Route exact path="/" component={Home} />

      </Switch>
    </div>
  )
}

export default connect()(App)
