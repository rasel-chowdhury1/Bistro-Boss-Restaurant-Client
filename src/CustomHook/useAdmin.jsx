import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";


const useAdmin = () => {
    const { user, loading} = useContext(AuthContext);
    // console.log(user)
    const [axiosSecure] = useAxiosSecure();
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res.data);
            return res.data?.admin;
        }
    })

    // console.log(isAdmin)
    return [isAdmin, isAdminLoading]
};

export default useAdmin;