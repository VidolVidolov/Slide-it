import { apiKey } from '../../constants/weatherKey';
import useFetch from '../../hooks/useFetch';
import './Weather.scss';
const Weather = () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Sofia`;
    const weather = useFetch(url);

    return (
        <div className='weather-content'>
            <h2>City: {weather.response?.location.name}</h2>
            <img
                src={weather.response?.current.condition.icon}
                alt={'weather'}
            />
            <h3>
                Current condition: {weather.response?.current.condition.text}
            </h3>
        </div>
    );
};

export default Weather;
