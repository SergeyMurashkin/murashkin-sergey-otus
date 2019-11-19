'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import WeatherApp from './components/weatherApp/WeatherApp.jsx';
import AppMenu from './components/AppMenu.jsx';
import CityInfo from './components/weatherApp/CityInfo.jsx';

const Apps = () => {
return  <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AppMenu}/>
                <Route exact path="/weather-app" component={WeatherApp}/>
                <Route exact path="/weather-app/:city" component={CityInfo}/>
                <Redirect to="/"/>
            </Switch>       
        </BrowserRouter>
}

ReactDOM.render(<Apps />, document.getElementById('app'))



