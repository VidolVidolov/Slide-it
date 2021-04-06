import { ReactComponent as Logo } from './assets/Logo Slide it.svg';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { showWeather, userEmail } from '../../reducers/userReducer';
import { logout, changeWeatherToVisible } from '../../actions/userActions';
import './Layout.scss';
import Weather from '../Weather';
import { useEffect } from 'react';

const Layout = ({
    children,
    email,
    logout,
    showWeather,
    changeWeatherToVisible,
}) => {
    const history = useHistory();
    const handleLogOut = async () => {
        await logout();
        history.push('/');
    };
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
                        <Link to='#' className='right-part-header-item'>
                            <div>Search</div>
                        </Link>
                        {email !== '' ? (
                            <div
                                className='right-part-header-item'
                                onClick={handleLogOut}
                            >
                                Logout
                            </div>
                        ) : (
                            <Link
                                to='/login'
                                className='right-part-header-item'
                            >
                                <div>Login</div>
                            </Link>
                        )}
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
