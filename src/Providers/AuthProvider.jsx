import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase.config";
import { createContext, useContext, useEffect, useState } from "react";



const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUp = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn = (email, password)=> {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=> {
        setLoading(true);
        return signOut(auth);
    }
    const loginWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
      } )
      setLoading(false);
      return ()=>{
        return unsubscribe;
      }
    },[])

    const authInfo = {
        user,
        signUp, 
        logIn,
        logOut,
        loading,
        loginWithGoogle
    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;