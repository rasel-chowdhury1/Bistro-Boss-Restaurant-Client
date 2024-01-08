import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    
  const token = localStorage.getItem('access-token');

    // const {refetch,data: users=[]} = useQuery({
    //     queryFn: async () =>{
    //         const response = await fetch("http://localhost:3000/users")
    //         return response.json();
    //     }
    //    })

       const {data: users=[],refetch} = useQuery({
        queryFn: async () =>{
            const response = await fetch("http://localhost:3000/users", {
              headers: {
                authorization: `bearer ${token}`
              }
            })
            return response.json();
        }
       })

       console.log(users)

    const handleMakeAdmin = user => {
        console.log(user._id)
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
          method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
          if(data.modifiedCount){
            refetch()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${user.name} is an admin Now!`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }

    
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || All Users</title>
            </Helmet>
            <h3 className='text-3xl font-semibold'>Total Users: {users.length}</h3>

          <div className="overflow-x-auto">
              <table className="table table-zebra">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                    {
                        users.map((user,index) => <tr key={user._id}>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role === 'admin' ? 'admin' 
                            : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-red-600 text-white "><FaUserShield /></button>}</td>
                            <td><button className="btn btn-ghost bg-red-600 text-white "><FaTrashAlt /></button></td>
                          </tr>)
                    }
                  
                </tbody>
              </table>
          </div>
      </div>
    );
};

export default AllUsers;