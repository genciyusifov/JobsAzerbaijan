import React from 'react'
import { createContext, useState } from "react";
export const AuthContext = createContext()


 function AuthProvider({ children }) {

    const [token, setToken] = useState(null)
    const  obj = { token, setToken }


    return (
        <AuthContext.Provider value={obj}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider