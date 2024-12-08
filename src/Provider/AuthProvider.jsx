import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const authContext = createContext(null)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()

    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [theme, setTheme] = useState(true)
    // console.log(user);


    //create user with email and password
    const createUserWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //login user with email and password
    const loginUserWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    //Create User with google
    const createUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //signOut user
    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            return () => {
                unsubcribe()
            }
        })

    }, [])

    const authInfo = {
        createUserWithEmailPass,
        loginUserWithEmailPass,
        createUserWithGoogle,
        signOutUser,
        setUser,
        setTheme,
        user,
        loading,
        theme,
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;