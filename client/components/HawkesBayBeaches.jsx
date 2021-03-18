import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { fetchWaimaramaData, fetchWaipatikiData } from '../actions/hawkesBay'

function HawkesBayBeaches ({ dispatch, forecast }) {
  const [beach, setBeach] = useState({
    waimarama: true,
    waipatiki: false
  })
  useEffect(() => {
    if (beach.waimarama) {
      dispatch(fetchWaimaramaData())
    } else if (beach.waipatiki) {
      dispatch(fetchWaipatikiData())
    }
  }, [])
  return (
    <>
      {beach.waimarama === true && (
        <h1>Waimarama Beach</h1>
      )}

      {beach.waipatiki === true && (
        <h1>Waipatiki Beach</h1>
      )}

      <table>
        {forecast.map(day => (
          <>
            <tr>
              <th>{day.date}</th>
            </tr>

            {day.astronomy.map(astro => (
              <>
                <tr>
                  <th>Sunrise</th>
                  <th>Sunset</th>
                </tr>
                <tr>
                  <td>{astro.sunrise}</td>
                  <td>{astro.sunset}</td>
                </tr>
              </>
            ))}
            <tr>
              <th>Tides</th>
              <th></th>
            </tr>
            {day.tides.map(tides => (
              tides.tide_data.map(tidesData => (
                <>
                  <tr>
                    <td>{tidesData.tideTime}</td>
                    <td>{tidesData.tide_type}</td>
                  </tr>
                </>
              ))
            ))}

            <tr>
              <th>Time</th>
              <th>Swell</th>
              <th></th>
              <th></th>
              <th></th>
              <th>Wind</th>
              <th></th>
              <th></th>

              <th>temp&#176;</th>
              <th>water&#176;</th>

            </tr>

            {day.hourly.map(hour => (
              <>

                <tr>
                  <td>{hour.time}</td>
                  <td>{hour.swellHeight_ft} ft</td>
                  <td>{hour.swellDir16Point}</td>
                  <td>{hour.swellDir}&#176;</td>
                  <td>{hour.swellPeriod_secs}s</td>

                  <td>{hour.winddir16Point}</td>
                  <td>{hour.winddirDegree}&#176;</td>
                  <td>{hour.windspeedKmph}k/ph</td>

                  <td>{hour.tempC}&#176;</td>
                  <td>{hour.waterTemp_C}&#176;</td>

                  {hour.weatherIconUrl.map(icon => (
                    <td>
                      <img src={icon.value} alt="weather icon"></img>
                    </td>
                  ))}
                </tr>
              </>
            ))}
          </>
        ))}
      </table>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    forecast: globalState.hawkesBay
  }
}

export default connect(mapStateToProps)(HawkesBayBeaches)
