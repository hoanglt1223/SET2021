import React, { useState, createContext, useEffect } from 'react'
import { getMethod } from '../api';
export const UserContext = createContext();




function UserContextProvider({ children }) {

    const [userList, setUserList] = useState([]);
    useEffect(() => {

        getMethod('get-users')
            .then((response) => {
                setUserList(response?.data ?? []);
            })
    }, [])


    return (
        <UserContext.Provider value={{
            userList: userList,
            setUserList: setUserList
        }}>
            {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider
