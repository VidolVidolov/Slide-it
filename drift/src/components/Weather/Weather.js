import './Weather.scss';
const Weather = ({ children }) => {
    console.log(children);
    return <div className='weather-content'>{children?.location?.name}</div>;
};

export default Weather;
