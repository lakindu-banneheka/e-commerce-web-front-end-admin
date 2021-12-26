import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';



const PrivateRoute = () => {
    const token = window.localStorage.getItem('token');
    const useAuth = () => {
        if(token){
            return true;
        } else {
            return false;
        }
    }
    const auth = useAuth();
    return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;