import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const authContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    // console.log(user);


    //create user with email and password
    const createUserWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Create User with google
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    //signOut user
    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            return () => {
                unsubcribe()
            }
        })

    }, [])

    const authInfo = {
        createUserWithEmailPass,
        createUserWithGoogle,
        signOutUser,
        setUser,
        user
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;