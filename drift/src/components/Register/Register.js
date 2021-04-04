import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useForm from '../../hooks/useForm';
import { register } from '../../actions/userActions';
import registerValidator from '../../helpers/registerValidator';
import './Register.scss';
import { useState } from 'react';

const Register = ({ register }) => {
    const [form, setForm] = useForm({});
    const [error, setError] = useState('');
    const [errorField, setErrorField] = useState('');
    const history = useHistory();
    const handleRegister = async (e) => {
        setError('');
        setErrorField('');
        try {
            e.preventDefault();
            registerValidator(form);
            await register(form);
            history.push('/profile');
        } catch (error) {
            setError(error.error);
            setErrorField(error.field);
        }
    };
    return (
        <div className='register-page-wrapper'>
            <div className='register-form-wrapper'>
                <form className='form-register' onSubmit={handleRegister}>
                    <h2 className='register-heading'>
                        Create your account in no time!
                    </h2>
                    <TextField
                        id='outlined-helperText'
                        label='Email'
                        helperText={errorField === 'email' ? error : ''}
                        variant='outlined'
                        className={`${
                            errorField === 'email' && 'error-input'
                        } input-form`}
                        onChange={setForm}
                        name='email'
                    />
                    <TextField
                        id={
                            error
                                ? 'outlined-error-helper-text'
                                : 'outlined-helperText'
                        }
                        label='Password'
                        helperText={errorField === 'password' ? error : ''}
                        variant='outlined'
                        className={`${
                            errorField === 'password' && 'error-input'
                        } input-form`}
                        type='password'
                        onChange={setForm}
                        name='password'
                    />
                    <TextField
                        id={
                            error
                                ? 'outlined-error-helper-text'
                                : 'outlined-helperText'
                        }
                        label='Repeat password'
                        helperText={errorField === 'password' ? error : ''}
                        variant='outlined'
                        className={`${
                            errorField === 'password' && 'error-input'
                        } input-form`}
                        type='password'
                        onChange={setForm}
                        name='repeatPassword'
                    />
                    <TextField
                        id={
                            error
                                ? 'outlined-error-helper-text'
                                : 'outlined-helperText'
                        }
                        label='Current car'
                        helperText={errorField === 'currentCar' ? error : ''}
                        variant='outlined'
                        className={`${
                            errorField === 'currentCar' && 'error-input'
                        } input-form`}
                        type='text'
                        onChange={setForm}
                        name='currentCar'
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        className='button-form'
                        type='submit'
                    >
                        REGISTER
                    </Button>
                    <div className='login-register'>
                        <p>Don't have an account yet? Go make one!</p>
                        <Link to='/login' className='link-to-register'>
                            Sign In!
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    register,
};
export default connect(null, mapDispatchToProps)(Register);
