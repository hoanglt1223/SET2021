import React, { useState, createContext, useEffect } from 'react'
export const AuthContext = createContext();




function AuthenticationContextProvider({ children }) {

    const [isUserLogin, setUserLogin] = useState(false);
    // const login = callback => {
    //   setuserLogin(true)
    //   setTimeout(callback, 200)
    // }

    // const logout = callback => {
    //   setuserLogin(false)
    //   setTimeout(callback, 200)
    // }


    return (
        <AuthContext.Provider value={{
            isUserLogin: isUserLogin,
            setuserLogin: setUserLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )

}


export default AuthenticationContextProvider