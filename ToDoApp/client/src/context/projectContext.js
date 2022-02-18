import React, { useState, createContext, useEffect } from 'react'
import { getMethod } from '../api';
export const ProjectContext = createContext();




function ProjectContextProvider({ children }) {

    const [projectList, setProjectList] = useState([]);
    useEffect(() => {

        getMethod('projects')
            .then((response) => {
                setProjectList(response.data);
            })
    }, [])


    return (
        <ProjectContext.Provider value={{
            projectList: projectList,
            setProjectList: setProjectList
        }}>
            {children}
        </ProjectContext.Provider>
    )

}


export default  ProjectContextProvider