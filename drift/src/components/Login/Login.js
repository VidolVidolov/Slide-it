import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import './Login.scss';
const Login = () => {
    return (
        <div className='login-page-wrapper'>
            <div className='login-form-wrapper'>
                <form className='form-login'>
                    <h2 className='login-heading'>Sign in to your account!</h2>
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

export default Login;
