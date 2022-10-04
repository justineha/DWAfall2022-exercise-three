import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {WEATHER_APP_API_KEY} from "../API_KEYS";

const openWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${WEATHER_APP_API_KEY}'

function Home() 
// Value stored in state for weather data
    const [weatherData, setWeatherData] = useState ({});

// Query OpenWeatherApI for weather data
// Make request to open weather (based on city, not longitude/latitude)

useEffect(() => {
    axios
    .get(openWeatherURL)
    .then(function(response) {
        setWeatherData(response);
    })
    .catch(function (error) {
        console.warn(error);
        setWeatherData({});
    });
}, []);

// Display this weather data into our app
console.log("state value", weatherData)

return (
    <div>
        <h1>Weather App</h1>
        <p>{weatherData.name}</p>
        <p>Humidity: {weatherData.main && weatherData.main.humidity}</p>
        <p>{openWeatherURL}</p>
    </div>
    );
}

export default Home;