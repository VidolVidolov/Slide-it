import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './SetupCarForm.scss';

const ModifyCarForm = ({ close }) => {
    return (
        <div className='modify-car-form'>
            <TextField
                id='standard-helperText'
                label='Brand'
                defaultValue='Default Value'
                helperText='Enter your brand'
                className='car-input'
                type='text'
            />
            <TextField
                id='standard-helperText'
                label='Model'
                defaultValue=''
                helperText='Enter your model'
                className='car-input'
                type='text'
            />
            <TextField
                id='standard-helperText'
                label='Horse power'
                defaultValue=''
                helperText='Enter current horse power'
                className='car-input'
                type='number'
            />
            <TextField
                id='standard-helperText'
                label='Price'
                defaultValue=''
                helperText='Enter your the price of your car'
                className='car-input'
                type='number'
            />
            <Button className='setup-car-button'>Save</Button>
            <Button className='setup-car-button' onClick={close}>
                Cancel
            </Button>
        </div>
    );
};

export default ModifyCarForm;
