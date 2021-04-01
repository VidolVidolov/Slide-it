import Weather from '../Weather/Weather';
import './LoggedHome.scss';

const LoggedHome = () => {
    return (
        <div className='page-wrapper'>
            <div className='pseudo-side-menu'>
                <h1 className='page-heading'>Home</h1>
                <Weather />
            </div>
            <div className='page-content'></div>
        </div>
    );
};

export default LoggedHome;
