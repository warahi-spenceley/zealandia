import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

function NorthIslandList () {
  return (
    <>
      <h1>North Island</h1>
      <ul>
        <Link to="/northisland/hawkesbay">Hawke's Bay</Link>
      </ul>
    </>
  )
}

export default connect()(NorthIslandList)
