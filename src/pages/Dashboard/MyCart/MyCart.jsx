import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../CustomHook/useCart';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';

const MyCart = () => {
    const [cart,refetch] = useCart();
    console.log(cart)
    //how does reduce work
    const total = cart.reduce((sum,item) =>item.price + sum, 0)

    const handleDeleteButton = (id) =>{
        Swal.fire({
            title: "Are you sure",
            text: "Order Item delete from Your cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Yes,delete it!"
        })
        .then(result =>{
            if(result.isConfirmed){
                fetch(`http://localhost:3000/carts/${id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                       refetch()
                       Swal.fire({
                        icon: "success",
                        title: "Deleted",
                        text: "Successfully Deleted Item",
                      });
                    }
                })
            }
        })
        
        
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss || My Cart</title>
            </Helmet>
            <div className='uppercase font-semibold h-[60px] flex justify-evenly items-center'>
                <h2>Total Items : {cart.length}</h2>
                <h2>Total Price : {total}</h2>
                <button className="btn btn-warning">pay</button>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='uppercase'>
                    <tr>
                        <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                        </th>
                        <th>item image</th>
                        <th>item name</th>
                        <th>price</th>
                        <th>action</th>
                    </tr>
                    </thead>
                    <tbody>

                        {cart.map((item,index) => <tr
                        key={item._id}>
                            <th>
                              {index+1}
                            </th>
                            <td>
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img src={item.image} alt="product-image" />
                                </div>
                              </div>
                            </td>
                            <td>
                                {item.name}
                            </td>
                            <td className='text-end'>${item.price}</td>
                            <th>
                            <button onClick={()=>handleDeleteButton(item._id)} className="btn btn-ghost btn-xs text-xl text-orange-400"><FaTrashAlt /></button>
                            </th>
                        </tr>
                        )}
                        
                    </tbody>
                    
                </table>
                </div>

        </div>
    );
};

export default MyCart;