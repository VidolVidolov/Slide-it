import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './ModifyCarForm.scss';

const ModifyCarForm = ({ close }) => {
    return (
        <div className='modify-car-form'>
            <h2>Modify your car</h2>
            <TextField
                id='standard-helperText'
                label='Brand'
                defaultValue=''
                helperText='Enter part brand'
                className='car-input'
                type='text'
            />
            <TextField
                id='standard-helperText'
                label='Part'
                defaultValue=''
                helperText='Enter part'
                className='car-input'
                type='text'
            />

            <TextField
                id='standard-helperText'
                label='Bonus horse power'
                defaultValue=''
                helperText='Enter bonus horse power'
                className='car-input'
                type='number'
            />
            <TextField
                id='standard-helperText'
                label='Price'
                defaultValue=''
                helperText='Enter price of the part'
                className='car-input'
                type='number'
            />
            <Button className='setup-car-button'>Modify</Button>
            <Button className='setup-car-button' onClick={close}>
                Cancel
            </Button>
        </div>
    );
};

export default ModifyCarForm;
