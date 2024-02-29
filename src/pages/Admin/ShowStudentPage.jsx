import AdminHeader from "../../components/Admin/AdminHeader"
import StudentsList from "../../components/Staff/ShowStudent"

function ShowStudentPage() {
  return (
    <>
    <div>
        <AdminHeader/>
    </div>
    <div>
        <StudentsList/>
    </div>
    </>
  )
}

export default ShowStudentPage