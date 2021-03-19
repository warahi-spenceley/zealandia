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
    if (waimarama) {
      dispatch(fetchWaimaramaForecast())
    } else if (waipatiki) {
      dispatch(fetchWaipatikiForecast())
    } else if (lyallbay) {
      dispatch(fetchLyallbayForecast())
    } else if (oceanbeach) {
      dispatch(fetchOceanbeachForecast())
    } else if (teawanga) {
      dispatch(fetchTeawangaForecast())
    }
  }, [])
  return (
    <>
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
      {lyallbay === true && (
        <h1>Lyall Bay</h1>
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
    forecast: globalState.forecast,
    waimarama: globalState.stateAvai.waimarama,
    waipatiki: globalState.stateAvai.waipatiki,
    oceanbeach: globalState.stateAvai.oceanbeach,
    teawanga: globalState.stateAvai.teawanga,
    lyallbay: globalState.stateAvai.lyallbay
  }
}

export default connect(mapStateToProps)(Forecast)
