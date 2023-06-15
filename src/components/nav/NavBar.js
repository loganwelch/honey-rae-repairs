import "./NavBar.css"
import { EmployeeNav } from "./EmployeeNav"
import { CustomerNav } from "./CustomerNav"

export const NavBar = () => {

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserOBject = JSON.parse(localHoneyUser)

    if (honeyUserOBject.staff) {
        // Return employee view
        return <EmployeeNav />
    }
    else {
        // Return customer views
        return <CustomerNav />
    }
}

