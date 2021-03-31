import CarMainInfo from './CarMainInfo/CarMainInfo';
import Button from '@material-ui/core/Button';
import SetupCarForm from './SetupCarForm';
import ModifyCarForm from './ModifyCarForm';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCarInfo } from '../../actions/carActions';
import { userId } from '../../reducers/userReducer';
import './Profile.scss';

const Profile = ({ loadCarInfo, car, userId }) => {
    const [setUpCarForm, setSetUpCarForm] = useState(false);
    const [modifyCarForm, setModifyCarForm] = useState(false);

    const handleOpenSetUpForm = (e) => {
        setUpCarForm ? setSetUpCarForm(false) : setSetUpCarForm(true);
        setModifyCarForm(false);
    };

    const handleOpenModifyCarForm = (e) => {
        modifyCarForm ? setModifyCarForm(false) : setModifyCarForm(true);
        setSetUpCarForm(false);
    };

    useEffect(() => {
        userId && loadCarInfo(userId);
    }, [loadCarInfo, userId]);

    return (
        <div className='page-wrapper'>
            <div className='pseudo-side-menu'>
                <h1 className='page-heading'>account</h1>
                {setUpCarForm && <SetupCarForm close={handleOpenSetUpForm} />}
                {modifyCarForm && (
                    <ModifyCarForm close={handleOpenModifyCarForm} />
                )}
            </div>
            <div className='page-content'>
                <CarMainInfo
                    brand={car.brand}
                    model={car.model}
                    hp={car.horsePower}
                />
                <div className='picture-car'>
                    <img
                        src={car.picture}
                        alt='pic'
                        className='picture-picture'
                    />
                    <div className='link-to-youtube'>
                        <p onClick={() => window.open(car.videoLink)}>
                            &rarr; For video of the car click HERE &larr;
                        </p>
                    </div>
                </div>
                <div className='mods-wrapper'>
                    <ul className='parts-and-modifications'>
                        {car.parts.length === 0 ? (
                            <h2>The current car is STOCK</h2>
                        ) : (
                            car.parts.map((x) => <li>{x}</li>)
                        )}
                    </ul>
                </div>
                <div className='potential'>
                    Car's potential: {car.potential}
                </div>
                <div className='profile-buttons-setup-car'>
                    <Button
                        className='setup-car-button'
                        onClick={handleOpenSetUpForm}
                    >
                        Set up your car
                    </Button>
                    <span>or</span>
                    <Button
                        className='setup-car-button'
                        onClick={handleOpenModifyCarForm}
                    >
                        Modify your car
                    </Button>
                </div>
                <div className='car-price'>
                    Total car price: {car.price} Euro
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    car: state.car,
    userId: userId(state),
});

const mapDispatchToProps = {
    loadCarInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
