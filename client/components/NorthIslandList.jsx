import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { setWaimarama, setWaipatiki, setOceanbeach, setTeawanga } from '../actions/hawkesbayPlaces'

import { setLyallbay } from '../actions/wellingtonPlaces'

function NorthIslandList ({ dispatch }) {
  // Hawkes Bay
  function handleWaimaramaClick () {
    dispatch(setWaimarama(true))
  }
  function handleWaipatikiClick () {
    dispatch(setWaipatiki(true))
  }
  function handleOceanbeachClick () {
    dispatch(setOceanbeach(true))
  }
  function handleTeawangaClick () {
    dispatch(setTeawanga(true))
  }
  // Wellington
  function handleLyallbayClick () {
    dispatch(setLyallbay(true))
  }
  return (
    <>
      <div className="northIslandList">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-3">
              <div className="region-heading">
                <h5>Northland</h5>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="region-heading">
                <h5>Auckland</h5>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="region-heading">
                <h5>Waikato</h5>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="region-heading">
                <h5>Bay Of Plenty</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3">
                <div className="region-heading">
                  <h5>Gisborne</h5>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="region-heading">
                  <h5>Hawke&#39;s Bay</h5>
                </div>
                <ul>
                  <Link onClick={handleWaimaramaClick} to="/northisland/hawkesbay/waimaramabeach">Waimarama Beach</Link>
                </ul>
                <ul>
                  <Link onClick={handleWaipatikiClick} to="/northisland/hawkesbay/waipatikibeach">Waipatiki Beach</Link>
                </ul>
                <ul>
                  <Link onClick={handleOceanbeachClick} to="/northisland/hawkesbay/oceanbeach">Ocean Beach</Link>
                </ul>
                <ul>
                  <Link onClick={handleTeawangaClick} to="/northisland/hawkesbay/teawanga">Te Awanga Point</Link>
                </ul>
              </div>
              <div className="col-sm-3">
                <div className="region-heading">
                  <h5>Wellington</h5>
                </div>
                <ul>
                  <Link onClick={handleLyallbayClick} to="/northisland/wellington/lyallbay">Lyall Bay</Link>
                </ul>
              </div>
              <div className="col-sm-3">
                <div className="region-heading">
                  <h5>Wanganui</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <div className="region-heading">
                    <h5>Taranaki</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect()(NorthIslandList)
