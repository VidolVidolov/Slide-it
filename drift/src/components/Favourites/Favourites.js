import { connect } from 'react-redux';
import { loadAllFavourites } from '../../actions/carActions';
import { useEffect } from 'react';
import HomeCard from '../../shared/HomeCard';
import { changeWeatherToVisible } from '../../actions/userActions';
import { userId } from '../../reducers/userReducer';
import './Favourites.scss';

const LoggedHome = ({
    favourites,
    loadAllFavourites,
    changeWeatherToVisible,
    userId,
}) => {
    useEffect(() => {
        userId && loadAllFavourites(userId);
        changeWeatherToVisible();
    }, [loadAllFavourites, userId]);
    return (
        <div className='page-wrapper'>
            <div className='pseudo-side-menu'>
                <h1 className='page-heading'>Favourites</h1>
                <p className='paragraph-under-heading'>
                    See all your favourite cars in one place
                </p>
            </div>
            <div className='page-content'>
                <div className='home-card-wrapper'>
                    {favourites.map((x) => (
                        <HomeCard car={x} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    favourites: state.favouriteCars,
    userId: userId(state),
});

const mapDispatchToProps = {
    loadAllFavourites,
    changeWeatherToVisible,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoggedHome);
