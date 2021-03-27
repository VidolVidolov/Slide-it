import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userEmail } from '../reducers/userReducer';

function PrivateRoute({ component: Component, email, ...children }) {
    if (email === '') {
        return (
            <Route {...children} render={(props) => <Component {...props} />} />
        );
    } else {
        return <Redirect to='/home' />;
    }
}

const mapStateToProps = (state) => ({
    email: userEmail(state),
});
export default connect(mapStateToProps, null)(PrivateRoute);
