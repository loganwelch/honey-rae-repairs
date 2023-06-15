import { EmployeeViews } from "./EmployeeViews.js"
import { CustomerViews } from "./CustomerViews.js"



export const ApplicationViews = () => {

	const localHoneyUser = localStorage.getItem("honey_user")
	const honeyUserOBject = JSON.parse(localHoneyUser)

	if (honeyUserOBject.staff) {
		// Return employee view
		return <EmployeeViews />
	}
	else {
		// Return customer views
		return <CustomerViews />
	}
}
