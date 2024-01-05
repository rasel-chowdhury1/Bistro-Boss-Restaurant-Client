import React, { useContext } from 'react';
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {GoogleSignIn} = useContext(AuthContext);
    console.log(GoogleSignIn)
    const navigate = useNavigate();
    const location = useLocation();

    const form = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        console.log("clicked google button")
        GoogleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
            const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            fetch('http://localhost:3000/users',{
                    method: "POST",
                    headers: {
                        "content-type": 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data =>{
                            navigate(form, {replace: true})
                    })
            
        })
    }


    return (
        <div className='flex justify-center mx-auto my-3'>
            <button  className="btn btn-circle btn-outline btn-sm mr-4"><BsFacebook /></button>
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-sm mx-4"><FcGoogle /></button>
            <button className="btn btn-circle btn-outline btn-sm mx-5"><FaGithub /></button>
         </div>
    );
};

export default SocialLogin;