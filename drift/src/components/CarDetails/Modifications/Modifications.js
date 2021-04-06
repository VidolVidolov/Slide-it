import './Modifications.scss';
const Modifications = ({ parts, potential }) => {
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
            <h2>Potential: {potential}</h2>
        </div>
    );
};

export default Modifications;
