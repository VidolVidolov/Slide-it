import { connect } from 'react-redux';
import { loadAllCars } from '../../actions/carActions';
import { useEffect } from 'react';
import HomeCard from '../../shared/HomeCard';
import { changeWeatherToVisible } from '../../actions/userActions';
import { userSearch } from '../../reducers/userReducer';
import './LoggedHome.scss';

const LoggedHome = ({ cars, loadAllCars, changeWeatherToVisible, search }) => {

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
                    {search
                        ? cars.filter(x => x.brand.includes(search) || x.model.includes(search))
                            .map(x => <HomeCard car={x} key={x._id} />)
                        : cars.map((x) => (<HomeCard car={x} key={x._id} />))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cars: state.allCars,
    search: userSearch(state),
});

const mapDispatchToProps = {
    loadAllCars,
    changeWeatherToVisible,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoggedHome);
