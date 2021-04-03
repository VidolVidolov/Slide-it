import CarMainInfo from './CarMainInfo/CarMainInfo';
import Button from '@material-ui/core/Button';
import SetupCarForm from './SetupCarForm';
import ModifyCarForm from './ModifyCarForm';
import MiddleSectionAccount from './MiddleSectionAccount';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadCarInfo } from '../../actions/carActions';
import {
    changeWeatherToNotVisible,
    changeWeatherToVisible,
} from '../../actions/userActions';
import { userId } from '../../reducers/userReducer';
import './Profile.scss';

const Profile = ({
    loadCarInfo,
    car,
    userId,
    changeWeatherToNotVisible,
    changeWeatherToVisible,
}) => {
    const [setUpCarForm, setSetUpCarForm] = useState(false);
    const [modifyCarForm, setModifyCarForm] = useState(false);

    const handleOpenSetUpForm = (e) => {
        if (setUpCarForm) {
            setSetUpCarForm(false);
            changeWeatherToVisible();
        } else {
            setSetUpCarForm(true);
            setModifyCarForm(false);
            changeWeatherToNotVisible();
        }
    };

    const handleOpenModifyCarForm = (e) => {
        if (modifyCarForm) {
            setModifyCarForm(false);
            changeWeatherToVisible();
        } else {
            setModifyCarForm(true);
            setSetUpCarForm(false);
            changeWeatherToNotVisible();
        }
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
                <MiddleSectionAccount
                    videoLink={car.videoLink}
                    parts={car.parts}
                    picture={car.picture}
                />

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
                <div className='summary-car'>
                    <div className='potential'>
                        Car's potential: {car.potential}
                    </div>
                    <div>Bonus HP from parts: 120 HP</div>
                    <div className='car-price'>
                        Total car price: {car.price} Euro
                    </div>
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
    changeWeatherToNotVisible,
    changeWeatherToVisible,
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
