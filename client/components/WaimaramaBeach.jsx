import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchWaimaramaData } from '../actions/hawkesBay'

function WaimaramaBeach ({ dispatch, waimarama }) {
  useEffect(() => {
    dispatch(fetchWaimaramaData())
  }, [])
  return (
    <>
      <h1>Waimarama Beach</h1>
      <table>
          {waimarama.map(day => (
            <>
            <tr>
            <th>{day.date}</th>
            </tr>
              {day.hourly.map(hour => (
                <>
                  <tr>
                    <th>Time</th>
                    <th>swell</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Wind</th>
                    <th></th>
                    <th></th>
                    <th>Gust</th>
                    <th>{hour.weatherDesc.map(desc => (
                    <td>{desc.value}</td>
                  ))}</th>
                  </tr>
                  <tr>
                    <td>{hour.time}</td>
                    <td>{hour.swellHeight_ft} ft</td>
                    <td>{hour.swellDir16Point}</td>
                    <td>{hour.swellDir}&#176;</td>
                    <td>{hour.swellPeriod_secs}s</td>
                    <td>{hour.sigHeight_m}m</td>

                    <td>{hour.winddir16Point}</td>
                    <td>{hour.winddirDegree}&#176;</td>
                    <td>{hour.windspeedKmph} k/ph</td>
                    <td>{hour.WindGustKmph} k/ph</td>

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
    waimarama: globalState.hawkesBay
  }
}

export default connect(mapStateToProps)(WaimaramaBeach)
