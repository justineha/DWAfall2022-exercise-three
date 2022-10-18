import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBolt,  
    faCloud, 
    faSun, 
    faUmbrella, 
    faSnowflake, 
} from '@fortawesome/free-solid-svg-icons';


function WeatherIcon ( { weatherType }) {
    switch (weatherType) {
        case "Clouds":
        case "Fog":
            return <FontAwesomeIcon icon={faCloud} />;
        case "Sun":
        case "Clear":
            return <FontAwesomeIcon icon={faSun} />;
        case "Rain":
            return <FontAwesomeIcon icon={faUmbrella} />;
        case "Snow":
            return <FontAwesomeIcon icon={faSnowflake} />;
        case "Thunder":
            return <FontAwesomeIcon icon={faBolt} />;
        default:
            return null;
  };
}
export default WeatherIcon;