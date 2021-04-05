import './Modifications.scss';
const Modifications = ({ parts }) => {
    return (
        <div className='car-info-details'>
            <h3>Modifications</h3>
            <div className='mods-wrapper-details'>
                {parts.length === 0 ? (
                    <h2>The current car is STOCK</h2>
                ) : (
                    <ul className='parts-and-modifications'>
                        {parts.map((x) => (
                            <li>
                                Brand: {x.brand} &rarr; Part: {x.type} &rarr;
                                Price: {x.price} Euro &rarr; +HP:{' '}
                                {x.bonusHorsePower}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Modifications;
