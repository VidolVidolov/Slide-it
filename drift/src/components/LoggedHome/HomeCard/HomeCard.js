import './HomeCard.scss';

const HomeCard = ({ car }) => {
    return (
        <div className='home-card'>
            <h2>
                {car.brand}: {car.model}
            </h2>
            <div className='image-wrapper'>
                <img src={car.picture} alt={car.model} />
            </div>
            <div className='car-info-wrapper'>
                <p>POWER: {car.horsePower} HP</p>
                <p>click to see car's video</p>
            </div>
        </div>
    );
};
export default HomeCard;
