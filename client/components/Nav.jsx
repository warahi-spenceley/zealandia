import React from 'react'
import { connect } from 'react-redux'

function Nav () {
  return (
    <>
      <div className='home'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-1">
              <img src="/images/logo.png" alt="app-logo" className="logo"/>
            </div>
            <div className="col-sm-1">
            </div>
            <div className="col-sm-8 search-bar pe-3 py-3 ps-3 ps-md-0">
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
      </div>
    </>
  )
}

export default connect()(Nav)
