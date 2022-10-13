import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function WeatherCard({
    setcity, 
    weatherType, 
    humidity, 
    currentTemp, 
    highTemp, 
    lowTemp, 
    cloudiness, 
    humidity, 
    windSpeed,
}) {
    return (
        <div className = "WeatherCard">
            <h2>{city}</h2>
            <div className = "WeatherCard--weathertype">
                <WeatherIcon weatherType={weatherType} />
                <p className = "WeatherCard--type"/>
            </div>
            <WeatherIcon/>
            <h3>Weather Type: {weatherType}</h3>
            <p>Current Tempature: {currentTemp}</p>
            <p>High Tempature: {highTemp}</p>
            <p>Low Tempature: {lowTemp}</p>
            <p>Cloudiness: {cloudiness}</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind speed: {windSpeed}</p>
        </div>
    );
}

export default WeatherCard;