import React, { useEffect } from 'react';
import { createContext } from "react";
import {getAuth,createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from "../../Firebase/Firebase.config";
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [user,setUser] = useState('');
    const [loading,setLoading] = useState(true);
    
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const SignIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const updateUserProfile = (name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

     //observe user auth state
     useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })

        return () =>{
            return unsubscribe();
        }
    },[])

    const AuthInfo = {
        user,
        loading,
        createUser,
        SignIn,
        Logout,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

