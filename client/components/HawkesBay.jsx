import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

function HawkesBay () {
  return (
    <>
      <h1>Hawke&#39;s Bay</h1>
      <ul>
        <Link to="/northisland/hawkesbay/waimaramabeach">Waimarama Beach</Link>
      </ul>
    </>
  )
}

export default connect()(HawkesBay)
