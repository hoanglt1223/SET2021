import React, { useState, createContext, useEffect } from 'react'
import { getMethod } from '../api';
const { Provider, Consumer } = createContext();




function UserContextProvider({ children }) {

    const [userList, setUserList] = useState([]);
    useEffect(() => {
        const data = window.sessionStorage.getItem('token');
        getMethod('get-users')
            .then((response) => {
                setUserList(response.data);
            })
    }, [userList.length])


    return (
        <Provider value={{
            userList: userList,
            setUserList: setUserList
        }}>
            {children}
        </Provider>
    )

}


export { UserContextProvider, Consumer as UserContextConsumer }
