import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/Firebase';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

 const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signin with google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // current user onAuthStateChanged
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail}
            setUser(currentUser);
            // console.log('current user--->',currentUser);
            setLoading(false);
            // if user exists then issue a token
            if(currentUser){
                axios.post('https://car-doctor-server-gamma-lilac.vercel.app/jwt', loggedUser, { withCredentials: true})
                .then(res => {
                    // console.log('token response',res.data)
                })
            }
            else{
                axios.post('https://car-doctor-server-gamma-lilac.vercel.app/logout', loggedUser, { withCredentials: true })
                .then(res => {
                    // console.log(res.data)
                })
            }
        });
        return unsubscribe;
    }, []);

    const authInfo = { 
        user,
        setUser,
        loading,
        error,
        setError,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
 };
 
 export default AuthProvider;