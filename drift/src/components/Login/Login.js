import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { emailRegex } from '../../regex/emailRegex';
import { passwordRegex } from '../../regex/passwordRegex';
import { login } from '../../actions/userActions';
import { connect } from 'react-redux';
import './Login.scss';

const Login = ({ login }) => {
    const [form, setForm] = useForm({});
    const [error, setError] = useState('');
    const [errorField, setErrorField] = useState('');
    const history = useHistory();
    const handleForm = async (e) => {
        e.preventDefault();
        try {
            if (!emailRegex.test(form.email)) {
                throw { error: 'Email or password is invalid', field: 'email' };
            }
            if (!passwordRegex.test(form.password)) {
                throw {
                    error: 'Email or password is invalid',
                    field: 'email',
                };
            }
            await login(form);
            history.push('/home');
        } catch (error) {
            setError(error.error);
            setErrorField(error.field);
        }
    };
    return (
        <div className='login-page-wrapper'>
            <div className='login-form-wrapper'>
                <form className='form-login' onSubmit={handleForm}>
                    <h2 className='login-heading'>Sign in to your account!</h2>
                    <TextField
                        id='outlined-helperText'
                        label='Email'
                        helperText={errorField === 'email' ? error : ''}
                        variant='outlined'
                        className={`${
                            errorField === 'email' && 'error-input'
                        } input-form`}
                        name='email'
                        onChange={setForm}
                    />

                    <TextField
                        id='outlined-helperText'
                        label='Password'
                        helperText={errorField === 'password' ? error : ''}
                        variant='outlined'
                        className={`${
                            errorField === 'password' && 'error-input'
                        } input-form`}
                        type='password'
                        name='password'
                        onChange={setForm}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        className='button-form'
                        type='submit'
                    >
                        LOG IN
                    </Button>
                    <div className='register-login'>
                        <p>Don't have an account yet? Go make one!</p>
                        <Link to='/register' className='link-to-register'>
                            Sign Up!
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
const mapDispatchToProps = {
    login,
};
export default connect(null, mapDispatchToProps)(Login);
