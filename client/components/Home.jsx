import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

function Home () {
  return (
    <>
      <div className='home'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src="/images/homepage/logo.png" alt="app-logo" className="logo"/>
            </div>
            <div className="col-sm-10 search-bar pe-3 py-3 ps-3 ps-md-0">
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7 about-nz">
              <p>
                Composed of North and South islands. Ludicrously long uncrowded points, reefs and beach breaks deliver waves year-round from the Roaring 40s as swells pump up from the Antarctic. This variegated, island coastline invariably offers options whatever the wind and swell are doing, with the West coast rarely flat, but can be too big or too windy and the easy coast less consistent but predominantly offshore and lit up by cyclone season swells. Winter being the most consistent period with swell arriving with wind from the south and east. In summer the occasional north-east swell will swing down the pacific. The North Island is warmer but less consistent than the south. Temperatures vary from sub tropical in to chilly accordingly 10-20°C or 50-68°F. The indigenous Maori first surfed here prior to being banned by overzealous missionaries, Duke Kahanamoku then reinvigorated the scene in 1915.
              </p>
            </div>
            <div className="north-island col-sm-4">
              <Link to="/northisland"><img src="/images/homepage/north_island.png" alt="north-island-link"/></Link>
            </div>
            <div className="south-island float-end">
              <Link to="/southisland"><img src="/images/homepage/south_island.png" alt="south island link"/></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default connect()(Home)
