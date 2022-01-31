import { ReactComponent as Logo } from './assets/Logo Slide it.svg';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { showWeather, userEmail } from '../../reducers/userReducer';
import { logout, changeWeatherToVisible } from '../../actions/userActions';
import Weather from '../Weather';
import { useEffect, useState } from 'react';
import './Layout.scss';
import SearchBar from '../SearchBar';

const Layout = ({
    children,
    email,
    logout,
    showWeather,
    changeWeatherToVisible,
}) => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const history = useHistory();
    const handleLogOut = async () => {
        await logout();
        history.push('/');
    };

    const handleSearchAppear = () => {
        showSearchBar ? setShowSearchBar(false) : setShowSearchBar(true);
    }

    useEffect(() => {
        email && changeWeatherToVisible();
    }, [changeWeatherToVisible, email]);
    return (
        <div className='layout-wrapper'>
            <header>
                <div className='list-elements-wrapper'>
                    <div className='left-part-header'>
                        <Link to={email ? '/home' : '/'}>
                            <Logo className='logo'></Logo>
                        </Link>
                        {email && (
                            <div className='account-links'>
                                <Link to='/profile'>
                                    <div className='left-part-header-item'>
                                        Account
                                    </div>
                                </Link>
                                <Link to='/favourites'>
                                    <div className='left-part-right-header-item'>
                                        Favourites
                                    </div>
                                </Link>
                                <div className='left-part-header-item-name'>
                                    Username &#187;&#187;
                                    <p>{email}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='right-part-header'>
                        {email !== '' ? (
                            <>
                                <div
                                    className='right-part-header-item'
                                    onClick={handleLogOut}
                                >
                                    Logout
                                </div>
                                <div className='right-part-header-item' onClick={handleSearchAppear}>
                                    {showSearchBar
                                        ? <div>Hide SearchBar</div>
                                        : <div>Show SearchBar</div>
                                    }
                                </div>
                            </>
                        ) : (
                                <Link
                                    to='/login'
                                    className='right-part-header-item'
                                >
                                    <div>Login</div>
                                </Link>
                            )}
                        {showSearchBar && <SearchBar />}
                    </div>
                </div>
            </header>
            <div className='children-wrapper'>
                {children}
                <Weather showWeather={showWeather} />
            </div>
            <footer>&copy; Slide it! by Vidol Vidolov</footer>
        </div>
    );
};

const mapStateToProps = (state) => ({
    email: userEmail(state),
    showWeather: showWeather(state),
});

const mapDispatchToProps = {
    logout,
    changeWeatherToVisible,
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
