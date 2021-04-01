import { useEffect } from 'react';
import { apiKey } from '../../constants/weatherKey';
import useFetch from '../../hooks/useFetch';

const LoggedHome = () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Sofia`;
    const weather = useFetch(url);
    console.log(weather.response);
    return (
        <div className='page-wrapper'>
            <div className='pseudo-side-menu'>
                <h1 className='page-heading'>Home</h1>
                <div className='weather-content'>
                    {weather.response?.location?.name}
                </div>
            </div>
            <div className='page-content'></div>
        </div>
    );
};

export default LoggedHome;
