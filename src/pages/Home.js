import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import WeatherCard from "../components/WeatherCard";

// Query OpenWeatherApI for weather data
// Make request to open weather (based on city, not longitude/latitude)
// Cities: Seoul, Berlin, New York, San Fracisco 
const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${WEATHER_APP_API_KEY}`;

function Home() {    
// Value stored in state for weather data
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const cityToQuery = searchParams("city") || city;
        setCity(cityToQuery)
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

const { 
    city,
    cloudiness,
    currentTemp,
    highTemp,
    lowTemp,
    humidity,
    weatherType,
    windSpeed,
} = useMemo (() => {
    const weatherMain = weatherData.main || {};
    const weatherClouds = weatherData.clouds || {};
    return {
        city: weatherData.name,
        cloudiness: weatherClouds.all,
        currentTemp: Math.round(weatherMain.temp),
        highTemp: Math.round(weatherMain.temp_max),
        lowTemp: Math.round(weatherMain.low_temp),
        humidity: weatherMain.humidity,
        weatherType: weatherData.weather && weatherData.weather[0].max_temp,
    };
}, [weatherData]);
    
    // Display this weather data into our app
        console.log("state value", weatherData);

return (
    <div>
        <h1>Weather App</h1>
        <WeatherCard city ={"Seoul"} humidity={humidity} currentTemp={currentTemp} highTemp={highTemp} lowTemp={lowTemp} windSpeed={windSpeed} cloudiness={cloudiness} weatherType={weatherType}/>     
    </div>
    );
}

export default Home;