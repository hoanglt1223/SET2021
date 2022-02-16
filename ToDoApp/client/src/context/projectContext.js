import React, {useState, createContext} from 'react'

const ProjectContext = createContext();

function ProjectContextProvider({children}){
    const [projectList, setProjectList] = useState([]);
    return (
        <ProjectContext.Provider value = {{
            projectList : projectList,
            setProjectList: setProjectList
        }}>
            {children}
        </ProjectContext.Provider>
    )

}


export {ProjectContextProvider, ProjectContext}