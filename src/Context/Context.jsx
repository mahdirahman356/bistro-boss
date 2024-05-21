import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import auth from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext()
const provider = new GoogleAuthProvider();
const Context = ({ children }) => {

    let [user, setUser] = useState(null)
    let [loading, setLoading] = useState(true)
    let [menuList, SetMenuList] = useState("")


    let createAccount = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    let userUpdate = async(displayName, photoURL) => {
        setLoading(true);
    try {
        await updateProfile(auth.currentUser, { displayName, photoURL });
        setUser({
            ...auth.currentUser,
            displayName: displayName,
            photoURL: photoURL
        });
    } catch (error) {
        console.error("Error updating user profile:", error);
    } finally {
        setLoading(false);
    }
    }

    let loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    let googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    let userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            console.log("onAuthStateChanged", currentUser)
            setUser(currentUser)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo =
    {
        createAccount,
        userUpdate,
        loginUser,
        user,
        userLogOut,
        googleLogIn,
        loading,
        menuList, 
        SetMenuList
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Context.propTypes = {
    children: PropTypes.node.isRequired
}
export default Context;