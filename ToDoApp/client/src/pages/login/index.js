import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LogInContent from '../../components/login'
import SignUp from '../../components/signup'
import routes from '../../routes'

export default function RouteLogIn() {
	return (
		<React.Fragment>
			<Routes>
				<Route path={routes.home.value} element={<Navigate to={routes.login.value}></Navigate>}></Route>
				<Route path={routes.login.value} element={<LogInContent />}></Route>
				<Route path={routes.signup.value} element={<SignUp />}></Route>
			</Routes>
		</React.Fragment>
	)
}