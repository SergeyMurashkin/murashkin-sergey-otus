import React, { Component } from 'react'
//import { disconnect } from 'cluster';

export class Weather extends Component {
  constructor(props) {
    super(props);

    this.findCity = this.findCity.bind(this);
    this.saveWantedCity = this.saveWantedCity.bind(this);
    this.setWantedCity = this.setWantedCity.bind(this);
  }

  componentDidMount() {
    const recordedCities = JSON.parse(localStorage.getItem('recordedCities'));

    if (recordedCities === null) {
        this.props.setCities([])
    } else {
        this.props.setCities([... new Set(recordedCities)])
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    const wantedCity = this.props.value.wantedCity;
    const recordedCities = this.props.value.recordedCities;

    if (wantedCity !== prevProps.value.wantedCity) {
      const appId = '4ce1f31f6857e32e92a5c13416fb9ce5';
      const path = `http://api.openweathermap.org/data/2.5/weather?q=${wantedCity}&APPID=${appId}`;

      this.props.setWeather('загружаю данные...');

      fetch(path)
          .then(res => res.json())
          .then(
              (result) => {
                  if (result.cod === 200) {
                      this.props.setWeather(result);
                  } else {
                    this.props.setWeather(null);
                  }
              },
              (error) => {
                this.props.setWeather(null);
              }
          );
    }

    if (recordedCities !== prevProps.value.recordedCities) {
      localStorage.setItem('recordedCities', JSON.stringify(recordedCities));
    }

  }

  saveWantedCity() {
    const wantedCity = document.getElementById('wantedCity').value;
    const recordedCities = this.props.value.recordedCities;
    let newRecordedCities = [... new Set([...recordedCities, wantedCity])].sort()

    this.props.setCities(newRecordedCities)
  }

  findCity() {
    const city = document.getElementById('wantedCity').value;
    this.props.setCity(city);
  }

  setWantedCity(event) {
    const city = event.target.innerText;
    this.props.setCity(city);
  }

  renderCities() {
    const recordedCities = this.props.value.recordedCities;

    return recordedCities.map((city, index) => {
        return <p key={index} onClick={this.setWantedCity}>{city}</p>
    });
  }

  renderWeather() {
    const { value } = this.props;

    let weather = <div></div>;
    if (value.weather === null) {
      weather = <div>Для данного города отсутствует прогноз погоды</div>;
    } else if (typeof(value.weather) === 'string') {
      weather = <div>{value.weather}</div>
    } else {
      weather = 
      <div>
        <p>Город: {value.weather.name}</p>
        <p>Температура: {Math.round(value.weather.main.temp - 273.15)}&deg;C</p>
      </div>
    }

    return weather;
  }

  render() {

    return (
      <div style={{display:"flex", flexDirection: "row"}}>
        <div style={{marginRight: "50px"}}>
          <div className="searchBar">
            <input type="text" id="wantedCity"/>
            <input type="button" value="Найти" onClick={this.findCity}/>
            <input type="button" value="Сохранить" onClick={this.saveWantedCity}/>
          </div>
          <div className="recordedCities">
            <p>Список сохранённых городов:</p>
            {this.renderCities()}
          </div>
        </div>
        {this.renderWeather()}
      </div>
    )
  }

}
