import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    
    if(loading){
        return <span className="loading loading-spinner text-[#FF3811]"></span>
    }
    if(user?.email){
        return children
    }

    return <Navigate to='/login' replace/>;
};

export default PrivateRoute;