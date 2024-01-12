import React from 'react';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useBooking = () => {
    const {user, loading} = useAuth();
    const token = localStorage.getItem('access-token');
 
    const {refetch,data: bookings=[]} = useQuery({
     queryKey: ['cart',user?.email],
     enabled: !loading,
     queryFn: async () =>{
         const response = await fetch(`http://localhost:3000/bookings?email=${user.email}`, {
             headers: {
                 authorization: `bearer ${token}`
             }
         })
         return response.json();
     }
    })
 
    return [bookings,refetch]
 }

export default useBooking;