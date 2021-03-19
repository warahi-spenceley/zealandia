import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { setWaimarama, setWaipatiki } from '../actions/hawkesBayBeaches'

function HawkesBay ({ dispatch }) {
  function handleWaimaramaClick () {
    dispatch(setWaimarama(true))
  }

  function handleWaipatikiClick () {
    dispatch(setWaipatiki(true))
  }
  return (
    <>
      <h1>Hawke&#39;s Bay</h1>
      <ul>
        <Link onClick={handleWaimaramaClick} to="/northisland/hawkesbay/waimaramabeach">Waimarama Beach</Link>
      </ul>
      <ul>
        <Link onClick={handleWaipatikiClick} to="/northisland/hawkesbay/waipatikibeach">Waipatiki Beach</Link>
      </ul>
    </>
  )
}

export default connect()(HawkesBay)
