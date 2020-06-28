'use strict';

import '../styles/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Menu from './components/Menu.jsx';
import Game from './components/Game.jsx';

const Apps = () => {
return  <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Menu}/>
                <Route exact path="/game" component={Game}/>
                <Redirect to="/"/>
            </Switch>       
        </BrowserRouter>
}

ReactDOM.render(<Apps/>, document.getElementById('app'))