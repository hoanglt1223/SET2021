import UserManager from "../../components/userManager"
import { UserContextProvider } from "../../context/userContext.js";

function RouteUsers() {
	return (
		<UserContextProvider>
			<UserManager />
		</UserContextProvider>
	)
}

export default RouteUsers