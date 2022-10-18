import React from 'react';
import WeatherIcon from './WeatherIcon';

function WeatherCard({
    city, 
    weatherType, 
    humidity, 
    currentTemp, 
    highTemp, 
    lowTemp, 
    cloudiness, 
    windSpeed,
}) {
    return (
        <div className = "WeatherCard">
            <h2>{city}</h2>
            <div className = "WeatherCard--weathertype">
                <WeatherIcon weatherType={weatherType} />
                <p className = "WeatherCard--type"/>
            </div>
            <h3>Weather Type: {weatherType}</h3>
            <p>Current Tempature: {currentTemp}&deg;</p>
            <p>High Tempature: {highTemp}&deg;</p>
            <p>Low Tempature: {lowTemp}&deg;</p>
            <p>Cloudiness: {cloudiness}%</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind speed: {windSpeed} m/h</p>
        </div>
    );
}

export default WeatherCard;