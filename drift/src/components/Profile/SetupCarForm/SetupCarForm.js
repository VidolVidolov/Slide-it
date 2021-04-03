import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from '../../../hooks/useForm';
import { connect } from 'react-redux';
import { saveCar } from '../../../actions/carActions';
import { userId } from '../../../reducers/userReducer';
import './SetupCarForm.scss';
import { useRef } from 'react';

const ModifyCarForm = ({ close, saveCar, userId }) => {
    const [form, setForm] = useForm({});
    const ref = useRef();
    const handleSubmitSetUpCar = async (e) => {
        e.preventDefault();
        try {
            close();
            await saveCar(userId, form);
        } catch (error) {
            close();
        }
    };
    return (
        <form
            className='modify-car-form'
            onSubmit={handleSubmitSetUpCar}
            ref={ref}
        >
            <h2>Setup your car</h2>
            <div className='inputs-wrapper'>
                <TextField
                    id='standard-helperText'
                    label='Brand'
                    defaultValue=''
                    helperText='Enter your brand'
                    className='car-input'
                    type='text'
                    name='brand'
                    onChange={setForm}
                />
                <TextField
                    id='standard-helperText'
                    label='Model'
                    defaultValue=''
                    helperText='Enter your model'
                    className='car-input'
                    type='text'
                    name='model'
                    onChange={setForm}
                />
                <TextField
                    id='standard-helperText'
                    label='Horse power'
                    defaultValue=''
                    helperText='Enter current horse power'
                    className='car-input'
                    type='number'
                    name='horsePower'
                    onChange={setForm}
                />
                <TextField
                    id='standard-helperText'
                    label='Price'
                    defaultValue=''
                    helperText='Enter your the price of your car'
                    className='car-input'
                    type='number'
                    name='price'
                    onChange={setForm}
                />
                <TextField
                    id='standard-helperText'
                    label='Potential'
                    defaultValue=''
                    helperText='Enter the potential of the car'
                    className='car-input'
                    type='number'
                    name='potential'
                    onChange={setForm}
                />
                <TextField
                    id='standard-helperText'
                    label='Picture'
                    defaultValue=''
                    helperText='Post a picture of your car'
                    className='car-input'
                    type='text'
                    name='picture'
                    onChange={setForm}
                />
                <TextField
                    id='standard-helperText'
                    label='Video Link'
                    defaultValue=''
                    helperText='Post a picture of your car'
                    className='car-input'
                    type='text'
                    name='videoLink'
                    onChange={setForm}
                />
            </div>
            <div className='setup-car-buttons-form'>
                <Button
                    className='setup-car-button'
                    type='submit'
                    onClick={ref.submit}
                >
                    Save
                </Button>
                <Button className='setup-car-button' onClick={close}>
                    Cancel
                </Button>
            </div>
        </form>
    );
};

const mapStateTpProps = (state) => ({
    userId: userId(state),
});
const mapDispatchToProps = {
    saveCar,
};

export default connect(mapStateTpProps, mapDispatchToProps)(ModifyCarForm);
