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

  function formatTimeShow (hour24) {
    if (hour24 === '0') return '0:00am'
    else if (hour24 === '300') return '3:00am'
    else if (hour24 === '600') return '6:00am'
    else if (hour24 === '900') return '9:00am'
    else if (hour24 === '1200') return '12:00am'
    else if (hour24 === '1500') return '3:00am'
    else if (hour24 === '1800') return '6:00am'
    else if (hour24 === '2100') return '9:00am'
  }

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

      <div className="container-fluid">
        <div className="row">

          {forecast.map(day => (
            <React.Fragment key={day.date}>
              <h4>{new Date(day.date).toLocaleString('en-us', { weekday: 'long' })}</h4>

              {day.astronomy.map(astro => (
                <React.Fragment key={astro.sunrise}>
                  <div className="col-sm-2">
                    <table className="sun-table table table-light table-hover table-borderless border border-3 table-sm table">
                      <thead>
                        <tr className="table-warning">
                          <th>Sunrise</th>
                          <th>Sunset</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{astro.sunrise}</td>
                          <td>{astro.sunset}</td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr className="table-danger">
                          <th>UV Index</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{day.uvIndex}</td>
                          <td></td>
                        </tr>
                      </tbody>
                      <thead>
                        <tr className="table table-info">
                          <th>Tides</th>
                          <th></th>
                        </tr>
                      </thead>
                      {day.tides.map(tides => (
                        tides.tide_data.map(tidesData => (
                          <React.Fragment key={tidesData.tideTime}>
                            <tbody>
                              <tr>
                                <td>{tidesData.tide_type}</td>
                                <td>{tidesData.tideTime}</td>
                              </tr>
                            </tbody>
                          </React.Fragment>
                        ))
                      ))}
                    </table>
                  </div>
                </React.Fragment>
              ))}
              <div className="col-sm-7">
                <table className="hour-table table table-light table-hover table-borderless border border-3 table-sm">
                  <thead>
                    <tr className="table table-secondary">
                      <th className="table-primary"></th>
                      <th className="table-primary">Swell</th>
                      <th className="table-primary"></th>
                      <th className="table-primary"></th>
                      <th className="table-primary"></th>
                      <th className="table-success">Wind</th>
                      <th className="table-success"></th>
                      <th className="table-success"></th>
                      <th className="table-success"></th>
                      <th className="table-success"></th>
                      <th className="table-success"></th>
                      <th className="table-success"></th>
                    </tr>
                  </thead>
                  <thead>
                    <tr className="table table-secondary">
                      <th>Time</th>
                      <th>height</th>
                      <th>Dir</th>
                      <th>Deg</th>
                      <th>Period</th>
                      <th>Dir</th>
                      <th>Deg</th>
                      <th>Speed</th>
                      <th>Gust</th>
                      <th>temp&#176;</th>
                      <th>water&#176;</th>
                      <th></th>
                    </tr>
                  </thead>
                  {day.hourly.map(hour => (
                    <React.Fragment key={hour.time}>
                      <tbody>
                        <tr>
                          <td><small>{formatTimeShow(hour.time)}</small></td>
                          <td>{hour.swellHeight_ft}<small>ft</small></td>
                          <td>{hour.swellDir16Point}</td>
                          <td>{hour.swellDir}&#176;</td>
                          <td>{hour.swellPeriod_secs}<small>secs</small></td>
                          <td>{hour.winddir16Point}</td>
                          <td>{hour.winddirDegree}&#176;</td>
                          <td><small>{hour.windspeedKmph}k/ph</small></td>
                          <td><small>{hour.WindGustKmph}k/ph</small></td>
                          <td>{hour.tempC}&#176;</td>
                          <td>{hour.waterTemp_C}&#176;</td>
                          {hour.weatherIconUrl.map(icon => (
                            <React.Fragment key={icon.value}>
                              <td>
                                <img src={icon.value} className="weather-icon" alt="weather icon" width="30" height="30"></img>
                              </td>
                            </React.Fragment>
                          ))}
                        </tr>
                      </tbody>
                    </React.Fragment>
                  ))}
                </table>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
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
