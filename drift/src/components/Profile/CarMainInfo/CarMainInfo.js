import './CarMainInfo.scss';

const CarMainInfo = ({ brand, model, hp }) => {
    return (
        <div className='car-description'>
            <h2>brand: {brand}</h2>
            <h2>model: {model}</h2>
            <h2>power: {hp} HP</h2>
        </div>
    );
};
export default CarMainInfo;
