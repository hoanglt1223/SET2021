import UserManager from "../../components/userManager"
import { UserContextProvider } from "../../context/userContext.js";
import React from "react";

function RouteUsers() {
	return (
		<UserContextProvider>
			<UserManager />
		</UserContextProvider>
	)
}

export default RouteUsers