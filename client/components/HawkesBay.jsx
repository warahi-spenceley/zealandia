import React from 'react'
import { connect } from 'react-redux'

function HawkesBay ({ hawkesBay }) {
  return (
    <>
      <h1>Hawke's Bay</h1>
      <ul>
        <li>Waimarama Beach</li>
        <li>Ocean Beach</li>
        <li>Waipatiki Beach</li>
        <li>Te Awanga Point</li>
      </ul>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    hawkesBay: globalState.hawkesBay
  }
}

export default connect(mapStateToProps)(HawkesBay)
