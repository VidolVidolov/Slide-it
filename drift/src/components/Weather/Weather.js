import { apiKey } from '../../constants/weatherKey';
import useFetch from '../../hooks/useFetch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Weather.scss';
import { connect } from 'react-redux';
import { userLocation } from '../../reducers/userReducer';
import { changeLocation } from '../../actions/userActions';

const Weather = ({ location, changeLocation, showWeather }) => {
    let buffer = '';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    const { response: weather, error } = useFetch(url);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (buffer === '') {
            return;
        }
        await changeLocation(buffer);
    };
    
    return (
        <div className={`${!showWeather && 'hidden-weather'} weather-content`}>
            <form onSubmit={handleSubmit}>
                <TextField
                    id='outlined-helperText'
                    label='Your location'
                    variant='outlined'
                    className='input-form'
                    onChange={(e) => (buffer = e.target.value)}
                    name='email'
                />
                <Button
                    variant='contained'
                    color='primary'
                    className='button-form'
                    type='submit'
                >
                    Check
                </Button>
            </form>
            <h2>
                <span className='weather_place'>
                    Country: {weather?.location.country}
                </span>
                <span className='weather_place'>
                    City: {weather?.location.name}
                </span>
            </h2>
            <img
                src={weather?.current.condition.icon}
                alt={'weather'}
                className='weather-icon'
            />
            <h3>
                Current condition:{' '}
                <span>{weather?.current.condition.text}</span>
            </h3>
            <p>Temperature: {weather?.current.temp_c} &#8451;</p>
            <p>Feels like: {weather?.current.feelslike_c} &#8451;</p>
            <p>Wind: {weather?.current.wind_kph} km/h</p>
            <p>Humidity: {weather?.current.humidity} %</p>

            <p className='message-weather'>
                {weather?.current.condition.text.includes('rain')
                    ? 'The weather is perfect for some slidin!'
                    : 'The weather is not healty for your tires!'}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    location: userLocation(state),
});
const mapDispatchToProps = {
    changeLocation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
