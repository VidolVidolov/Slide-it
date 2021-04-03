import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { onAuthStateChanged } from './actions/userActions';
import PrivateRoute from './hoc/PrivateRoute';
import PublicRoute from './hoc/PublicRoute';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoggedHome from './components/LoggedHome';
import Profile from './components/Profile';
import CarDetails from './components/CarDetails/CarDetails';
import './App.scss';

function App({ onAuthStateChanged }) {
    useEffect(() => {
        onAuthStateChanged();
    }, [onAuthStateChanged]);
    return (
        <div className='App'>
            <Layout>
                <Switch>
                    <PublicRoute exact path='/' component={Home}></PublicRoute>
                    <PublicRoute path='/login' component={Login}></PublicRoute>
                    <PublicRoute
                        path='/register'
                        component={Register}
                    ></PublicRoute>
                    <PrivateRoute
                        path='/home'
                        component={LoggedHome}
                    ></PrivateRoute>
                    <PrivateRoute
                        path='/profile'
                        component={Profile}
                    ></PrivateRoute>
                    <PrivateRoute
                        path='/:id/details'
                        component={CarDetails}
                    ></PrivateRoute>
                </Switch>
            </Layout>
        </div>
    );
}

const mapDispatchToProps = {
    onAuthStateChanged,
};
export default connect(null, mapDispatchToProps)(App);
