import './MiddleSectionAccount.scss';
const MiddleSectionAccount = ({ parts, picture, videoLink }) => {
    return (
        <>
            <div className='picture-car'>
                <img src={picture} alt='pic' className='picture-picture' />
                <div className='link-to-youtube'>
                    <p onClick={() => window.open(videoLink)}>
                        &rarr; For video of the car click HERE &larr;
                    </p>
                </div>
            </div>
            <div className='mods-wrapper'>
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
        </>
    );
};

export default MiddleSectionAccount;
