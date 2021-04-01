import { useEffect, useState } from 'react';
import './Weather.scss';
const Weather = ({ children }) => {
    console.log(children);
    const [weather, setWeather] = useState(children);
    return (
        <div className='weather-content'>
            <h2>City: {weather?.location.name}</h2>
            <img src={weather?.current.condition.icon} alt={'weather'} />
            <h3>Current condition: {weather?.current.condition.text}</h3>
        </div>
    );
};

export default Weather;
