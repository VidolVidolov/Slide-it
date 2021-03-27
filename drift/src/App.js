import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register/Register';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { onAuthStateChanged } from './actions/userActions';
import './App.css';

function App({ user, onAuthStateChanged }) {
    useEffect(() => {
        onAuthStateChanged();
    }, [onAuthStateChanged]);
    return (
        <div className='App'>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/register' component={Register}></Route>
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
