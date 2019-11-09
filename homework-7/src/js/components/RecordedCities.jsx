import React from 'react';

class RecordedCities extends React.Component{

    constructor(props){
        super(props);

        this.renderCities = this.renderCities.bind(this);
        this.setWantedCitiesToApp = this.setWantedCitiesToApp.bind(this);
    }

    setWantedCitiesToApp(event) {
        this.props.setWantedCity(event.target.innerText)
    }

    renderCities() {
        const recordedCities = this.props.recordedCities;

        return recordedCities.map((city, index) => {
            return <p key={index} onClick={this.setWantedCitiesToApp}>{city}</p>
        });
    }

    render() {
        return (
            <div className="recordedCities">
                <p>Список сохранённых городов:</p>
                {this.renderCities()}
            </div>
        );
    }

}  

export default RecordedCities;