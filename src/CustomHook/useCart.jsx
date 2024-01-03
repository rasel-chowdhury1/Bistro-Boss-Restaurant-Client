import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const useCart = email => {
   const {user} = useContext(AuthContext);

   const {refetch,data: cart=[]} = useQuery({
    queryKey: ['cart',user?.email],
    queryFn: async () =>{
        const response = await fetch(`http://localhost:3000/carts?email=${user.email}`)
        return response.json();
    }
   })

   return [cart,refetch]
}

export default useCart;