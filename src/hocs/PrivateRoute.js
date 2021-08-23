import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectAuth } from '../store/profile/selectors';

function PrivateRoute({ ...props }) {
    const authed = useSelector(selectAuth);
        return authed ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute;