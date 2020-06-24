import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import { Weather } from './components'
import reducer, { Actions } from './reducers/'

const store = createStore(reducer)
const rootEl = document.getElementById('root')

export const WeatherApp = () => ReactDOM.render(
  <Weather
    value={store.getState()}
    setCity={(wantedCity) => store.dispatch({ type: Actions.SETCITY, wantedCity: wantedCity})}
    setWeather={(weather) => store.dispatch({ type: Actions.SETWEATHER, weather: weather})}
    setCities={(recordedCities) => store.dispatch({ type: Actions.SETCITIES, recordedCities: recordedCities})}
  />,
  rootEl
)

store.subscribe(WeatherApp)
