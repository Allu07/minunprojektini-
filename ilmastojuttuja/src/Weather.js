import React, {Component} from 'react'
import {getForecast} from './requests'
import './Weather.css'
class Weather extends Component {
  constructor(props){
    super(props)
    this.state ={
      forecasts: null,
      focusedForecastDt: null,
    }
  }
  componentDidMount(){
    getForecast().then(forecasts=> {
      console.log(forecasts) //TESTING
      this.setState({ forecasts:forecasts, focusedForecastDt: forecasts.list[0].dt})
    })
  }


  formatDay = timestamp => {
    const datetime = new Date(timestamp*1000)
    const day = datetime.getDate()
    const month = datetime.getMonth()+1
    return day + ',' + month
  }

  formatTime = timestamp => {
    const datetime = new Date(timestamp*1000)
    const hours = datetime.getHours()
    let minutes = datetime.getMinutes()
    if (minutes <10) {
      minutes = '0' + minutes
    }
    return hours + ':' + minutes
  }

  renderWeatherItem(forecast) {
    return(
      <div className="Weather">
          <div className="Weather_day">{this.formatDay(forecast.dt)}</div>
          <div className="Weather_time">{this.formatTime(forecast.dt)}</div>
          <div className="Weather_temp">{Math.round(forecast.main.temp)}°</div>
        <img src={'http://openweathermap.org/img/wn/'+forecast.weather[0].icon+'.png'} alt="logo" />
      </div>
    )
  }

  render() {
    const forecasts = this.state.forecasts
    if (!forecasts) return null
    console.log(forecasts)
    const focusedForecastDt= this.state.focusedForecastDt
    const focusedWeather = forecasts.list.find(f => f.dt === focusedForecastDt)

    return (
      <div className="Weather">
        <div className="Weather_focused">
          <div className="Weather_day">{this.formatDay(focusedWeather.dt)}</div>
          <div className="Weather_time">{focusedWeather.dt}</div>
          <div className="Weather_temp">{focusedWeather.main.temp}</div>
          <div className="Weather_desc">{focusedWeather.weather[0].description}</div>
          <img src={'http://openweathermap.org/img/wn/'+focusedWeather.weather[0].icon+'.png'} alt="logo"/>
        </div>

        <div className="Weather_forecast">
        {forecasts.list.map(forecast => this.renderWeatherItem(forecast))}
        </div>

      </div>
    )
  }
}

export default Weather
