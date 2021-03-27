import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, email, ...children }) {
    if (!localStorage.getItem('loggedIn')) {
        return (
            <Route {...children} render={(props) => <Component {...props} />} />
        );
    } else {
        return <Redirect to='/home' />;
    }
}

export default PrivateRoute;
