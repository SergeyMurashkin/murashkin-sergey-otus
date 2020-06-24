export const Actions = {
  SETCITY : 'SETCITY',
  SETWEATHER : 'SETWEATHER',
  SETCITIES : 'SETCITIES'
}

export default (state = {
    wantedCity: '',
    recordedCities: [],
    weather: null
  },
  action) => {
  const { type, wantedCity, weather, recordedCities } = action;
  
  switch (type) {
    case Actions.SETCITY:
      const newCityState = { ...state, wantedCity: wantedCity};
      return newCityState;
    case Actions.SETWEATHER:
      const newWeatherState = { ...state, weather: weather};
      return newWeatherState;
    case Actions.SETCITIES:
      const newCitiesState = { ...state, recordedCities: recordedCities};
      return newCitiesState;
    default:
      return state;
  }
}
