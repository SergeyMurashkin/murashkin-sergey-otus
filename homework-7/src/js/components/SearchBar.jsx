import React from 'react';

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            wantedCity: this.props.wantedCity
        };

        this.changeWantedCity = this.changeWantedCity.bind(this);
        this.setWantedCityToApp = this.setWantedCityToApp.bind(this);
        this.saveWantedCityToApp = this.saveWantedCityToApp.bind(this);
    }

    changeWantedCity(event) {
        this.setState({
            wantedCity: event.target.value
        })
    }
    
    setWantedCityToApp() {
        this.props.setWantedCity(this.state.wantedCity);
    }

    saveWantedCityToApp() {
        this.props.saveWantedCity(this.state.wantedCity.toUpperCase());
    }

    render() {
        return (
            <div className="searchBar">
                <input type="text" onChange={this.changeWantedCity}/>
                <input type="button" value="Найти" onClick={this.setWantedCityToApp}/>
                <input type="button" value="Сохранить" onClick={this.saveWantedCityToApp}/>
            </div>
        );
    }

}  

export default SearchBar;