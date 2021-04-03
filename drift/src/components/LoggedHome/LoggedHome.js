import { connect } from 'react-redux';
import { loadAllCars } from '../../actions/carActions';
import { useEffect } from 'react';
import './LoggedHome.scss';
import HomeCard from './HomeCard/HomeCard';

const LoggedHome = ({ cars, loadAllCars }) => {
    console.log(cars);
    useEffect(() => {
        cars.length === 0 && loadAllCars();
    }, [loadAllCars]);
    return (
        <div className='page-wrapper'>
            <div className='pseudo-side-menu'>
                <h1 className='page-heading'>Home</h1>
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
};
export default connect(mapStateToProps, mapDispatchToProps)(LoggedHome);
