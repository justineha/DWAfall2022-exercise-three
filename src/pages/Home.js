import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import {WEATHER_APP_API_KEY} from "../API_KEYS";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";

function Home() {
   const [weatherData, setWeatherData] = useState({});
   const [city, setCity] = useState("San Francisco");
   const [searchParams] = useSearchParams();
   useEffect(() => {
       const cityToQuery= searchParams.get("city") || city;
       setCity(cityToQuery);
       axios
       .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&units=imperial&appid=${WEATHER_APP_API_KEY}&units=imperial`)
       .then(function(response){
           setWeatherData(response.data);
       })
       .catch(function(error){
           setWeatherData({});
       });
   }, [city, searchParams]);

   const {
       cloudiness,
       currentTemp,
       highTemp,
       humidity,
       lowTemp,
       weatherType,
       windSpeed,
   } = useMemo(() => {
       const weatherMain = weatherData.main || {};
       const weatherClouds = weatherData.clouds || {};
       return {
           cloudiness: weatherClouds.all,
           currentTemp: Math.round(weatherMain.temp),
           highTemp: Math.round(weatherMain.temp_max),
           humidity: weatherMain.humidity,
           lowTemp: Math.round(weatherMain.temp_min),
           weatherType: weatherData.weather && weatherData.weather[0].main,
           windSpeed: weatherData.wind && weatherData.wind.speed,
       };
   }, [weatherData]);
 
   return (
        <div className = "Weather--wrapper" style={{backgroundColor: `rgba(32,42,68,${cloudiness/100})`}}>
             <div class="rectangle"></div>
             <Header/>
             <WeatherCard
             city={city}
             cloudiness={cloudiness}
             currentTemp={currentTemp}
             highTemp={highTemp}
             humidity={humidity}
             lowTemp={lowTemp}
             weatherType={weatherType}
             windSpeed={windSpeed}/>
        </div>
   )
}
export default Home;
