import { Link } from 'react-router-dom';
import './Home.scss';
const Home = () => {
    return (
        <div className='home-wrapper'>
            <h1 className='heading-home'>
                Join us and check out the best project cars!
            </h1>
            <Link to='/register' className='heading-home-small'>
                <h2>Create your account in no time and find your dream car!</h2>
            </Link>

            <h3 className='heading-home-smaller'>
                If you have already account go quickly 
                <Link to='/login' className='login'> SIGN IN</Link> to see if better cat than yours
                is present
            </h3>
        </div>
    );
};

export default Home;
