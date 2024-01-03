import React, { useContext, useState } from 'react';
import registerImg from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders/AuthProviders';
import swal from 'sweetalert';

const Register = () => {
    const [error,setError] = useState('');

    const navigate = useNavigate();
    const {createUser,updateUserProfile,loading} = useContext(AuthContext);
    
    const handleSignUpButton = (event) =>{
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;
       const confirm = form.confirm.value;
       console.log(email,password,confirm)
       setError('');

       if(!/(?=.*[a-zA-Z])/.test(password)){
        setError('must added alpha charecter in password field');
        return;
        }
       else if(!/(?=.*[!@#$%&?"])/.test(password)){
            setError('must added special charecter in password field.example: !#@%&');
            return;
        }
       else if(!/(?=.*[0-9])/.test(password)){
            setError('must added number in password field');
            return;
        }
       else if(password.length > 8){
        setError('Password is short.add maximum 8 characters')
        }
        else if (password !== confirm) {
            setError('Passwords do not match with confirm password');
        return;
        }

        createUser(email,password)
        .then(result =>{
            console.log(result.user);
            updateUserProfile(name,photo)
            .then( () =>{
                console.log('user profile info updated')
                swal("Successfully Created")
                form.reset();
                navigate('/');
            })
            .catch( (error) =>{
                console.log(error)
            })
            
        })
        .catch(error => {
            setError(error.message);
        })
       
    }


    return (
        <div className='mx-auto p-20  bg-base-200'>
                <div className="hero min-height bg-base-200 shadow-2xl border-b-8 border-r-8 border-r-gray-200 border-b-gray-200">
                    <div className="hero-content p-10 content-center justify-center flex-col lg:flex-row-reverse">               
                        
                        <div className="w-[100px] h-[200px] md:w-[548px] md:h-[355px]">
                            <img src={registerImg} alt="" />
                        </div>

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">SignUP</h1>
                            <form onSubmit={handleSignUpButton} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="PhotoUrl" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="text" name="confirm" placeholder="Confirm Password" className="input input-bordered" required />
                                </div>

                                <div className="form-control mt-6">
                                 <button className="btn btn-warning">
                                   <input className='btn-submit' type="submit" value="Sign Up" />
                                 </button>
                                </div>
                            </form>
                            <p className='text-red-500 text-center py-2'>{error}</p>
                            <p className='text-center text-orange-400'><span><Link to='/login'>Already registered?</Link></span> Go to log in</p>
                            <p className='text-center text-black-400'>Or sign in with</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Register;