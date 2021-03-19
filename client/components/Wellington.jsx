import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { setLyallbay } from '../actions/wellingtonSpots'

function Wellington ({ dispatch }) {
  function handleLyallbayClick () {
    dispatch(setLyallbay(true))
  }
  return (
    <>
      <h1>Wellington</h1>
      <ul>
        <Link onClick={handleLyallbayClick} to="/northisland/wellington/lyallbay">Lyall Bay</Link>
      </ul>
    </>
  )
}

export default connect()(Wellington)
