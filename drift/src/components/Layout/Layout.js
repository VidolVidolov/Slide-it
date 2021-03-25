import { ReactComponent as Logo } from './assets/Logo Slide it.svg';
import { Link } from 'react-router-dom';
import './Layout.scss';
const Layout = ({ children }) => {
    return (
        <div className='layout-wrapper'>
            <header>
                <div className='list-elements-wrapper'>
                    <div className='left-part-header'>
                        <Link to='/'>
                            <Logo className='logo'></Logo>
                        </Link>
                        <div className='left-part-header-item'>Account</div>
                    </div>
                    <div className='right-part-header'>
                        <Link to='#' className='right-part-header-item'>
                            <div>Search</div>
                        </Link>
                        <Link to='/login' className='right-part-header-item'>
                            <div>Login</div>
                        </Link>
                        {/* <div className='right-part-header-item'>Register</div>
                        <div className='right-part-header-item'>Logout</div> */}
                    </div>
                </div>
            </header>
            {children}
            <footer>&copy; Slide it! by Vidol Vidolov</footer>
        </div>
    );
};

export default Layout;
