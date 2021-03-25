import { Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

function App() {
    return (
        <div className='App'>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/login' component={Login}></Route>
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
