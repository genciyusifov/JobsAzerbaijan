import React from 'react'
import { createContext, useState } from "react";
export const AuthContext = createContext()


 function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(null)
    const  obj = {
         token, 
         setToken,
         loading,
         setLoading
         }


    return (
        <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider