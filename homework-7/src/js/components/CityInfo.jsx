import React from 'react';

class CityInfo extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        const weather = this.props.weather;

        return (
            <div className="cityInfo">
                <p>Город: {weather.name}</p>
                <p>Температура: {Math.round(weather.main.temp - 273.15)}&deg;C</p>
            </div>
        );
    }

}  

export default CityInfo;