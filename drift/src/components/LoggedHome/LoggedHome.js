import { apiKey } from '../../constants/weatherKey';
import useFetch from '../../hooks/useFetch';
import Weather from '../Weather/Weather';
import './LoggedHome.scss';

const LoggedHome = () => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Sofia`;
    const weather = useFetch(url);

    return (
        <div className='page-wrapper'>
            <div className='pseudo-side-menu'>
                <h1 className='page-heading'>Home</h1>
                <Weather>{weather.response}</Weather>
            </div>
            <div className='page-content'></div>
        </div>
    );
};

export default LoggedHome;
