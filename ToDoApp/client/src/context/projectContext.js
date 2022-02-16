import React, {useState, createContext} from 'react'

const {Provider, Consumer} = createContext();

function ProjectContextProvider({children}){
    const [projectList, setProjectList] = useState([]);
    return (
        <Provider value = {{
            projectList : projectList,
            setProjectList: setProjectList
        }}>
            {children}
        </Provider>
    )

}


export {ProjectContextProvider, Consumer as ProjectContextConsumer}