import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchWaimaramaForecast, fetchWaipatikiForecast, fetchOceanbeachForecast, fetchTeawangaForecast } from '../actions/hawkesBayForecast'

import { fetchLyallbayForecast } from '../actions/wellingtonForecast'

function Forecast ({
  dispatch, forecast,
  // Hawke's Bay
  waimarama, waipatiki, oceanbeach, teawanga,
  // Wellington
  lyallbay
}) {
  useEffect(() => {
    // Hawke's Bay
    if (waimarama) {
      dispatch(fetchWaimaramaForecast())
    } else if (waipatiki) {
      dispatch(fetchWaipatikiForecast())
    } else if (oceanbeach) {
      dispatch(fetchOceanbeachForecast())
    } else if (teawanga) {
      dispatch(fetchTeawangaForecast())
    // Wellington
    } else if (lyallbay) {
      dispatch(fetchLyallbayForecast())
    }
  }, [])
  return (
    <>
      {/* Hawke's Bay */}
      {waimarama === true && (
        <h1>Waimarama Beach</h1>
      )}
      {waipatiki === true && (
        <h1>Waipatiki Beach</h1>
      )}
      {oceanbeach === true && (
        <h1>Ocean Beach</h1>
      )}
      {teawanga === true && (
        <h1>Te Awanga Point</h1>
      )}
      {/* Wellington */}
      {lyallbay === true && (
        <h1>Lyall Bay</h1>
      )}

      <table className="table table-info ">
        {forecast.map(day => (
          <React.Fragment key={day.date}>
            <thead>
              <tr>
                <th>{day.date}</th>
              </tr>
            </thead>
            {day.astronomy.map(astro => (
              <React.Fragment key={astro.sunrise}>
                <thead>
                  <tr>
                    <th>Sunrise{astro.sunrise}</th>
                    <th>Sunset</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <td>{astro.sunrise}</td>
                    <td>{astro.sunset}</td>
                  </tr>
                </tfoot>
              </React.Fragment>
            ))}
            <thead>
              <tr>
                <th>Tides</th>
                <th></th>
              </tr>
            </thead>
            {day.tides.map(tides => (
              tides.tide_data.map(tidesData => (
                <React.Fragment key={tidesData.tideTime}>
                  <tfoot>
                    <tr>
                      <td>{tidesData.tide_type}</td>
                      <td>{tidesData.tideTime}</td>
                    </tr>
                  </tfoot>
                </React.Fragment>
              ))
            ))}
            <thead>
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
                <th></th>
              </tr>
            </thead>
            {day.hourly.map(hour => (
              <React.Fragment key={hour.time}>
                <tfoot>
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
                      <React.Fragment key={icon.value}>
                        <td>
                          <img src={icon.value} alt="weather icon" width="40" height="40"></img>
                        </td>
                      </React.Fragment>
                    ))}
                  </tr>
                </tfoot>
              </React.Fragment>
              
            ))}
          </React.Fragment>
        ))}
      </table>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    forecast: globalState.forecast,
    waimarama: globalState.stateAvai.waimarama,
    waipatiki: globalState.stateAvai.waipatiki,
    oceanbeach: globalState.stateAvai.oceanbeach,
    teawanga: globalState.stateAvai.teawanga,
    lyallbay: globalState.stateAvai.lyallbay
  }
}

export default connect(mapStateToProps)(Forecast)
