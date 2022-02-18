import React, { useState, createContext, useEffect } from 'react'
import { getMethod } from '../API';
const { Provider, Consumer } = createContext();




function ProjectContextProvider({ children }) {

    const [projectList, setProjectList] = useState([]);
    useEffect(() => {

        getMethod('projects')
            .then((response) => {
                setProjectList(response.data);
            })
    }, [])


    return (
        <Provider value={{
            projectList: projectList,
            setProjectList: setProjectList
        }}>
            {children}
        </Provider>
    )

}


export { ProjectContextProvider, Consumer as ProjectContextConsumer }