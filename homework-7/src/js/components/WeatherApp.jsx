import React from 'react';

import SearchBar from './SearchBar.jsx';
import RecordedCities from './RecordedCities.jsx';
import CityInfo from './CityInfo.jsx';
import Preloader from './Preloader.jsx';
import CityNotFound from './CityNotFound.jsx';

class WeatherApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            wantedCity: '',
            recordedCities: [],
            weather: null
        };

        this.setWantedCity = this.setWantedCity.bind(this);
        this.saveWantedCity = this.saveWantedCity.bind(this);
        this.renderWeather = this.renderWeather.bind(this);
    }

    componentDidMount() {
        const recordedCities = JSON.parse(localStorage.getItem('recordedCities'));
        this.setState({
            recordedCities: recordedCities === null ? [] : [... new Set(recordedCities)]
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const wantedCity = this.state.wantedCity;
        const recordedCities = this.state.recordedCities;
        
        if (wantedCity !== prevState.wantedCity) {
            const appId = '4ce1f31f6857e32e92a5c13416fb9ce5';
            const path = `http://api.openweathermap.org/data/2.5/weather?q=${wantedCity}&APPID=${appId}`;

            this.setState({
                weather: 'загружаю данные...'
            });

            fetch(path)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            weather: result.cod === 200 ? result : null
                        });
                    },
                    (error) => {
                        this.setState({
                            weather: null
                        });
                    }
                );
        }

        if (recordedCities !== prevState.recordedCities) {
            localStorage.setItem('recordedCities', JSON.stringify(recordedCities));
        }
    }

    setWantedCity(wantedCity) {
        this.setState({
            wantedCity: wantedCity
        });
    }

    saveWantedCity(wantedCity) {
        const recordedCities = this.state.recordedCities;
        recordedCities.push(wantedCity);
        let newRecordedCities = [... new Set(recordedCities)].sort()

        this.setState({
            recordedCities: newRecordedCities
        })
    }

    renderWeather() {
        const weather = this.state.weather;
        if (weather === null) {
            return <CityNotFound />
        } else if (typeof(weather) === "string") {
            return <Preloader />
        } else {    
            return <CityInfo weather={weather} />
        }
    }

    render() {
        return (
            <div className="weatherApp" style={{display:"flex", flexDirection: "row"}} >
                <div className="weatherBar" style={{marginRight: "50px"}} >
                    <SearchBar  setWantedCity={this.setWantedCity} saveWantedCity={this.saveWantedCity} />
                    <RecordedCities recordedCities={this.state.recordedCities} setWantedCity={this.setWantedCity} />
                </div>
                {this.renderWeather()}
            </div>
        );
    }

}  

export default WeatherApp;