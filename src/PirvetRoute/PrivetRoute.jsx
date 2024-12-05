import React, { useContext, useState } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    if (loading) {
        return <h2>loadeing now</h2>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivetRoute;