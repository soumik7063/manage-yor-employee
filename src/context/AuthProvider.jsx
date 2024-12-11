import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../ulits/LocalStorage';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [userData,setUserData] = useState(null)
    setLocalStorage();
    useEffect(()=>{
      const {employees, admin} = getLocalStorage();
      setUserData({employees,admin});
    },[])
    

  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
