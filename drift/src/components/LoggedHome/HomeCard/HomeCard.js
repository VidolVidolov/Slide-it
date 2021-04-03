import './HomeCard.scss';

const HomeCard = ({ car }) => {
    return (
        <div className='home-card'>
            <h2> {car.brand}</h2>
        </div>
    );
};
export default HomeCard;
