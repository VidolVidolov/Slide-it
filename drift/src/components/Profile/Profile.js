import CarMainInfo from './CarMainInfo/CarMainInfo';
import Button from '@material-ui/core/Button';
import ModifyCarForm from './SetupCarForm';
import './Profile.scss';
import { useState } from 'react';

const Profile = () => {
    const [setUpCarForm, setSetUpCarForm] = useState(false);

    const handleOpenSetUpForm = (e) => {
        setUpCarForm ? setSetUpCarForm(false) : setSetUpCarForm(true);
    };
    return (
        <div className='page-wrapper'>
            <div className='pseudo-side-menu'>
                <h1 className='page-heading'>account</h1>
                {setUpCarForm ? (
                    <ModifyCarForm close={handleOpenSetUpForm} />
                ) : (
                    ''
                )}
            </div>
            <div className='page-content'>
                <CarMainInfo />
                <div className='picture-car'>
                    <img
                        src='https://ag-spots-2019.o.auroraobjects.eu/2019/03/31/other/2880-1800-crop-bmw-m3-e92-coupe-c917531032019134701_1.jpg'
                        alt='pic'
                        className='picture-picture'
                    />
                    <div className='link-to-youtube'>
                        <p
                            onClick={() =>
                                window.open(
                                    'https://www.youtube.com/watch?v=k4rV9DpP9v4'
                                )
                            }
                        >
                            &rarr; For video of the car click HERE &larr;
                        </p>
                    </div>
                </div>
                <div className='mods-wrapper'>
                    <ul className='parts-and-modifications'>
                        <li>
                            Big cooler - Price: ### - Bonus Horse Power - ###
                        </li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                        <li>Big cooler - Price: ###</li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                        <li>Big cooler - Price: ###</li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                        <li>Big cooler - Price: ###</li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                        <li>Big cooler - Price: ###</li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                        <li>Big cooler - Price: ###</li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                        <li>Big cooler - Price: ###</li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                        <li>Big cooler - Price: ###</li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                        <li>Big cooler - Price: ###</li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                        <li>Big cooler - Price: ###</li>
                        <li>turbo from plane - Price: ###</li>
                        <li>remap stage 2 - Price: ###</li>
                    </ul>
                </div>
                <div className='potential'>Car's potential: 5.5</div>
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
                        onClick={handleOpenSetUpForm}
                    >
                        Modify your car
                    </Button>
                </div>
                <div className='car-price'>Total car price: 9000 Euro</div>
            </div>
        </div>
    );
};
export default Profile;
