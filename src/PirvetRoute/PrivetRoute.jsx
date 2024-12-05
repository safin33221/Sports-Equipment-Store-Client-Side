import React, { useContext, useState } from 'react';
import { authContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Loader from '../Components/Loader';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    if (loading) {
        return <Loader></Loader>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>

};

export default PrivetRoute;