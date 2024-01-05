import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {

    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ["isAdmin", user?.email],
        queryFn: async() =>{
            const response = await fetch(`http://localhost:3000/users/admin/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}` 
                }
            })
            return response.json()
        }
    })
    return [isAdmin, isAdminLoading ];
};

export default useAdmin;