import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import './Register.scss';
const Register = () => {
    return (
        <div className='register-page-wrapper'>
            <div className='register-form-wrapper'>
                <form className='form-register'>
                    <h2 className='register-heading'>
                        Create your account in no time!
                    </h2>
                    <TextField
                        id='outlined-helperText'
                        label='Email'
                        helperText='Enter your email'
                        variant='outlined'
                        className='input-form'
                    />

                    <TextField
                        id='outlined-helperText'
                        label='Password'
                        helperText='Enter your password'
                        variant='outlined'
                        className='input-form'
                        type='password'
                    />
                    <TextField
                        id='outlined-helperText'
                        label='Repeat password'
                        helperText='Repeat password'
                        variant='outlined'
                        className='input-form'
                        type='password'
                    />
                    <TextField
                        id='outlined-helperText'
                        label='Current car'
                        helperText='Current car'
                        variant='outlined'
                        className='input-form'
                        type='text'
                    />
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

export default Register;
