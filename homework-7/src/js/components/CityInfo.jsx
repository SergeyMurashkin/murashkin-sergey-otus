import React from 'react';

class CityInfo extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        const weather = this.props.weather;

        if (weather === null) {
            return (
                <div className="noCityInfo">Для выбранного города отсутствует прогноз погоды</div>
            );
        } else if (typeof(weather) === "string") {
            return (
                <div className="loadCityInfo">{weather}</div>
            );
        } else {
            return (
                <div className="cityInfo">
                    <p>Город: {weather.name}</p>
                    <p>Температура: {Math.round(weather.main.temp - 273.15)}&deg;C</p>
                </div>
            );
        }
    }

}  

export default CityInfo;