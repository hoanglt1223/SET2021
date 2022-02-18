import React, { useState, createContext, useEffect } from 'react'
const { Provider, Consumer } = createContext();




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
        <Provider value={{
            isUserLogin: isUserLogin,
            setuserLogin: setUserLogin,
        }}>
            {children}
        </Provider>
    )

}


export { AuthenticationContextProvider, Consumer as AuthenticationContextConsumer }