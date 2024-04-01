import AdminHeader from "../../components/Admin/AdminHeader"
import StaffList from "../../components/Admin/StaffList"

function ShowStaff() {
  return (
    <>
        <AdminHeader/>
        <div className="bg-gray-400">

        <StaffList/>
        </div>
    </>
  )
}

export default ShowStaff