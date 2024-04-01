import AdminHeader from "../../components/Admin/AdminHeader"
import StudentsList from "../../components/Staff/ShowStudent"

function ShowStudentPage() {
  return (
    <>
    <div>
        <AdminHeader/>
    </div>
    <div className="bg-gray-400">
        <StudentsList/>
    </div>
    </>
  )
}

export default ShowStudentPage