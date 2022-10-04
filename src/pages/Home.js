import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { WEATHER_APP_API_KEY } from "../API_KEYS";

// Query OpenWeatherApI for weather data
// Make request to open weather (based on city, not longitude/latitude)
const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${WEATHER_APP_API_KEY}`;

function Home() {    
// Value stored in state for weather data
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        axios
            .get(openWeatherURL)
            .then(function (response) {
                setWeatherData(response.data);
            })
            .catch(function (error) {
                console.warn(error);
                setWeatherData({});
            }); 
        }, []);
    
    // Display this weather data into our app
        console.log("state value", weatherData);

return (
    <div>
        <h1>Weather App</h1>
        <h2>{weatherData.name}</h2>
        <p>Humidity: {weatherData.main && weatherData.main.humidity}%</p>
    </div>
    );
}

export default Home;