import { connect } from 'react-redux';
import { loadAllCars } from '../../actions/carActions';
import { useEffect } from 'react';
import HomeCard from './HomeCard/HomeCard';
import { changeWeatherToVisible } from '../../actions/userActions';
import './LoggedHome.scss';

const LoggedHome = ({ cars, loadAllCars, changeWeatherToVisible }) => {
    useEffect(() => {
        loadAllCars();
        changeWeatherToVisible();
    }, [loadAllCars]);
    return (
        <div className='page-wrapper'>
            <div className='pseudo-side-menu'>
                <h1 className='page-heading'>Home</h1>
                <p className='paragraph-under-heading'>
                    check out the available cars
                </p>
            </div>
            <div className='page-content'>
                <div className='home-card-wrapper'>
                    {cars.map((x) => (
                        <HomeCard car={x} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cars: state.allCars,
});

const mapDispatchToProps = {
    loadAllCars,
    changeWeatherToVisible,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoggedHome);
