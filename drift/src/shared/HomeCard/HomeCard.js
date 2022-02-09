import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './HomeCard.scss';


const HomeCard = ({
    car: {
        brand,
        model,
        picture,
        horsePower,
        videoLink,
        _id
    } }) => {
    return (
        <div className='home-card'>
            <h2>
                {brand}: {model}
            </h2>
            <div className='image-wrapper'>
                <img src={picture} alt={model} />
            </div>
            <div className='car-info-wrapper'>
                <p>POWER: {horsePower} HP</p>
                <p onClick={() => window.open(videoLink)} className='video-link-button'>
                    click to see car's video
                </p>
            </div>
            <Link to={`/${_id}/details`}>view more</Link>
        </div>
    );
};

HomeCard.propTypes = {
    car: PropTypes.shape({
        brand: PropTypes.string,
        model: PropTypes.string,
        picture: PropTypes.string,
        horsePower: PropTypes.number,
        videoLink: PropTypes.string,
        _id: PropTypes.string,

    }),
};

export default HomeCard;
