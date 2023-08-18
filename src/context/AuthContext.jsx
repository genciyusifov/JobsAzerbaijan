import React from 'react'
import { createContext, useState } from "react";
export const AuthContext = createContext()


 function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [stat, setStat] = useState(false)
    const [token, setToken] = useState(null)
    const  obj = {
         token, 
         setToken,
         loading,
         setLoading,
         stat,
         setStat
         }


    return (
        <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider