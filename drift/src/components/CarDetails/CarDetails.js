import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../constants/api';
import { convertLink } from '../../helpers/videoLinkConvertor';
import MediaContent from './MediaContent/MediaContent';
import Modifications from './Modifications/Modifications';
import { connect } from 'react-redux';
import { userId } from '../../reducers/userReducer';
import { addCarToFavourites } from '../../actions/userActions';
import './CarDetails.scss';

const CarDetails = ({ history, userId, addCarToFavourites }) => {
    const id = history.location.pathname.split('/')[1];
    const url = `${BASE_URL}/cars/${id}/details`;
    const { response: car, error } = useFetch(url);
    const video = car?.videoLink && convertLink(car?.videoLink);
    const hp = Number(
        car?.parts.reduce((a, c) => (a += +c.bonusHorsePower), 0)
    );
    const price = Number(car?.parts.reduce((a, c) => (a += +c.price), 0));

    const handleAddToFavorites = async () => {
        try {
            await addCarToFavourites(userId, id);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='page-wrapper'>
            <div className='pseudo-side-menu'>
                <h1 className='page-heading'>Details</h1>
                <p className='paragraph-under-heading'>
                    for {car?.brand} {car?.model}
                </p>
            </div>
            <div className='page-content'>
                <MediaContent
                    video={video}
                    picture={car?.picture}
                    model={car?.model}
                />
                {car?.parts && <Modifications parts={car.parts} />}
                <div className='final-info-details'>
                    <h2>Price: {Number(car?.price) + price} Euro</h2>
                    <h2>Stock HP: {car?.horsePower} HP</h2>
                    <h2>Current HP: {Number(car?.horsePower) + hp} HP</h2>
                </div>

                <p
                    className='absolute-back-button'
                    onClick={(e) => history.push('/')}
                >
                    Back
                </p>
                <p
                    className='absolute-add-favorites-button'
                    onClick={handleAddToFavorites}
                >
                    <span>&#8669;</span> add to favorites <span>&#8668;</span>
                </p>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    userId: userId(state),
});

const mapDispatchToProps = {
    addCarToFavourites,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails);
