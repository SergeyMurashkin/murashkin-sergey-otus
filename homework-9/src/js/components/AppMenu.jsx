import React from 'react';
import {Link} from 'react-router-dom';

class AppMenu extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="menu">
                <Link to='/weather-app'>Weather App</Link>
            </div>
        );
    }

}  

export default AppMenu;