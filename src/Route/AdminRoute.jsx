import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../CustomHook/useAdmin';

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-xs"></span>
    }

    if(user && isAdmin){
        return children;
    }
    return (<Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default AdminRoute;