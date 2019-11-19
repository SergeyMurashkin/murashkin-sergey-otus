import React from 'react';

import CityNotFound from './CityNotFound.jsx'
import Preloader from './Preloader.jsx'

class CityInfo extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            weather: '',
            wantedCity: this.props.match.params.city
        }
    }

    componentDidMount() {
        const wantedCity = this.state.wantedCity;
        
        const appId = '4ce1f31f6857e32e92a5c13416fb9ce5';
        const path = `http://api.openweathermap.org/data/2.5/weather?q=${wantedCity}&APPID=${appId}`;

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

    render() {
        const weather = this.state.weather;

        if (weather === null) {
            return <CityNotFound />
        } else if (typeof(weather) === "string") {
            return <Preloader />
        } else {    
            return (
                <div className="cityInfo">
                    <p>Город: 
                        {weather.name}
                    </p>
                    <p>Температура: 
                        {Math.round(weather.main.temp - 273.15)}&deg;C
                    </p>
                </div>
            );
        }
    }

}  

export default CityInfo;