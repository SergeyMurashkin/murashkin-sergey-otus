import React from 'react';

class WeatherApp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            wantedCity: '',
            recordedCities: []
        };

        this.changeCity = this.changeCity.bind(this)
        this.findCity = this.findCity.bind(this);
        this.saveCity = this.saveCity.bind(this);
        this.loadCity = this.loadCity.bind(this);
    }

    componentDidMount() {
        const recordedCities = JSON.parse(localStorage.getItem('recordedCities'));
        this.setState({
            recordedCities: recordedCities === null ? [] : [... new Set(recordedCities)]
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const recordedCities = this.state.recordedCities;
        
        if (recordedCities !== prevState.recordedCities) {
            localStorage.setItem('recordedCities', JSON.stringify(recordedCities));
        }
    }

    changeCity(event) {
        this.setState({
            wantedCity: event.target.value
        })
    }

    findCity() {
        const wantedCity = this.state.wantedCity;
        this.props.history.push(`/weather-app/${wantedCity.toLowerCase()}`);
    }

    saveCity() {
        const wantedCity = this.state.wantedCity.toUpperCase();
        const recordedCities = this.state.recordedCities;

        recordedCities.push(wantedCity);
        let newRecordedCities = [... new Set(recordedCities)].sort()

        this.setState({
            recordedCities: newRecordedCities
        })
    }

    loadCity(event){
        this.props.history.push(`/weather-app/${event.target.innerText.toLowerCase()}`);
    }

    render() {
        return (
            <div className="weatherApp" style={{display:"flex", flexDirection: "row"}} >
                <div className="weatherBar" style={{marginRight: "50px"}} >
                    <div className="searchBar">
                        <input type="text" onChange={this.changeCity}/>
                        <input type="button" value="Найти" onClick={this.findCity}/>
                        <input type="button" value="Сохранить" onClick={this.saveCity}/>
                    </div>
                    <div className="recordedCities">
                        <p>Список сохранённых городов:</p>
                        {(() => {
                                return this.state.recordedCities.map((city, index) => {
                                    return <p key={index} onClick={this.loadCity}>{city}</p>
                                });
                            })()}
                    </div>
                </div>
            </div>
        );
    }

}  

export default WeatherApp;