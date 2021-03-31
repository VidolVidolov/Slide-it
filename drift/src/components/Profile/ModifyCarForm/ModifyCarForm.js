import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useForm from '../../../hooks/useForm';
import { connect } from 'react-redux';
import { userId } from '../../../reducers/userReducer';
import { modifyCar } from '../../../actions/carActions';
import './ModifyCarForm.scss';

const ModifyCarForm = ({ close, modifyCar, userId }) => {
    const [form, setForm] = useForm({});
    const handleModifyCar = async (e) => {
        e.preventDefault();
        try {
            close();
            await modifyCar(userId, form);
        } catch (error) {}
    };
    return (
        <form className='modify-car-form' onSubmit={handleModifyCar}>
            <h2>Modify your car</h2>
            <TextField
                id='standard-helperText'
                label='Brand'
                defaultValue=''
                helperText='Enter part brand'
                className='car-input'
                type='text'
                name='brand'
                onChange={setForm}
            />
            <TextField
                id='standard-helperText'
                label='Part'
                defaultValue=''
                helperText='Enter part'
                className='car-input'
                type='text'
                name='type'
                onChange={setForm}
            />

            <TextField
                id='standard-helperText'
                label='Bonus horse power'
                defaultValue=''
                helperText='Enter bonus horse power'
                className='car-input'
                type='number'
                name='bonusHorsePower'
                onChange={setForm}
            />
            <TextField
                id='standard-helperText'
                label='Price'
                defaultValue=''
                helperText='Enter price of the part'
                className='car-input'
                type='number'
                name='price'
                onChange={setForm}
            />
            <Button className='setup-car-button' type='submit'>
                Modify
            </Button>
            <Button className='setup-car-button' onClick={close}>
                Cancel
            </Button>
        </form>
    );
};

const mapStateToProps = (state) => ({
    userId: userId(state),
});

const mapDispatchToProps = {
    modifyCar,
};
export default connect(mapStateToProps, mapDispatchToProps)(ModifyCarForm);
