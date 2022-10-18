import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCloud, 
    faSun, 
    faUmbrella, 
    faSnowflake, 
    faBolt,  
} from '@fortawesome/free-solid-svg-icons';


function weatherIcon ( {weatherType }) {
    switch (weatherType) {
        case "Cloud":
        case "Fog":
            return <FontAwesomeIcon Icon = {faCloud} />;
        case "Sun":
        case "Clear":
            return <FontAwesomeIcon Icon = {faSun} />;
        case "Rain":
            return <FontAwesomeIcon Icon = {faUmbrella} />;
        case "Snow":
            return <FontAwesomeIcon Icon = {faSnowflake} />;
        case "Thunder":
            return <FontAwesomeIcon Icon = {faBolt} />;
  };
}
export default weatherIcon;