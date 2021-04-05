import useFetch from '../../hooks/useFetch';
import { BASE_URL } from '../../constants/api';
import { convertLink } from '../../helpers/videoLinkConvertor';
import './CarDetails.scss';
import MediaContent from './MediaContent/MediaContent';

const CarDetails = ({ history }) => {
    const id = history.location.pathname.split('/')[1];
    const url = `${BASE_URL}/cars/${id}/details`;
    const { response: car, error } = useFetch(url);
    const video = car?.videoLink && convertLink(car?.videoLink);

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
                <div className='car-info-details'>
                    <h3>Modifications</h3>
                    <div className='mods-wrapper-details'>
                        {car?.parts.length === 0 ? (
                            <h2 >The current car is STOCK</h2>
                        ) : (
                            <ul className='parts-and-modifications'>
                                {car?.parts.map((x) => (
                                    <li>
                                        Brand: {x.brand} &rarr; Part: {x.type}{' '}
                                        &rarr; Price: {x.price} Euro &rarr; +HP:{' '}
                                        {x.bonusHorsePower}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;
