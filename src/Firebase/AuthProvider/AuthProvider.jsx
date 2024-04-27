import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from './../Firebase.config';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader] = useState(true);

  const createUser = (email,password)=>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

 
  const updateUserProfile = (name,photo) => {
    return updateProfile(auth.currentUser, {
       displayName: name,
       photoURL: photo,
     })
   }


const AuthInfo = {
  user,
  loader,
  createUser,
  updateUserProfile,
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser);
    setLoader(false)
  })
  return() => unsubscribe();
},[])

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;