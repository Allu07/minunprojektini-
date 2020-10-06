import React, {Component} from 'react'

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <div className="Weather_focused">
          <div className="Weather_day">ti</div>
          <div className="Weather_time">9.00</div>
          <div className="Weather_temp">9°</div>
          <img src='http://openweathermap.org/img/wn/09d.png' alt="logo" />
        </div>
      </div>
    )
  }
}
export default Weather
