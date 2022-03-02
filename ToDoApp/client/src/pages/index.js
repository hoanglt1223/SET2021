import React from 'react'
import RouteUsers from './user'
import RouteProjects from './project'
import RouteHome from './home'
import Account from '../components/account'
import LogOut from '../components/logout'
import { Link, Routes, Route, Navigate } from 'react-router-dom'
import routes from '../routes'

export default function RoutersApp() {
	return (

		<React.Fragment>
			<div id="router">
				<ul id='containerTool' style={{ height: "100%" }}>
					<li className='navTool' onClick={e => (e.currentTarget.firstChild.click())}>
						<Link to={routes.home.value}>Home</Link>
					</li>
					<li className='navTool' onClick={e => (e.currentTarget.firstChild.click())}>
						<Link to={routes.projects.value}>Projects</Link>
					</li>
					<li className='navTool' onClick={e => (e.currentTarget.firstChild.click())}>
						<Link to={routes.users.value} >Users</Link>
					</li>
					<li className='navTool' onClick={e => (e.currentTarget.firstChild.click())}>
						<Link to={routes.account.value} >Account</Link>
					</li>
					<li className='navTool logout' onClick={e => (e.currentTarget.firstChild.click())}>
						<LogOut />
					</li>

				</ul>
			</div>

			<div id="app">
				<Routes>
					<Route path={routes.home.value} element={<RouteHome />}></Route>
					<Route path={routes.login.value} element={<Navigate to='/' />}></Route>
					<Route path={routes.projects.value} element={<RouteProjects />}></Route>
					<Route path={routes.users.value} element={<RouteUsers />}></Route>
					<Route path={routes.account.value} element={<Account />}></Route>
				</Routes>
			</div>
		</React.Fragment>

	)
}
