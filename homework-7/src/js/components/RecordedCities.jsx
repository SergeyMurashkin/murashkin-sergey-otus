import React from 'react';

class RecordedCities extends React.Component{

    constructor(props){
        super(props);

        this.setWantedCitiesToApp = this.setWantedCitiesToApp.bind(this);
    }

    setWantedCitiesToApp(event) {
        this.props.setWantedCity(event.target.innerText)
    }

    render() {

        return (
            <div className="recordedCities">
                <p>Список сохранённых городов:</p>
                {
                    (() => {
                        return this.props.recordedCities.map((city, index) => {
                            return <p key={index} onClick={this.setWantedCitiesToApp}>{city}</p>
                        });
                    })()
                }
            </div>
        );
    }

}  

export default RecordedCities;