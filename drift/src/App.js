import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import LoggedHome from './components/LoggedHome';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { onAuthStateChanged } from './actions/userActions';
import PrivateRoute from './hoc/PrivateRoute';
import PublicRoute from './hoc/PublicRoute';
import './App.css';

function App({ user, onAuthStateChanged }) {
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
                </Switch>
            </Layout>
        </div>
    );
}
const mapStateToProps = (state) => ({
    user: state.user,
});
const mapDispatchToProps = {
    onAuthStateChanged,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
