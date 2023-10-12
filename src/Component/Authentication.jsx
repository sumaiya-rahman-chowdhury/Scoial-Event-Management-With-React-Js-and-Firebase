import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect } from "react";
import auth from "../firebase.config";
import { useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthenticationContext = new createContext()
const Authentication = ({children}) => {


    const provider = new GoogleAuthProvider();
   const googleSignIn = ()=>{
    return signInWithPopup(auth,provider)
   } 



    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const signUp = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authinfo = {signUp,logIn,logOut,user,setUser,loading,setLoading,googleSignIn}
    return (
        <div>
            <AuthenticationContext.Provider value ={authinfo}>
            {children}
            </AuthenticationContext.Provider>
        </div>
    );
};

export default Authentication;