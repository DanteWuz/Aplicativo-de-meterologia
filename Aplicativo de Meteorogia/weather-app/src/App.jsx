import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import CurrentWeather from './components/CurrentWeather';
import WeatherForecast from './components/WeatherForecast';

const currentWeatherData = {
  location: 'Rio De Janeiro',
  temperature: 27,
};

const ForecastContainer = [
  { date: '25/09', minTemp: 19, maxTemp: 32 },
  { date: '26/09', minTemp: 20, maxTemp: 31 },
  { date: '27/09', minTemp: 20, maxTemp: 33 },
  { date: '28/09', minTemp: 17, maxTemp: 24 },
  { date: '29/09', minTemp: 19, maxTemp: 26 },
  { date: '30/09', minTemp: 22, maxTemp: 30 },
  { date: '01/10', minTemp: 24, maxTemp: 31 },
  { date: '02/10', minTemp: 18, maxTemp: 24 },
  { date: '03/10', minTemp: 19, maxTemp: 29 },
  { date: '04/10', minTemp: 20, maxTemp: 32 },
];

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <CurrentWeather 
        location={currentWeatherData.location}
        temperature={currentWeatherData.temperature} 
      />
      <WeatherForecast forecast={ForecastContainer}/>
    </div>
  </ThemeProvider>
);

export default App;
