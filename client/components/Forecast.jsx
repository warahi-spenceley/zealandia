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
  function isHawkesbay () {
    if (waimarama || waipatiki || oceanbeach || teawanga) {
      return true
    } else return false
  }

  function isWellington () {
    if (lyallbay) {
      return true
    } else return false
  }

  function hawkesbaySwellQuality (swelldeg) {
    if (swelldeg > 55 && swelldeg < 124) {
      return '/images/wind-and-swell/swell-good.png'
    } else if (swelldeg > 11 && swelldeg > 169) {
      return '/images/wind-and-swell/swell-bad.png'
    } else return '/images/wind-and-swell/swell-mediocre.png'
  }

  function hawkesbayWindQuality (winddeg) {
    if (winddeg > 11 && winddeg < 169) {
      return '/images/wind-and-swell/wind-good.png'
    } else if (winddeg > 55 && winddeg < 124) {
      return '/images/wind-and-swell/wind-bad.png'
    } else return '/images/wind-and-swell/wind-mediocre.png'
  }

  function wellingtonSwellQuality (swelldeg) {
    if (swelldeg > 122 && swelldeg < 191) {
      return '/images/wind-and-swell/swell-good.png'
    } else if (swelldeg > 77 && swelldeg < 169) {
      return '/images/wind-and-swell/swell-bad.png'
    } else return '/images/wind-and-swell/swell-mediocre.png'
  }

  function wellingtonWindQuality (winddeg) {
    if (winddeg > 122 && winddeg < 191) {
      return '/images/wind-and-swell/wind-bad.png'
    } else if (winddeg > 77 && winddeg < 169) {
      return '/images/wind-and-swell/wind-good.png'
    } else return '/images/wind-and-swell/wind-mediocre.png'
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
              <h4 className="hour-day-name">{new Date(day.date).toLocaleString('en-us', { weekday: 'long' })}</h4>
              {day.astronomy.map(astro => (
                <React.Fragment key={astro.sunrise}>
                  <div className="col-sm-3">
                    <table className="table table-light table-hover table-borderless border border-3 table-sm table">
                      <thead>
                        <tr className="table-warning">
                          <th>Sunrise</th>
                          <th>Sunset</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><small>{astro.sunrise}</small></td>
                          <td><small>{astro.sunset}</small></td>
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
                          <td><small>{day.uvIndex}</small></td>
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
                                <td><small>{tidesData.tide_type}</small></td>
                                <td><small>{tidesData.tideTime}</small></td>
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
                <table className="table table-light table-hover table-borderless border border-3 table-sm">
                  <thead>
                    <tr className="table table-primary">
                      <th className="table-info">Time</th>
                      <th>Swell</th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th className="table-success">Wind</th>
                      <th className="table-success"></th>
                      <th className="table-success"></th>
                      <th className="table-success"></th>
                      <th className="table-success"></th>
                      <th className="table-warning">temp&#176;</th>
                      <th className="table-warning"></th>
                      <th className="table-warning"></th>
                    </tr>
                  </thead>
                  <thead>
                    <tr className="table table-secondary">
                      <th>12<small>hr</small></th>
                      <th>height</th>
                      <th>dir</th>
                      <th></th>
                      <th></th>
                      <th>period</th>
                      <th>dir</th>
                      <th></th>
                      <th></th>
                      <th>speed</th>
                      <th>gust</th>
                      <th>land&#176;</th>
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
                          {isHawkesbay() && (
                            <td><img src={hawkesbaySwellQuality(hour.swellDir)} className="swell-quality-img"></img></td>
                          )}
                          {isWellington() && (
                            <td><img src={wellingtonSwellQuality(hour.swellDir)} className="swell-quality-img"></img></td>
                          )}
                          <td><small>{hour.swellDir16Point}</small></td>
                          <td><small>{hour.swellDir}&#176;</small></td>
                          <td>{hour.swellPeriod_secs}<small>secs</small></td>
                          {isHawkesbay() && (
                            <td><img src={hawkesbayWindQuality(hour.winddirDegree)} className="wind-quality-img"></img></td>
                          )}
                          {isWellington() && (
                            <td><img src={wellingtonWindQuality(hour.winddirDegree)} className="wind-quality-img"></img></td>
                          )}             
                          <td><small>{hour.winddir16Point}</small></td>
                          <td><small>{hour.winddirDegree}&#176;</small></td>
                          <td><small>{hour.windspeedKmph}kph</small></td>
                          <td><small>{hour.WindGustKmph}kph</small></td>
                          <td><small>{hour.tempC}&#176;</small></td>
                          <td><small>{hour.waterTemp_C}&#176;</small></td>
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
