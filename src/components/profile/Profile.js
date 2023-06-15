import { CustomerForm } from "./CustomerForm"
import { EmployeeForm } from "./EmployeeForm"

export const Profile = () => {

    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserOBject = JSON.parse(localHoneyUser)

    if (honeyUserOBject.staff) {
        return <EmployeeForm />
    }
    else {
        return <CustomerForm />
    }
}