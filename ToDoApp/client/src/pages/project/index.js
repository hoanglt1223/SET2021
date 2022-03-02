import { ProjectContextProvider } from '../../context/projectContext'
import ProjectManager from '../../components/projects'
import React from 'react'
export default function RouteProjects() {
    return (
        <ProjectContextProvider>
            <ProjectManager />
        </ProjectContextProvider>
    )
}