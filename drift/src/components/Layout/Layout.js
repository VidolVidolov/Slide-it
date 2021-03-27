import { ReactComponent as Logo } from './assets/Logo Slide it.svg';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userEmail } from '../../reducers/userReducer';
import { logout } from '../../actions/userActions';
import './Layout.scss';
const Layout = ({ children, email, logout }) => {
    const history = useHistory();
    const handleLogOut = async () => {
        await logout();
        history.push('/');
    };
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
            <div className='children-wrapper'>{children}</div>
            <footer>&copy; Slide it! by Vidol Vidolov</footer>
        </div>
    );
};

const mapStateToProps = (state) => ({
    email: userEmail(state),
});

const mapDispatchToProps = {
    logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
