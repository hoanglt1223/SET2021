import React from 'react'
import ProjectMananger from './components/projects'
import { ProjectContextProvider } from './context/projectContext'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import UserManager from "./components/userManager" 
import { UserContextProvider } from "./context/userContext.js"; 

function RouteProjects() {
    return (
        <ProjectContextProvider>
            <ProjectMananger />
        </ProjectContextProvider>
    )
}


function RouteHome() {
    return (
        <React.Fragment>
            <span style={{ fontSize: '100px' }}>
                TO DO APP
            </span>

            <span style = {{textDecoration: 'underline'}}>by: Nam & Tai</span>
        </React.Fragment>
    )
}

function RouteUsers(){
    return (
        <UserContextProvider>
            <UserManager />
        </UserContextProvider>
    )
}


export default function App() {
    return (

        <React.Fragment>
            <Router>
                <div id="router">
                    <ul style={{ height: "100%" }}>
                        <li className='navTool' onClick={e => (e.currentTarget.firstChild.click())}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='navTool' onClick={e => (e.currentTarget.firstChild.click())}>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li className='navTool' onClick={e => (e.currentTarget.firstChild.click())}>
                            <Link to='/users' >Users</Link>

                        </li>
                    </ul>
                </div>

                <div id="app">
                    <Routes>
                        <Route path="/" element={<RouteHome />}></Route>
                        <Route path='/projects' element={<RouteProjects />}></Route>
                        <Route path="/users" element={<RouteUsers/>}></Route>
                    </Routes>


                </div>
            </Router>
        </React.Fragment>
    )
}

