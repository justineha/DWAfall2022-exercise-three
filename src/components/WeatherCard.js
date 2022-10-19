import React from "react";
import WeatherIcon from "../components/WeatherIcon";
 
function setCurrentTime() {
 var myDate = new Date();
 
 let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 let monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
 let date = myDate.getDate();
 let month = monthsList[myDate.getMonth()];
 let year = myDate.getFullYear();
 let day = daysList[myDate.getDay()];
 
 let today = `${day}, ${month} ${date} ${year}`;
 
 let amOrPm;
 let twelveHours = function() {
   if (myDate.getHours() > 12) {
     amOrPm = 'PM';
     let twentyFourHourTime = myDate.getHours();
     let conversion = twentyFourHourTime - 12;
     return `${conversion}`
 
   } else {
     amOrPm = 'AM';
     return `${myDate.getHours()}`
   }
 };
 document.getElementById('current-time').innerText = today + ' '
}
 
setInterval(function() {
 setCurrentTime();
}, 1000);
 
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
       <div className = "WeatherCard--maintext">
           <h2>{city}</h2>
           <div id="current-time"></div>  
           <div id="vl"></div>        
               <div className = "WeatherCard--weathertype">
                   <WeatherIcon weatherType={weatherType} />
                   <p className = "WeatherCard--type"/>
               </div>
           <h3>{weatherType}</h3>
           <h4>{currentTemp}&deg;</h4>
           <div className = "WeatherCard--body">
               <p><u>High Tempature:</u> {highTemp}&deg;</p>
               <p><u>Low Tempature:</u> {lowTemp}&deg;</p>
               <p><u>Cloudiness:</u> {cloudiness}%</p>
               <p><u>Humidity:</u> {humidity}%</p>
               <p><u>Wind speed:</u> {windSpeed} m/h</p>
           </div>
       </div>
   );
}
export default WeatherCard;

